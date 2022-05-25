import React, { useEffect, useState } from "react";
import { getAllProductssAPI } from "../apiHelper";
import Product from "../components/Product";
import "../styles/HomePage.css";

const HomePage = () => {
  useEffect(() => {
    getAllProductssAPI().then((data) => setProducts(data));
  }, []);

  const [products, setProducts] = useState([]);
  const deleteProductHandler = (id) => {
    const copyProcducts = [...products];
    const newProducts = copyProcducts.filter((product) => id !== product.id);
    setProducts(newProducts);
  };
  return (
    <div className="homePage">
      <div className="productsContainer">
        {products.length > 0 &&
          products.map((product) => (
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
