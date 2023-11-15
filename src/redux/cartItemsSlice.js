import { createSlice } from "@reduxjs/toolkit";

const getCartItemsFromLocalStorage = () => {
  try {
    const cartItems = localStorage.getItem("cartItems");
    return cartItems ? JSON.parse(cartItems) : [];
  } catch (error) {
    console.error("Error parsing cart items from localStorage:", error);
    return [];
  }
};

const cartItemsInitialState = getCartItemsFromLocalStorage();

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
