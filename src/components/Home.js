import React from 'react'
import './Home.css'
import "./index.css";
import { ImageSlider } from "./";
import {SingleProduct, Products, Contact} from "./"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import {
  Link,
} from 'react-router-dom'

// import { Product } from "./"

const Home = (props) => {
  const { token, user, cart, setCart, products, handleProductsDelete } = props;

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
<p>Virtual Traders specializes in the hard to find, extra special, trading cards and collectables.</p>

    <p>Simply search our database of cards</p>
    <p>Select the card you want</p>
    <p>Add the card to your cart</p>
    <p>And checkout secured with Stripe</p>

    <h2> Recently Updated Products </h2>
</div>


</div>

<div className="flexWrapper">

{

products && products.slice(0, 3).map(({category, price, name, id, imageURL, description, inStock }) => {
  return (


      <Card
        key={id}
        style={{
          width: "45vh",
          marginTop: "5vh",
          marginBottom: "5vh",
          minHeight: "58rem",
          border: "3px solid black",
        }}
      >
        <Card.Img
          style={{ height: "65vh", width: "100%" }}
          variant="top"
          src={imageURL}
        />
        <Card.Body>
          <Card.Title>
            <b>Name:</b> {name}
          </Card.Title>
          <Card.Text>
            <b>Description:</b> {description}
          </Card.Text>
          <Card.Text>
            <b>Price:</b> ${price / 100.0}
          </Card.Text>
          <Card.Text>
            <b>Category:</b> {category}
          </Card.Text>
          <Card.Text>
            <b>In Stock:</b> {inStock ? "Yes" : "No"}
          </Card.Text>
        </Card.Body>
      </Card>
  )
})

}
</div >
<div  style={{ textAlign: "center" }}>
<h5> Don't see exactly what you want? No need to trip potato chip, the Virtual Trading crew has got you covered. Hop on over to our <Link to="/products">products</Link> to view them all or shoot us an email for more information.

</h5>
<section id="contactTop" >
<Contact  />
</section>

</div>

</>
}

export default Home;
