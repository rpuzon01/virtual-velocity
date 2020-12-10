import React, { useEffect, useState } from "react";
import { SingleOrder } from "./"
import "./index.css";
const Cart = (props) => {
    const {user, setUser, cart} = props
    console.log('cart state in Cart component', cart);

    const handleCheckout = async () => {
        try {
             
        } catch (error) {
            throw error;
        }
    }

    const handleCancel = async () => {
        try {
        } catch (error) {
            console.error(error);
        }
    }

    return ( 
        <div className="bodyWrapper">
            <h1> Shopping Cart </h1>
            < SingleOrder order={cart} />
            <button type="button" className="btn btn-primary btn-block" onClick={() => {
                handleCheckout()
            }}>Confirm and Checkout</button>
            <button className="btn btn-danger btn-block">Cancel Order</button>
        </div>
        )
}

export default Cart;
