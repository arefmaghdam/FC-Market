import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Button } from "react-bootstrap";

const Cart = () => {
  const selectedProduct = useSelector((state) => state.selectedProduct.value);
  useEffect(() => {
    if(localStorage.getItem("products")) return
    let currentCartItems = [];
    currentCartItems = localStorage.setItem("products", JSON.stringify([]));
  }, []);
  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("products")),
        selectedProduct,
      ])
    );
  }, []);
  return (
    <div>
      <Row>
        <Col md={8}>
          <h2>سبد خرید</h2>
          {selectedProduct === undefined ? (
            <p>سبد خرید خالی است</p>
          ) : (
            <ListGroup variant="flush"></ListGroup>
          )}
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
};

export default Cart;
