import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InputGroup, Form, FormControl, Button, Alert } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { register } from "../API";
import swal from "sweetalert";

const Register = ({ setToken, setUser }: any) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRegister = async (event: any) => {
    try {
      event.preventDefault();

      const { user, token } = await register({
        username,
        password,
        firstName,
        lastName,
        email,
      });
      setToken(token);
      localStorage.setItem("token", token);
      setUser(user);
      handleClose();
      navigate("/");
      swal(`Hello there ${username}!`, "Welcome to the world of trading.");
    } catch (error: any) {
      setError(error.response.data.message);
      console.error(error);
    }
  };

  return (
    <>
      <div className="bodyWrapper">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register / Create Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleRegister}>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formGridUsername">
                <Form.Label>username</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formFirstname">
                <Form.Label>firstName</Form.Label>
                <Form.Control
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formLastname">
                <Form.Label>lastName</Form.Label>
                <Form.Control
                  type="text"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Form.Group>
                <Form.Group controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>California</option>
                    <option>California</option>
                    <option>Sorry yo, we only do Cali</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Group>

              <Form.Group id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="By submitting you agree to our terms of service and privacy policy"
                />
              </Form.Group>

              <Button 
                className="text-white p-2 mr-3 rounded-sm bg-blue-600"
                 variant="primary" type="submit">
                Submit
              </Button>
              <Button 
                className="text-white p-2 rounded-sm bg-gray-600"
                variant="secondary" onClick={() => {
                  handleClose();
                  navigate("/")
                }}>
                Close
              </Button>
              {error && <Alert>{error}</Alert>}
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Register;
