import { createSlice } from "@reduxjs/toolkit";

const productListInitialState = [];

const productListSlice = createSlice({
  name: "productList",
  initialState: productListInitialState,
  reducers: {
    setProductList(state, action) {
      return action.payload;
    },
  },
});

export const { setProductList } = productListSlice.actions;
export default productListSlice.reducer;
