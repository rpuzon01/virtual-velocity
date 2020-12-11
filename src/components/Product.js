import React, { useEffect, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

import "./Product.css";
import "./index.css";

// import { isAdmin } from "../routes/utils";

import {
  addProductToOrder,
  removeProductFromOrder,
  getCartByUser,
  createOrder,
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../api";

import {
  BrowserRouter as Router,
  useParams,
  Link,
  Route,
} from "react-router-dom";


const Product = (props) => {
  const {
    token,
    product,
    products,
    orders,
    setOrders,
    setProducts,
    user,
  } = props;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [category, setCategory] = useState("");

  const handleAddToOrder = async ({ id, price, quantity }) => {
    const currentOrder = await getCartByUser();
    const productId = id;
    //     For each product NOT in cart
    //  Create add-to-cart button
    //  Up to you if you want this to increment previously-existing product quantity.

    // const product = products.map((product) => {
    //   // console.log('products all', product)
    //   return product
    // })

    // const ordersProducts = orders.map(({products, id, userId, datePlaced, status}) => {
    //   return products

    // })

    // const orderProductId = ordersProducts.map(({id, name}) => {
    //   return id
    // })

    try {
      if (currentOrder) {
        const { data } = await addProductToOrder({
          // orderId,
          productId,
          price,
          quantity,
        });

        // create order
        //add product to the order
      } else {
        // create order
        const newOrder = await createOrder();
        //add product to the order
        const { data } = await addProductToOrder({
          // orderId,
          productId,
          price,
          quantity,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveFromOrder = async (productId) => {
    try {

      const data = await removeProductFromOrder(productId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const data = await createProduct({
        name,
        description,
        price,
        inStock,
        imageURL,
        category,
        token
      });
      if (data) {
        setName("");
        setDescription("");
        setPrice("");
        setInStock(true);
        setImageURL("");
        setCategory("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleProductsDelete = async (id) => {

    try {
      const data = await deleteProduct(id, token);
      // if (data) {
      //   const deletedProduct = products.filter(
      //     (product) => data.id !== product.id
      //   );

      //   setProducts(deletedProduct);
      // }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateProducts = async (event) => {
    // const token = localStorage.getItem("token");
    try {
      // event.preventDefault();
      const data = await updateProduct(
        { name, description, price, imageURL, inStock, category }
        // id
        // token
      );
      if (data) {
        console.log("some data:", data);
        setName("");
        setDescription("");
        setPrice("");
        setInStock(true);
        setImageURL("");
        setCategory("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>

      <div>
        {user.isAdmin &&
        <Form.Group
          style={{ marginTop: "5rem", marginLeft: "35%", marginRight: "35%" }}
        >
           <h5>Welcome Admin: {user.username} </h5>
           <p>Ready to create a new product?</p>
          <h4 style={{ paddingLeft: "1rem" }}>Product Name</h4>
          <Form.Control
            value={name}
            type="text"
            placeholder=""
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <br />
          <h4 style={{ paddingLeft: "1rem" }}>Description</h4>
          <Form.Control
            value={description}
            type="text"
            placeholder=""
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />

          <h4 style={{ paddingLeft: "1rem" }}>Price</h4>
          <Form.Control
            value={price}
            type="number"
            placeholder=""
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />

          <h4 style={{ paddingLeft: "1rem" }}>Image URL</h4>
          <Form.Control
            value={imageURL}
            type="text"
            placeholder=""
            onChange={(event) => {
              setImageURL(event.target.value);
            }}
          />

          <h4 style={{ paddingLeft: "1rem" }}>Category</h4>
          <Form.Control
            value={category}
            type="text"
            placeholder=""
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          />

          <Form.Check
            type="checkbox"
            style={{ marginLeft: "1rem", marginTop: "1rem" }}
            onChange={(event) => {
              if (event.target.value === "on") {
                setInStock(true);
              } else {
                setInStock(event.target.value);
              }
            }}
            label="In Stock? "
          />
          <Button
            type="submit"
            onClick={handleSubmit}
            style={{ marginLeft: "1rem", marginTop: "1rem" }}
            variant="success"
          >
            Create Product
          </Button>
        </Form.Group>
}
      </div>
      <div className="bodyWrapper flexWrapper">
        {products &&
          products.map(
            ({
              category,
              description,
              id,
              imageURL,
              quantity,
              inStock,
              name,
              price,
            }) => (
              <>

                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={imageURL} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>{price}</Card.Text>
                    <Card.Text>{category}</Card.Text>
                    <Card.Text>{inStock}</Card.Text>
                    <Link className="btn btn-primary " to={`/products/${id}`}>
                      View Product2
                    </Link>

                    <Button
                      className="btn btn-primary"
                      onClick={(event) => {
                        event.preventDefault();
                        handleAddToOrder({ id, price, quantity });
                      }}
                    >
                      {" "}
                      +{" "}
                    </Button>



                    <Button
                      className="btn btn-danger"
                      onClick={(event) => {
                        event.preventDefault();
                        // if not in cart
                        // if order.product.id !== product.id
                        //display button
                        handleRemoveFromOrder(id);
                      }}
                    >
                      {" "}
                      -{" "}
                    </Button>

                    {user.isAdmin &&
                    <>
                    <Button
                      style={{}}
                      className="btn btn-danger"
                      onClick={(event) => {
                        event.preventDefault();
                        handleProductsDelete(id);
                      }}
                    >
                      Delete
                    </Button>


                    {/* <Button
                      style={{}}
                      className="btn btn-primary"
                      onClick={(event) => {
                        event.preventDefault();
                        handleUpdateProducts(id);
                      }}
                    >
                      Edit
                    </Button> */}

                    </>
                    }

                  </Card.Body>
                </Card>

              </>
            )
          )}
      </div>
    </>
  );
};

export default Product;
