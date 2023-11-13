import React, {useEffect, useState} from "react";
import axios from "axios"
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";

const Product = ({ match }) => {
  const [product, setProduct] = useState({})

  const { id } = useParams();

  useEffect(() => {
    const sendRequest = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/products/${id}`
      )
      setProduct(response.data)
    }
    sendRequest()
  }, [match, id])
  
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
              <Button className="btn-block" type="button">
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
