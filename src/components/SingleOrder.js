import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrdersByUserId } from '../api';
import './SingleOrder.css'

const SingleOrder = (props) => {
    const { order } = props;
    const { orderId, } = useParams();

    return (
        <div className="single-order">
            {/* {console.log('priceOrders', price)} */}
            <header className="order-info">
            <div> Order #{order.id} </div>
            <div> Order Status: {order.status} </div>
            <div> Order Placed: {order.datePlaced} </div>
            </header>
            <div className="products">
            {order.products && order.products.map(({ id, name, description, category, price, quantity }) => { 
               return(
                   <div key={id} className="product">
                   <div>Name: {name}</div>
                   <div>Category: {category}</div>
                   <div>Description: {description}</div>
                   <div>Quantity: {quantity}</div>
                   <div>Price: {price / 100.0}</div>
                   </div>
               );
            }
            )
            }
            </div>
        )
        </div>
    );
}

export default SingleOrder;
