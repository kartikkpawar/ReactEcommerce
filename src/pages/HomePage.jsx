import React, { useState } from "react";
import Product from "../components/Product";
import { data } from "../data";
import "../styles/HomePage.css";

const HomePage = () => {
  const [products, setProducts] = useState(data.products);
  const deleteProductHandler = (id) => {
    const copyProcducts = [...products];
    const newProducts = copyProcducts.filter((product) => id !== product.id);
    setProducts(newProducts);
  };
  return (
    <div className="homePage">
      <div className="productsContainer">
        {products.map((product) => (
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
    </div>
  );
};

export default HomePage;
