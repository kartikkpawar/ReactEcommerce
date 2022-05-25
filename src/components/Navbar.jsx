import React from "react";
import "../styles/Navbar.css";
import { BiShoppingBag } from "react-icons/bi";
import { BsBagPlus } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
          <div className="addProduct">
            Add Product <BsBagPlus className="addProductIcon" />
          </div>
        </div>
      </div>
      <div className="profileCartContainer">
        <div className="avatar">KP</div>
        <NavLink to="/cart" className="navLink cartContainer">
          <AiOutlineShoppingCart className="cartIcon" />
          <span className="cartValue">20</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
