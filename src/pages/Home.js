import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";

import Product from "../components/Product/Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await axios.get("http://localhost:8000/api/products");
      if (response.data.length !== 0) setProducts(response.data);
    };
    sendRequest();
  }, []);

  return (
    <div>
      <h1>محصولات</h1>
      <Row>
        {products.length !== 0 &&
          products.map((item) => {
            return (
              <Col key={item._id} sm={12} md={6} lg={3}>
                <Product product={item} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default Home;
