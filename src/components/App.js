import React, { useState, useEffect } from "react";

import {
    getProducts,
    getUser,
    getOrdersByUserId
} from "../api";


import {
    Product,
    SingleProduct,
    Cart,
    NavBar,
    Register,
    SingleOrder,
    Account
} from "./";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import {
    getLocalToken
} from "../util";

const App = () => {
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const [orders, setOrders] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
      if (getLocalToken()) {
          setToken(getLocalToken());
      }
  }, []);

    useEffect(() => {
        getUser(token).then(setUser);
        getOrdersByUserId(user.id, token).then(setOrders);
    }, [token]);

    console.log('orders in main app', orders)

  return (
    <>
      <div className="App">
        <NavBar
            token={token}
            setToken={setToken}
            setUser={setUser}/>
        <Route exact path="/cart">
          < Cart />
        </Route>
        <Route exact path="/register">
        < Register token={token} setToken={setToken} user={user} setUser={setUser} />
        </Route>
        <Route exact path="/account">
          < Account user={user} setToken={setToken}/>
        </Route>
        <Route exact path="/products">
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </Route>
        <Route exact path="/products/:productId">
            <SingleProduct />
        </Route>
        <Route exact path="/orders/:orderId">
            <SingleOrder user={user} orders={orders} setOrders={setOrders} products={products} token={token}/>
        </Route>
      </div>
    </>
  );
};

export default App;
