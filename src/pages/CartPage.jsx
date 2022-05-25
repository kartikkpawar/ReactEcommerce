import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import { BsCartX } from "react-icons/bs";
import "../styles/CartPage.css";
import { clearCart } from "../app/cartSlice";

const CartPage = () => {
  const { items, cartCount, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cartPageContainer">
      <div className="cartProductsContainer">
        {" "}
        {items.length > 0 ? (
          items.map((product) => <CartProduct product={product} cart />)
        ) : (
          <div className="emptyTextContainer">
            Your cart seem's to be empty 😟😟
          </div>
        )}
      </div>
      <div className="cartInfoContainer">
        <div className="cartInfoHolder">
          <span className="tagName">Total Products</span>
          <span className="tag">{cartCount}</span>
        </div>{" "}
        <div className="cartInfoHolder">
          <span className="tagName">Total Amount</span>
          <span className="tag"> &#8377; {total}</span>
        </div>
        {cartCount > 0 && (
          <button
            className="clearCartButton"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            <BsCartX className="clearCartIcon" />
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default CartPage;
