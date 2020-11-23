import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {InputGroup, Form, FormControl, Button, Alert} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import {register} from "../api"

import {getLocalToken, setLocalToken} from '../util'


export default props => {
  const {user, setUser, setLocalToken, token} = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ email, setEmail ] = useState('')
  const [error, setError] = useState();
  // const [message, setMessage] = useState('')
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // useEffect(() => {
  //   if (!token) {
  //     setLocalToken(getLocalToken())
  //   }
  // },[getLocalToken])

  const handleRegister = async (event) => {
    try {
      event.preventDefault();

      const {data} = await register({username, password, id, firstName, lastName, email, imageURL, isAdmin,});
      // setMessage(data.message)

      const username = "steve"
      const password = "stevespass"
      // id,
      const firstName = 'steve2'
      const lastName = 'steves last'
      const email = 'steves email'
      const imageURL = null
      const isAdmin = 'true'
      console.log('data in register: ', data);

  console.log('data', data);
      if (data) {
        setUsername('')
        setPassword('')

        // setLocalToken(data.token);
        // setLocalToken(data.token)
        // console.log('user', user);
        // if(user && user.username) {
        //   setUsername(user.username);
        //   setUser(user)
        // } else if (data.message) {
        //   setError(<Alert variant="danger" >
        //     {data.error}
        //   </Alert>)
        // }
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Register Modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register / Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* --------  */}

              <Form onSubmit={handleRegister}>
        {/* <Form.Row> */}

          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
          </Form.Group>

          <Form.Group controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
          </Form.Group>
        {/* </Form.Row> */}

        <Form.Group controlId="formGridUsername">
            <Form.Label>username</Form.Label>
            <Form.Control type="text" value={username} onChange={(e) => {setUsername(e.target.value)}} />
          </Form.Group>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Row>
          <Form.Group  controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group  controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>California</option>
              <option>California</option>
              <option>Sorry yo, we only do Cali</option>
            </Form.Control>
          </Form.Group>

          <Form.Group  controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="By submitting you agree to our terms of service and privacy policy" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
      </Form>

        {/* -------- */}

          {/* <Form inline onSubmit={handleRegister}>
            <FormControl type="text" value={username} onChange={(e) => {setUsername(e.target.value)}} />
            <FormControl type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
            <Button type="submit">Register</Button>
          </Form> */}

        </Modal.Body>
        <Modal.Footer>
          <p>You are about to create an account</p>
        </Modal.Footer>
      </Modal>
    </>
  );


}
