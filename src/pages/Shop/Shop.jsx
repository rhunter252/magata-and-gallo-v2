import React from "react";
import { useMediaQuery, Grid, Container } from "@mui/material/";
import products from "../data";
import "./Shop.css";

const Shop = () => {
  const renderProducts = products.map((product) => (
    <div className="product_card" key={product.id}>
      <img className="product_img" src={product.image} alt="product image" />
      <div className="product_card_header">
        <h2>{product.name}</h2>
        <p className="product_desciption">{product.description}</p>
        <p className="price">
          <span>$</span>
          {product.price}
        </p>
      </div>
    </div>
  ));

  return (
    <div className="main_content">
      <div className="wrapper">
        <div className="product-grid">{renderProducts}</div>
      </div>
    </div>
  );
};

export default Shop;
