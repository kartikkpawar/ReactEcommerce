import React, { useState } from "react";
import "../styles/Product.css";
import { FiEdit2 } from "react-icons/fi";
import { BiTrashAlt } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";
import { BsSave, BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addProduct } from "../app/cartSlice";
import { nanoid } from "nanoid";

const Product = ({ product, ratings, deleteproduct }) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    title: product.title,
    description: product.description,
    ratingsVal: ratings,
    price: Math.floor(product.price * 10),
  });
  const { title, description, ratingsVal, price } = values;
  const [editMode, setEditMode] = useState(false);

  const onChangeHandler = (name) => (e) => {
    const value = e.target.value;
    if (name === "ratings") {
      if (isNaN(value) || value > 5 || value === "") return;
      setValues({
        ...values,
        ratingsVal: Array(parseInt(value)).fill(""),
      });
    } else {
      setValues({ ...values, [name]: value });
    }
  };
  const discardChanges = () => {
    setValues({
      ...values,
      ratingsVal: ratings,
      title: product.title,
      description: product.description,
      price: product.price,
    });
    setEditMode(false);
  };

  const handleAddToCart = () => {
    const newProduct = {
      ...product,
      title,
      description,
      ratingsVal,
      price,
      cpId: nanoid(),
    };
    dispatch(addProduct(newProduct));
  };

  const saveProduct = () => {
    setEditMode(false);
  };
  const handleDeleteProduct = () => {
    deleteproduct(product.id);
  };
  return editMode ? (
    <div className="productContainer">
      <div className="productLeftContainer">
        <img src={product.image} alt="" className="productImage" />
        <div className="productNameRating">
          <input
            type="text"
            value={title}
            className="editInput"
            onChange={onChangeHandler("title")}
          />{" "}
          <input
            type="text"
            value={price}
            className="editInput"
            onChange={onChangeHandler("price")}
          />
          <div className="ratings">
            <input
              type="text"
              className="editInput"
              onChange={onChangeHandler("ratings")}
            />
          </div>
        </div>
      </div>
      <div className="productRightContainer">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="productDescriptionEdit"
          value={description}
          onChange={onChangeHandler("description")}
        ></textarea>
        <div className="productsButtons">
          <FcCancel className="trashIcon icon" onClick={discardChanges} />
          <BsSave className="editIcon icon" onClick={saveProduct} />
        </div>
      </div>
    </div>
  ) : (
    <div className="productContainer">
      <div className="productLeftContainer">
        <img src={product.image} alt="" className="productImage" />
        <div className="productNameRating">
          <span>{title}</span>
          <br />
          <span className="price">&#8377; {price} </span>
          <div className="ratings">{ratingsVal.map((r) => "⭐")}</div>
        </div>
      </div>
      <div className="productRightContainer">
        <p className="productDescription">{description}</p>
        <div className="productsButtons">
          <BiTrashAlt
            className="trashIcon icon"
            onClick={handleDeleteProduct}
          />
          <FiEdit2
            className="editIcon icon"
            onClick={() => setEditMode(true)}
          />
          <BsCartPlus className="icon addCartIcon" onClick={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default Product;
