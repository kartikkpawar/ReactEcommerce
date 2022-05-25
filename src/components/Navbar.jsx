import React from "react";
import "../styles/Navbar.css";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// Nav bar component
const Navbar = () => {
  const { cartCount } = useSelector((state) => state.cart);

  return (
    <nav className="navbar">
      <div className="navLeft">
        <div className="logoContainer">
          <BiShoppingBag className="logoIcon" />
          <span>eCommerce</span>
        </div>
        <div className="linksContainer">
          <NavLink to="/" className="navLink">
            Products
          </NavLink>
        </div>
      </div>
      <div className="profileCartContainer">
        <div className="avatar">KP</div>
        <NavLink to="/cart" className="navLink cartContainer">
          <AiOutlineShoppingCart className="cartIcon" />
          {/* conditinoal rendering for cart value */}
          {cartCount !== 0 && <span className="cartValue">{cartCount}</span>}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
