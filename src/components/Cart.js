import React from "react";
import { SingleOrder } from "./";
import "./index.css";

const Cart = (props) => {
  const { user, setUser, cart } = props;

  const handleCheckout = () => {
    try {
      console.log("link to stripe or authorization HERE");
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <div style={{ marginLeft: "2rem" }} className="bodyWrapper">
        <h1> Shopping Cart </h1>
        <p>
          {" "}
          Ready to checkout? With our stripe integration you can checkout
          feeling secure.
        </p>

        <SingleOrder order={cart} />

        <div className="mb-3">
          <div className="pt-4">
            <button
              style={{ width: "10rem" }}
              type="button"
              className="btn btn-primary btn-block"
              onClick={(event) => {
                event.preventDefault();
                handleCheckout();
              }}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
