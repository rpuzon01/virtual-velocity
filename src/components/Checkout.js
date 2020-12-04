import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Account, SingleOrder, Cart } from "./"

const Checkout = () => {

    return (
        <>
            <div className="Checkout">
                <Account />


                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Your Final Order</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <SingleOrder />
                        <Cart />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary">Complete Order</Button>
                        <Button variant="primary">Cancel Order</Button>
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
