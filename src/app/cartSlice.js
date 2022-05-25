import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  cartCount: 0,
};

// Setting the cart values to loacal storage
const setStorage = (state) => {
  localStorage.setItem(
    "re-cart",
    JSON.stringify({
      items: state.items,
      total: state.total,
      cartCount: state.cartCount,
    })
  );
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // adding product to cart
    addProduct: (state, action) => {
      state.items = [...state.items, action.payload];
      state.cartCount += 1;
      state.total += parseInt(action.payload.price);
      setStorage(state);
    },
    // removing product from cart

    removeProduct: (state, action) => {
      const product = action.payload;
      const filterProduct = state.items.filter(
        (item) => item.cpId !== product.cpId
      );
      state.items = filterProduct;
      state.cartCount -= 1;
      state.total -= parseInt(product.price);
      setStorage(state);
    },
    // clearing the cart
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.cartCount = 0;
      setStorage(state);
    },
    // getting the cart from locastorage and using it
    loadCartFromStorage: (state) => {
      const localCart = localStorage.getItem("re-cart");
      if (!localCart) return;
      const { items, total, cartCount } = JSON.parse(localCart);
      state.items = items;
      state.total = total;
      state.cartCount = cartCount;
    },
  },
});

export const { addProduct, removeProduct, clearCart, loadCartFromStorage } =
  cartSlice.actions;

export default cartSlice.reducer;
