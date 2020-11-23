import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrdersByUserId } from '../api';
import './SingleOrder.css'

const SingleOrder = (props) => {
    const { orderId } = useParams();
    const { user } = props;
    const [order, setOrder] = useState({
            id: 1,
            status: 'created',
            userId: 1,
            datePlaced: "January 1, 2000",
            products: [{
                id: 2,
                name: "PSA grade 10 Base set Blastoise",
                description: "(dummy description)",
                price: 349995,
                inStock: true,
                category: "Pokemon Cards",
                quantity: 1
            }]
    });

    useEffect(() => {
    }, [])


    return (
        <div className="single-order">
            <header className="order-info"> 
                <div> Order#{order.id} </div>
                <div> Order Status: {order.status} </div>
                <div> Order Placed: {order.datePlaced} </div>
            </header>
            <div className="products">
                {
                    order.products.map(({id, name, description, category, price, quantity}) => {
                        return (
                            <div key={id} className="product">
                                <div>{name}</div>
                                <div>{category}</div>
                                <div>{description}</div>
                                <div>{quantity}</div>
                                <div>{price/100.0}</div>
                            </div>
                        );
                    })
                }  
            </div>
            <footer>
                <div className="total">
                    <div>
                        Total: $349.95
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default SingleOrder;
