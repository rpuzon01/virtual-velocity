import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getProductById } from "../api";
import "./index.css";

const SingleProduct = (props) => {
    const {cart, setCart, user} = props;
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    const handleInitialLoad = async () => {
        if(productId){
        const fetchProduct = await getProductById(productId);
        setProduct(fetchProduct);
        } else {
            setProduct(props.product);
        }
    };

    const handleAddToCart = async () => {
        // grab the product of the card
        // place it into the product array of the cart
        cart.products.forEach((cartItem, index) => {
            if(cartItem.name === product.name){
                const productToAdd = {
                    ...product, 
                    quantity: cartItem.quantity + 1
                }
                const newProducts = [...cart.products]
                newProducts.splice(index, 1, productToAdd);
                const newCart = {
                    ...cart,
                    products: newProducts
                }
                setCart(newCart);
                return;
            }
        })

        const newCart = {
            ...cart, 
            products: [...cart.products, product]
        };
        setCart(newCart);
    }

    useEffect(() => {
        handleInitialLoad();
    }, [])

    return ( <>
    <div className="bodyWrapper">

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.imageURL} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.price}</Card.Text>
          <Card.Text>{product.category}</Card.Text>
          <Card.Text>{product.inStock}</Card.Text>
        </Card.Body>
        {(Object.keys(user).length > 0) && <Button 
            className="btn btn-primary"
            onClick={handleAddToCart}>Add to cart</Button>}
      </Card>
      </div>
   </> );
}

export default SingleProduct;
