import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Login } from "./";

const NavBar = (props) => {
  const { setUser, token, setToken, setOrders, setCart } = props;

  return (
    <Navbar className="navbar fixed-top" bg="dark" variant="dark">
      <Navbar.Brand href="/">Virtual Velocity</Navbar.Brand>
      <Nav className="mr-auto">
        <Link
          style={{
            marginRight: "1rem",
            textDecoration: "none",
            color: "white",
          }}
          to="/"
        >
          Home
        </Link>
        <Link
          style={{
            marginRight: "1rem",
            textDecoration: "none",
            color: "white",
          }}
          to="/products"
        >
          Products
        </Link>
        <Link
          style={{
            marginRight: "1rem",
            textDecoration: "none",
            color: "white",
          }}
          to="/cart"
        >
          Cart
        </Link>
        {token && (
          <Link
            style={{
              marginRight: "1rem",
              textDecoration: "none",
              color: "white",
            }}
            to="/account"
          >
            Account
          </Link>
        )}
        {!token && (
          <Link
            style={{
              marginRight: "1rem",
              textDecoration: "none",
              color: "white",
            }}
            to="/register"
          >
            Register
          </Link>
        )}
      </Nav>
      <Login
        setCart={setCart}
        setOrders={setOrders}
        setUser={setUser}
        token={token}
        setToken={setToken}
      />
    </Navbar>
  );
};

export default NavBar;
