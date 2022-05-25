import React from "react";
import "../styles/CartProduct.css";
import { BsCartDash } from "react-icons/bs";
import { removeProduct } from "../app/cartSlice";
import { useDispatch } from "react-redux";

// Cart Products component
const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemmoveFromCart = () => {
    dispatch(removeProduct(product));
  };

  return (
    <div className="productContainer cartProduct">
      <div className="productLeftContainer">
        <img src={product.image} alt="" className="cartProductImage" />
        <div className="cartProductNameRating">
          <span>{product.title}</span>
          <br />
          <span className="cartPrice">&#8377; {product.price} </span>
          <div className="ratings">{product.ratingsVal.map((r) => "⭐")}</div>
        </div>
      </div>
      <div className="productRightContainer">
        <p className="cartProductDescription">{product.description}</p>
        <div className="productsButtons">
          <BsCartDash
            className="icon removeCartIcon"
            onClick={handleRemmoveFromCart}
          />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
