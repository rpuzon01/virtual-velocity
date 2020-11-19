import React, { useState, useEffect } from "react";

import { getSomething, getProducts } from "../api";
import NavBar from "./Navbar";

import { Product } from "./";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <>
      <div className="App">
        <Route path="/products">
          {products.map((product) => {
            return <Product product={product} />;
          })}
        </Route>
        <Route path="/products/:productId">
          {/* < Product products={products} setProducts={setProducts} /> */}
        </Route>
      </div>
    </>
  );
};

export default App;
