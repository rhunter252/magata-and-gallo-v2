import React from "react";
import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Shop from "./Shop";
import Contact from "./Contact";
import About from "./About";
import NoPage from "./NoPage";

function Pages() {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default Pages;
