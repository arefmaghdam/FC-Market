import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const selectedProduct = useSelector((state) => state.selectedProduct.value);
  useEffect(() => {
    console.log(selectedProduct);
  }, [selectedProduct]);
  return <div>{selectedProduct.name}</div>;
};

export default Cart;
