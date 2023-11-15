import React, { useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProductDetail } from "../redux/productDetailSlice";
import { setCartItems } from "../redux/cartItemsSlice";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const cartItems = useSelector((state) => state.cartItems);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/products/${id}`
      );
      dispatch(setProductDetail(response.data));
    };
    sendRequest();
  }, [id]);

  // const addToCartHandler = () => {
  //   const existProductInCart = cartItems.find(
  //     (item) => item.id === productDetail.id
  //   );
  //   if (!existProductInCart) {
  //     dispatch(setCartItems(productDetail));
  //     localStorage.setItem("cartItems", JSON.stringify([...JSON.parse(localStorage.getItem("cartItems")), productDetail]))
  //     navigate(`../cart/${id}`);
  //   } else {
  //     alert("محصول مورد نظر قبلا انتخاب شده است");
  //     navigate("../");
  //   }
  // };
  const addToCartHandler = () => {
    const existProductInCart = cartItems.find(
      (item) => item._id === productDetail._id
    );
    if (!existProductInCart) {
      dispatch(setCartItems(productDetail));
      const updatedCartItems = [...cartItems, productDetail];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      navigate(`../cart/${id}`);
    } else {
      alert("محصول مورد نظر قبلا انتخاب شده است");
      navigate("../");
    }
  };

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        بازگشت به صفحه اصلی
      </Link>
      <Row>
        <Col md={6}>
          <Image src={productDetail.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{productDetail.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>{productDetail.price}</ListGroup.Item>
            <ListGroup.Item>{productDetail.description}</ListGroup.Item>
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
