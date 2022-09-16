import React from "react";
import "./styles.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Intro from "./Pages/Intro";
import ScrollToTop from "./Scripts/scrollToTop";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      {/* <AnimatePresence exitBeforeEnter> */}
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<Intro />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/products" element={<Product />} />
        </Routes>
      {/* </AnimatePresence> */}
    </>
  );
};

export default App;
