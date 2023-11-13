import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentProduct } from "../redux/selectedProductSlice";

const Product = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const sendRequest = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/products/${id}`
      );
      setProduct(response.data);
    };
    sendRequest();
  }, [id]);

  const addToCartHandler = () => {
    dispatch(setCurrentProduct(product));
    navigate(`../cart/${id}`);
  };

  if (!product) return null;
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        بازگشت به صفحه اصلی
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>{product.price}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Button
                onClick={addToCartHandler}
                className="btn-block"
                type="button"
              >
                افزودن به سبد خرید
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
