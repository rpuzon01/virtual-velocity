import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrdersByUserId } from '../api';
import './SingleOrder.css'

const SingleOrder = (props) => {
    const { orderId, } = useParams();
    const { user, orders, setOrders, token } = props;
    // const [orders, setOrders] = useState({})
    // const [order, setOrder] = useState('')
     const [order, setOrder] = useState({})
    // const [order, setOrder] = useState({
    //         id: 33,
    //         status: 'created',
    //         userId: 21,
    //         datePlaced: "January 1, 2000",
    //         products: [{
    //             id: 22,
    //             name: "PSA grade 10 Base set Blastoise",
    //             description: "(dummy description)",
    //             price: 349995,
    //             inStock: true,
    //             category: "Pokemon Cards",
    //             quantity: 1
    //         }]
    // });

    console.log('user', user)
    console.log('userId!', user.id)
    console.log('token', token)
    // console.log('products', products)

    console.log("order in single order2", order)
    console.log("order id", orderId)

    // const handleGetOrders = async() => {
    //     try {
    //         const orderstest = await getOrdersByUserId(user.id, token)
    //         console.log("orderstest", orderstest)

    //     } catch (error) {
    //         throw error
    //     }
    // }
    // handleGetOrders()
// const orderProducts = orders.map(function({products}) {
//     console.log('ordermap#', products)
//     return products
// })

    // console.log("ORDERst", orders)
    // console.log("ORDER.products", orders.products)

    // useEffect(() => {
    //     getOrdersByUserId(user.id, token).then(setOrders)
    //     console.log("order in single order", orders)
    // }, [])

    console.log("ORDERst", orders)
    // console.log("ORDERs.products", orders[1].products)
    {console.log('12345', orders.userId)}


    return ( <>
        <div className="single-order">
            <header className="order-info">
                <div> Order #{orders.id} </div>
                <div> Order Status: {orders.status} </div>
                <div> Order Placed: {orders.datePlaced} </div>
            </header>
            <div className="products">
            <h1>TEST: </h1>
                { orders && orders.map(({products, id}) =>
                 <div key={id} className="orders">
                    <h1> prod tes: {products.name}</h1>
                    {console.log('12345', orders.userId)}
                    {console.log('products in orders map', products)}

                        { products && products.map(({id, name, description, category, price, quantity}) => <>
                        {console.log('map data 23', id, name, description, category, price, quantity)}

                        <h1>TEST: {name}</h1>
                            <div key={id} className="product">
                                <div>Name: {name}</div>
                                <div>Category: {category}</div>
                                <div>Description: {description}</div>
                                <div>Quantity: {quantity}</div>
                                <div>Price: {price/100.0}</div>
                            </div>
                            </>

                    )
                }


                </div>
                )

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
        </>
    );
}

export default SingleOrder;
