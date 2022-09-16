import React from "react";
import "./styles.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Intro from "./Pages/Intro";
import ScrollToTop from "./Scripts/scrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/products" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
