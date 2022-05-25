import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  cartCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items = [...state.items, action.payload];
      state.cartCount += 1;
      state.total += parseInt(action.payload.price);
    },
    removeProduct: (state, action) => {
      const product = action.payload;
      const filterProduct = state.items.filter(
        (item) => item.cpId !== product.cpId
      );
      state.items = filterProduct;
      state.cartCount -= 1;
      state.total -= parseInt(product.price);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.cartCount = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
