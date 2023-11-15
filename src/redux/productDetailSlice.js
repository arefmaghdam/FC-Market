import { createSlice } from "@reduxjs/toolkit";

const productDetailInitialState = {
  _id: "",
  name: "",
  image: "",
  description: "",
  price: 0,
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: productDetailInitialState,
  reducers: {
    setProductDetail(state, action) {
      return action.payload;
    },
  },
});

export const { setProductDetail } = productDetailSlice.actions;
export default productDetailSlice.reducer;
