import { useState } from 'react';
import ListGroup from  'react-bootstrap/ListGroup';
import ListGroupItem from  'react-bootstrap/ListGroupItem';
import Card from 'react-bootstrap/Card';

const Account = ({user} : any) => {

  if (!user) {
    return (
      <div>
        Please log in to view this page
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center p-16">
      <Card className="w-[800px] ">
        <ListGroup >
          <ListGroupItem className="font-bold text-xl">Account Information</ListGroupItem>
          <ListGroupItem>
            <span className="font-bold">First Name: </span>
            {user.firstName}
          </ListGroupItem>
          <ListGroupItem>
            <span className="font-bold">Last Name: </span>
            {user.lastName}
          </ListGroupItem>
          <ListGroupItem>
            <span className="font-bold">Email: </span>
            {user.email}
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  )
}

export default Account;
