import React, { useState, useEffect } from "react";

import { 
    getProducts 
} from "../api";

import { 
    Product, 
    SingleProduct,
    SingleOrder,
    NavBar
} from "./";

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
        <Route exact path="/orders/:orderId">
            <SingleOrder />
        </Route>
      </div>
    </>
  );
};

export default App;
