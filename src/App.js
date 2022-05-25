import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import { loadCartFromStorage } from "./app/cartSlice";
import { useDispatch } from "react-redux";

const App = () => {
  // Loading the cart form localstorage
  const dispatch = useDispatch();
  dispatch(loadCartFromStorage());
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/cart" exact element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
