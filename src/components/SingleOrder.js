import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleOrder = () => {
    const [order, setOrder] = useState({});


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
