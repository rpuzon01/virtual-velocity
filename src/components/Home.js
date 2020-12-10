import React from 'react'
import './Home.css'
import "./index.css";
import {Product} from "./"

import {
  Link,
} from 'react-router-dom'

// import { Product } from "./"

const Home = (props) => {
  // const {products} = props
  // console.log(products.id)

  return <>
  <div className="bodyWrapper">
    <div className="hero-image">
  <div className="hero-text">
    <h1>Welcome to Virtual Traders</h1>
    <p>Buy Trading Cards Online</p>
    <Link className="btn btn-primary" to="/products">Start Trading</Link>
  </div>

</div>
<div id="homeContent">
<h2>Find hundreds of the most rare trading cards available</h2>
<p>Virtual Traders specializes in the hard to find, extra special, trading cards and collectables.</p>

    <p>Simply search our database of cards</p>
    <p>Select the card you want</p>
    <p>Add the card to your cart</p>
    <p>And checkout secured with Stripe</p>
    {/* {

    products.slice(0, 3).map( <>
     <Product key={products.id} products={products} />
     </>
    )

  } */}

</div>

</div>
</>
}

export default Home;
