import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Product.css";
import {addProductToOrder, removeProductFromOrder} from "../api"
import { BrowserRouter as Router,
  useParams,
  Link,
  Route,

} from "react-router-dom";
import {getProducts} from '../api'

const Product = (props) => {
  const { product, products, orders, setOrders, setProducts, user } = props;
  const { productId } = useParams();
  console.log('orders', orders)
  console.log('order id', orders.id)
  console.log('user', user)
  console.log('products all1', products)
  // console.log('products all id', products.id)





  const handleAddToOrder = () => {
    // console.log('add to order clicked')
//     For each product NOT in cart
//  Create add-to-cart button
//  Up to you if you want this to increment previously-existing product quantity.
console.log('222', products)

const product = products.map((product) => {
  // console.log('products all', product)
  return product
})
console.log('products all3', product)

const ordersProducts = orders.map(({products, id, userId, datePlaced, status}) => {
  return products

})

const orderProductId = ordersProducts.map(({id, name}) => {
  console.log('55555', ordersProducts)
  return id
})

    try {
      if(!orders && orderProductId) {
        console.log('add to order clicked')
        const {data} = await addProductToOrder({
          orderId,
          productId,
          price,
          quantity})

        // create order
        //add product to the order
      } else if (orders && orderProductId) {
        console.log('!!!!!')
                // create order
        //add product to the order

      }


    } catch (error) {
      throw error;
    }
  }

  const handleRemoveFromOrder = () => {
    // console.log('remove order clicked')
    try {
      if(orders && orders.products.id === product.id) {
        console.log('remove order clicked')

        const data = await
      }

    } catch (error) {
      throw error
    }
  }


  return (
    <>
      { products && products.map(({category, description, id, imageURL, inStock, name, price}) => <>

            <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Card.Text>{category}</Card.Text>
          <Card.Text>{inStock}</Card.Text>
          <Link className="btn btn-primary" to={`/products/${id}`}>View Product2</Link>

          <Button className="btn btn-primary" onClick={ (event) => {
            event.preventDefault()
            handleAddToOrder()
          }

          }
          > + </Button>
          <Button className="btn btn-danger" onClick={
            (event) => {
              event.preventDefault()
                    // if not in cart
      // if order.product.id !== product.id
      //display button
              handleRemoveFromOrder()
            }
          }
          > - </Button>

        </Card.Body>
      </Card>

      </>
      )}

    </>
  );
};


const testFunc = () => {


}

export default Product;
