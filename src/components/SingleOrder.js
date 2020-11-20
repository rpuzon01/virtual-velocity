import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleOrder = () => {
    const [order, setOrder] = useState({});

    useEffect(() => {
        //acts as dummy data
        setOrder({
            id: 1,
            status: 'created',
            userId: 1,
            datePlaced: "December 5, 2020",
            products: [{
                id: 1,
                name: "PSA grade 10 Base set Charzard",
                description: "(dummy description)",
                price: 3999.95,
                imageURL: "",
                inStock: true,
                category: "Pokemon Cards",
            }]
        })
    }, [])

    return (
        <>
            <h1> Order#{order.id} </h1>
            <h3> Order Status: {order.status} </h3>
            <h3> Order Placed: {order.datePlaced} </h3>
            <div>
                
            </div>
        </>
    );
}

export default SingleOrder;
