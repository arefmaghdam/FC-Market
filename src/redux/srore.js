import { configureStore } from "@reduxjs/toolkit";
import selectedProductReducer from "./selectedProductSlice";

const store = configureStore({
  reducer: {
    selectedProduct: selectedProductReducer,
  },
});

export default store;
