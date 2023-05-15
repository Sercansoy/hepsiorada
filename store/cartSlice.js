import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        state.cart.push(action.payload);
      } else {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              count: item.count + action.payload.customCount,
            };
          } else {
            return item;
          }
        });
      }
    },
    deleteProduct: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer;
