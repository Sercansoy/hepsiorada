import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { updateProducts } = productsSlice.actions;

export default productsSlice.reducer;
