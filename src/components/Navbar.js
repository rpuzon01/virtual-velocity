import React, { useEffect, useState } from "react";
import { Button, Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { Route, Link } from "react-router-dom";

import { Login } from './';

const NavBar = (props) => {
  const { setUser, token, setToken } = props;

  return (
    <Navbar className="navbar fixed-top" bg="dark" variant="dark">
      <Navbar.Brand href="/">Virtual Velocity</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        {token && <Link to="/account">Account</Link>}
        {(!token) && <Link to="/register">Register</Link>}
      </Nav>
      <Login
        setUser={setUser}
        token={token}
        setToken={setToken} />
    </Navbar>
  );
};

export default NavBar;
