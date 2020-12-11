import React from "react";
import "./Home.css";
import "./index.css";

import { ImageSlider } from "./";

import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="bodyWrapper">
      <ImageSlider />
      <div className="hero-text">
        {" "}
        <h1 style={{ color: "white" }}>
          <b>Welcome to Virtual Traders</b>
        </h1>
        <p style={{ color: "white" }}>
          <b>Buy Trading Cards Online</b>
        </p>
        <Link className="btn btn-primary" to="/products">
          Start Trading
        </Link>
      </div>{" "}
      <div id="homeContent">
        <h2>Find hundreds of the most rare trading cards available</h2>
        <p>
          Virtual Traders specializes in the hard to find, extra special,
          trading cards and collectables.
        </p>

        <p>Simply search our database of cards</p>
        <p>Select the card you want</p>
        <p>Add the card to your cart</p>
        <p>And checkout secured with Stripe</p>
      </div>
    </div>
  );
};

export default Home;
