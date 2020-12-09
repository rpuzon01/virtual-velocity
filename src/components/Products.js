import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Products.css";
import "./index.css";
import {addProductToOrder, removeProductFromOrder, getCartByUser, createOrder} from "../api"
import { BrowserRouter as Router,
    useParams,
    Link,
    Route,

} from "react-router-dom";
import {getProducts} from '../api'
import { SingleProduct } from './'

const Products = (props) => {
    const { 
        products, 
        orders, 
        setOrders, 
        setProducts, 
        cart, 
        setCart,
        user
    } = props;
    const { productId } = useParams();

    return (
        <div className="bodyWrapper flexWrapper">
        {products && products.map((product)=> {
            return (
                <React.Fragment key={product.id}>
                    <SingleProduct product={product} cart={cart} setCart={setCart} user={user}/>
                </ React.Fragment>
            );
        })}
        </div>
    );
};



export default Products;
