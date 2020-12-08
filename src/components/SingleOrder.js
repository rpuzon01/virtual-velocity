import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrdersByUserId } from '../api';
import './SingleOrder.css'

const SingleOrder = (props) => {
    const { orderId, } = useParams();
    const { user, orders, setOrders, token } = props;
    const [order, setOrder] = useState({})

    return (<>
        <div className="single-order">
        <div className="products">
        <h1>My Order: </h1>
        {orders && orders.map(({ products, id, userId, datePlaced, status }) =>
            <div key={id} className="orders">
            {console.log('12345', orders.userId)}
            {console.log('products in orders map', products)}
            {/* {console.log('priceOrders', price)} */}
            <header className="order-info">
            <div> Order #{id} </div>
            <div> Order Status: {status} </div>
            <div> Order Placed: {datePlaced} </div>
            </header>
            {products && products.map(({ id, name, description, category, price, quantity }) => user && user.id === userId && <>
                <h3>Product: {name}</h3>
                <div key={id} className="product">
                <div>Name: {name}</div>
                <div>Category: {category}</div>
                <div>Description: {description}</div>
                <div>Quantity: {quantity}</div>
                <div>Price: {price / 100.0}</div>
                </div>
                <div>
                </div>
                </>
            )
            }
            </div>
        )
        }
        </div>
        </div>
        </>
    );
}

export default SingleOrder;
