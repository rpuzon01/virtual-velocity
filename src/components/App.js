import React, { useState, useEffect } from "react";

import { getSomething, getProducts } from "../api";
import NavBar from "./Navbar";

import { Product, SingleProduct } from "./";

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
        <NavBar />
        <Route exact path="/products">
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </Route>
        <Route exact path="/products/:productId">
            <SingleProduct />
        </Route>
      </div>
    </>
  );
};

export default App;
