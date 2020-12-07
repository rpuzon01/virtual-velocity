import React, { useEffect, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import "./Product.css";
import "./index.css";
import {
  addProductToOrder,
  removeProductFromOrder,
  getCartByUser,
  createOrder,
} from "../api";
import {
  BrowserRouter as Router,
  useParams,
  Link,
  Route,
} from "react-router-dom";
import { getProducts, deleteProduct, updateProduct } from "../api";

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
  const { productId } = useParams();

  // const [usersProducts, setUsersProducts] = useState([]);
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState("");
  // const [inStock, setInStock] = useState("");
  // const [category, setCategory] = useState("");

  console.log("orders", orders);
  console.log("order id", orders.id);
  console.log("user", user);
  console.log("products all1", products);
  // console.log('products all id', products.id)

  const handleAddToOrder = async ({ id, price, quantity }) => {
    // console.log('add to order clicked')
    const currentOrder = await getCartByUser();
    console.log("existingOrder", currentOrder);
    const productId = id;
    //     For each product NOT in cart
    //  Create add-to-cart button
    //  Up to you if you want this to increment previously-existing product quantity.
    console.log("222", productId, price, quantity);

    // const product = products.map((product) => {
    //   // console.log('products all', product)
    //   return product
    // })
    // console.log('products all3', product)

    // const ordersProducts = orders.map(({products, id, userId, datePlaced, status}) => {
    //   return products

    // })

    // const orderProductId = ordersProducts.map(({id, name}) => {
    //   console.log('55555', ordersProducts)
    //   return id
    // })

    try {
      if (currentOrder) {
        console.log("add to order clicked");
        const { data } = await addProductToOrder({
          // orderId,
          productId,
          price,
          quantity,
        });
        console.log("data in prouduct comp add to order", data);

        // create order
        //add product to the order
      } else {
        console.log("!!!!!");
        // create order
        const newOrder = await createOrder();
        console.log("data in prouduct comp add to order", newOrder);
        //add product to the order
        const { data } = await addProductToOrder({
          // orderId,
          productId,
          price,
          quantity,
        });
        console.log("data in prouduct comp add to order", data);
      }
    } catch (error) {
      throw error;
    }
  };

  const handleRemoveFromOrder = async (productId) => {
    try {
      console.log("remove order clicked");

      const data = await removeProductFromOrder(productId);
      console.log("remove prod in product comp", data);
    } catch (error) {
      throw error;
    }
  };

  // const handleSubmit = async (event) => {
  //   try {
  //     event.preventDefault();
  //     const data = await createProduct({
  //       name, description, price, imageURL, inStock, category
  //       token
  //     });
  //     if (data) {
  //       setName("");
  //       setDescription("");
  //       setPrice("");
  //       setInStock("")
  //       category("")
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleProductsDelete = async (id) => {
    console.log("id", id);
    console.log("clicked");
    try {
      // event.preventDefault();
      console.log("token", token);
      const data = await deleteProduct(id, token);
      // if (data) {
      //   const deletedProduct = usersProducts.filter(
      //     (product) => data.id !== product.id
      //   );
      console.log("data", data);
      // console.log("deletedProduct", deletedProduct);
      // setProducts(deleteProduct);
      // }
    } catch (error) {
      throw error;
    }
  };

  // const handleUpdateProducts = async (event) => {
  //   const token = localStorage.getItem("token");
  //   try {
  //     event.preventDefault();
  //     const data = await updateProduct(
  //       { name, description, price, imageURL, inStock, category },
  //       event.target.id,
  //       token
  //     );
  //     if (data) {
  //       console.log("some data:", data);
  //       setNewName("");
  //       setNewDescription("");
  //       setNewPrice("");
  //       setNewImageUrl("")
  //       setNewIsInStock("");
  //       setNewCategory("");
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  return (
    <>
      <div id="publicRoutines">
        <b
          style={{
            fontSize: "3rem",
            marginLeft: "2rem",
          }}
        >
          Your Routines
        </b>
      </div>
      <div id="activities">
        <Form style={{ marginLeft: "35%", marginRight: "35%" }} onSubmit={{}}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              <b>Post a new Product</b>
            </Form.Label>
            <Form.Control
              // value={name}
              // type="text"
              placeholder="name*"
              // onChange={(event) => {
              //   const name = event.target.value;
              //   setName(name);
              // }}
            />
            <Form.Text style={{ color: "white" }}>
              {" "}
              We'll never share your information with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              // value={description}
              // type="text"
              placeholder="description*"
              // onChange={(event) => {
              //   const description = event.target.value;
              //   setDescription(description);
              // }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              // value={price}
              // type="text"
              placeholder="price*"
              // onChange={(event) => {
              //   const price = event.target.value;
              //   setPrice(price);
              // }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              // value={category}
              // type="text"
              placeholder="category*"
              // onChange={(event) => {
              //   const category = event.target.value;
              //   setCategory(category);
              // }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              // value={inStock}
              // type="checkbox"
              label="In stock"
              // onChange={{}}
            />
          </Form.Group>
          <Button
            style={{ marginBottom: "2em" }}
            variant="outline-success"
            type="submit"
          >
            Post
          </Button>
        </Form>
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

                    <Button
                      style={{}}
                      className="btn btn-danger"
                      onClick={(event) => {
                        console.log("id", id);
                        event.preventDefault();
                        handleProductsDelete(id);
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      style={{}}
                      className="btn btn-primary"
                      // onClick={{ handleUpdateProducts }}
                    >
                      Edit
                    </Button>
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
