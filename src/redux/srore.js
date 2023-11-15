import { configureStore } from "@reduxjs/toolkit";
import productDetailReducer from "./productDetailSlice";
import productListReducer from "./productListSlice";
import cartItemsReducer from "./cartItemsSlice";

const store = configureStore({
  reducer: {
    productDetail: productDetailReducer,
    productList: productListReducer,
    cartItems: cartItemsReducer,
  },
});

export default store;
