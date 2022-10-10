import { Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <Toolbar
      style={{
        position: "static",
        backgroundColor: "black",
        height: "8vh",
        color: "white",
      }}
    >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </Toolbar>
  );
}

export default Footer;
