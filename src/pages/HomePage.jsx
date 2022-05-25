import React, { useEffect, useState } from "react";
import { getAllProductssAPI } from "../apiHelper";
import Product from "../components/Product";
import AddProductModal from "../components/AddProductModal";
import { BsBagPlus } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/HomePage.css";

const HomePage = () => {
  useEffect(() => {
    getAllProductssAPI().then((data) => {
      localStorage.setItem("re-products", JSON.stringify(data));
      setProducts(data);
    });
  }, []);
  const [openModal, setOpenModal] = useState(false);

  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(false);

  // handleing deleting products
  const deleteProductHandler = (id) => {
    const copyProcducts = [...products];
    const newProducts = copyProcducts.filter((product) => id !== product.id);
    toast("Product Deleted", { type: "error" });

    setProducts(newProducts);
  };

  // handleing adding products
  const addProducthandler = (res) => {
    setProducts([...products, res]);
    setOpenModal(false);
    toast("Product Added", { type: "success" });
  };

  const sortProducts = () => {
    const filter = products.sort((p1, p2) => p1.price - p2.price);
    const orignal = JSON.parse(localStorage.getItem("re-products"));
    return sort ? filter : orignal;
  };

  return (
    <div className="homePage">
      <div className="sortContainer" onClick={() => setSort(!sort)}>
        <span className={`${sort && "sortTextActive"} sortText`}>
          Sort By Price
        </span>
      </div>
      <div className="productsContainer">
        {sortProducts().length > 0 &&
          sortProducts().map((product) => (
            <Product
              key={product.id}
              product={product}
              ratings={Array(Math.floor(Math.random() * (5 - 1 + 1)) + 1).fill(
                ""
              )}
              deleteproduct={(id) => {
                deleteProductHandler(id);
              }}
            />
          ))}
      </div>
      {!openModal && (
        <div className="addButton" onClick={() => setOpenModal(true)}>
          <BsBagPlus />
        </div>
      )}
      {openModal && (
        <AddProductModal
          close={() => setOpenModal(false)}
          addproduct={(res) => addProducthandler(res)}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default HomePage;
