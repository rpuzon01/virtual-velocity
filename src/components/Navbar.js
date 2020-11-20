import React, { useEffect, useState } from "react";
import { Button, Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

import Login from './Login';

const NavBar = () => {
  useEffect(() => {
    console.log("useEffect activated");
  }, []);

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Virtual Velocity</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#products">Products</Nav.Link>
      </Nav>
      <Login />
    </Navbar>
  );
};

export default NavBar;
