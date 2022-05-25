import React, { useState } from "react";
import { createProductAPI } from "../apiHelper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/AddProductModal.css";

const AddProductModal = ({ close, addproduct }) => {
  const [values, setValues] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });
  const { title, price, description, image } = values;

  // handeling the input fields
  const onChangeHandler = (name) => (e) => {
    if (name === "price" && isNaN(e.target.value)) return;
    setValues({ ...values, [name]: e.target.value });
  };

  // creating the product
  const onAddHandler = () => {
    if (title === "" || price === "" || description === "" || image === "")
      return toast("Product Deleted", { type: "error" });
    createProductAPI(values).then((res) => addproduct(res));
  };
  return (
    <div className="modalContainer">
      <div className="addProductContainer">
        <span>Add Product</span>
        <input
          type="text"
          className="addProductInput"
          value={image}
          onChange={onChangeHandler("image")}
          placeholder="Product image url"
        />
        <input
          type="text"
          className="addProductInput"
          value={title}
          onChange={onChangeHandler("title")}
          placeholder="Product title"
        />
        <input
          type="text"
          className="addProductInput"
          value={price}
          onChange={onChangeHandler("price")}
          placeholder="Product price"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="addProductDesc"
          value={description}
          onChange={onChangeHandler("description")}
          placeholder="Product description"
        />
        <div className="modalButtonContainer">
          <button className="modalActionButton" onClick={close}>
            DISCARD
          </button>
          <button className="modalActionButton add" onClick={onAddHandler}>
            ADD
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProductModal;
