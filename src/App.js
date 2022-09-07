import React from "react";
import "./styles.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AnimatedCursor from "react-animated-cursor";
import Product from "./Pages/Product";

const App = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color="244, 244, 244"
        outerAlpha={0.2}
        innerScale={2}
        outerScale={9}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          ".menu",
          ".navigation-menu",
          ".navigation-menu2",
          ".sidemenu",
          ".closemenu",
        ]}
      />
    <Routes>
      <Route 
      exact
      path="/"
      element={<Home />}
      />
        <Route 
      exact
      path="/products"
      element={<Product />}
      />
    </Routes>
    </>
  );
};

export default App;
