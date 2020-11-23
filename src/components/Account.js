import React, { useEffect, useState } from "react";
import {Card, ListGroupItem, ListGroup, Button, Nav} from "react-bootstrap";

import { useParams } from "react-router-dom";

const Account = (props) => {
  const { user, setUser, setToken } = props;
  const { userId } = useParams();

  return (
    <>

<Nav fill variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
        <Nav.Link eventKey="link-1">Dashboard</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-2">Account Details</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-3">Address</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-4">
        Orders
        </Nav.Link>
    </Nav.Item>
</Nav>

<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    <Card.Body>
        <Card.Title>Hello {user.username} welcome to your account!</Card.Title>
        <Card.Text>
        From your account dashboard you can view your recent orders, manage your shopping and billing address and edit your account details.
        </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroupItem>{user.firstName}</ListGroupItem>
    <ListGroupItem>{user.lastName}</ListGroupItem>
        <ListGroupItem>{user.email}</ListGroupItem>
  </ListGroup>
  {/* <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body> */}
</Card>
    </>
  );
};

export default Account;
