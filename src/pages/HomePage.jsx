import React from "react";
import Product from "../components/Product";
import { data } from "../data";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="productsContainer">
        {data.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            ratings={Array(Math.floor(Math.random() * (5 - 1 + 1)) + 1).fill(
              ""
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
