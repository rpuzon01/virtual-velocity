import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { Account, SingleOrder, Cart } from "./"
import { getOrdersByUserId, client } from '../api';


const Checkout = (props) => {
    const { user, setUser, token, setToken, } = props;
    const [orders, setOrders] = useState();
    let history = useHistory();


    useEffect(() => {
        if (token && user && !orders) {
            getOrdersByUserId(user.id, token).then(data => {
                setOrders(data)
            });
        }
    }, [orders, user, token])

    function handleCancel() {
        client.patch('/orders/', { status: 'cancelled' })
            .then(() => {
                history.push('/')
            })
            .catch(error => {
                console.log('Error');
            })
    }

    function handleSubmit() {
        client.patch('/orders/', { status: 'completed' })
            .then(() => {
                history.push('/')
            })
            .catch(error => {
                console.log('Error');
            })
    }

    return (
        <>
            <div className="Checkout">
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Your Order</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {/* {orders && orders.map((order, i) => { */}
                        {orders && <SingleOrder user={user} orders={orders} />}
                        {/* })} */}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={handleSubmit} variant="success">Complete Order</Button>
                        <Button onClick={handleCancel} variant="warning">Cancel Order</Button>
                    </Modal.Footer>
                </Modal.Dialog>


            </div>
        </>
    )
}

export default Checkout;

/*get the id for the product when the button is clicked.*/
