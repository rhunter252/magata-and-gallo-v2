import React from "react";
import { useMediaQuery, Grid, Container } from "@mui/material/";
import products from "../data";
import "./Shop.css";

const Shop = () => {
  const renderProducts = products.map((product) => (
    <div className="wrapper">
      <div className="card" key={product.id}>
        <div className="card_img">
          <img src={product.image} alt="product image" />
        </div>
        <div className="card_header">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="price">
            <span>$</span>
            {product.price}
          </p>
        </div>
      </div>
    </div>
  ));

  return <div className="main_content">{renderProducts}</div>;
};

export default Shop;
