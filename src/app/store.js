import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// combining all the reducers
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
