import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { Account, SingleOrder, Cart } from "./"
import { getOrdersByUserId } from '../api';

const Checkout = (props) => {
    // const { user, setUser, token, setToken, } = props;
    // const [orders, setOrders] = useState();
    let history = useHistory();

    const redirect = () => {
        history.push('/')
    }

    // useEffect(() => {
    //     if (token && user && !orders) {
    //         getOrdersByUserId(user.id, token).then(data => {
    //             setOrders(data)
    //         });
    //     }
    // }, [orders, user, token])

    return (
        <>
            <div className="Checkout">
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Your Order</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <SingleOrder />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="success">Complete Order</Button>
                        <Button onClick={redirect} variant="warning">Cancel Order</Button>
                    </Modal.Footer>
                </Modal.Dialog>


            </div>
        </>
    )
}

export default Checkout;

/*Code to reference for add to cart and remove from cart*/

// const initialProductState = {
//     items: [],
//     totalPrice: 0,
//   };

//   const addItems = (items = [], payload) => {
//     const newItems = items.map(item => item);
//     if (!some(items, e => e._id === payload._id)) {
//       newItems.push(payload);
//     }
//     return newItems;
//   };
//   const removeItem = (items = [], id) => {
//     const newItems = items.map(item => item);
//     newItems.every((e, index) => {
//       if (e._id === id) {
//         newItems.splice(index, 1);
//         return false;
//       }
//       return true;
//     });
//     return newItems;
//   };

//   function checkout(state = initialProductState, action) {
//     switch (action.type) {
//       case AppConstants.CHECKOUT.ADD_PRODUCT:
//         return {
//           ...state,
//           items: addItems(state.items, action.payload),
//         };
//       case AppConstants.CHECKOUT.REMOVE_PRODUCT:
//         return {
//           ...state,
//           items: removeItem(state.items, action.payload),
//         };

//       default:
//         return state;
//     }
//   }

//   export default checkout;
