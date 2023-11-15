import { createSlice } from "@reduxjs/toolkit";

const cartItemsInitialState = [];

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: cartItemsInitialState,
  reducers: {
    setCartItems(state, action) {
      return [...state, action.payload];
    },
    removeFromCart(state, action) {
      return state.filter((item) => item._id !== action.payload);
    },
  },
});

export const { setCartItems, removeFromCart } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
