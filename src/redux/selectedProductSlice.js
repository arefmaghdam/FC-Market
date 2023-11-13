import { createSlice } from "@reduxjs/toolkit";

const selectedProductInitialState = {
  _id: "",
  name: "",
  image: "",
  description: "",
  price: 0,
};

const selectedProductSlice = createSlice({
  name: "selectedProduct",
  initialState: selectedProductInitialState,
  reducers: {
    setCurrentProduct(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setCurrentProduct } = selectedProductSlice.actions;
export default selectedProductSlice.reducer;
