import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getProductById, addProductToOrder } from "../api";
import "./index.css";


const SingleProduct = (props) => {
    const {
        user, 
        token, 
        products, 
        setProducts, 
        cart, 
        setCart, 
        handleProductsDelete
    } = props;
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
        cart.products.forEach(async (cartItem, index) => {
            if(cartItem.name === product.name){
                const productToAdd = {
                    ...product, 
                    quantity: cartItem.quantity + 1
                }
                console.log(productToAdd);
                await addProductToOrder({
                    orderId: cart.id, 
                    productId: product.id,
                    price: product.price,
                    quantity: cartItem.quantity + 1
                }, token);
                const newProducts = [...cart.products]
                newProducts.splice(index, 1, productToAdd);
                console.log(newProducts);
                const newCart = {
                    ...cart,
                    products: newProducts
                }
                console.log(newCart);
                setCart(newCart);
                return;
            }
        })
        const newCart = {
            ...cart, 
            products: [...cart.products, product]
        };
        setCart(newCart);
        await addProductToOrder({
            orderId: cart.id, 
            productId: product.id,
            price: product.price,
            quantity: 1
        }, token);
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
        {user.isAdmin &&
        <Button
            style={{}}
            className="btn btn-danger"
            onClick={(event) => {
                handleProductsDelete(product.id);
            }}>
        Delete
        </Button>}
      </Card>
      </div>
   </> );
}

export default SingleProduct;
