import ListGroup from  "react-bootstrap/ListGroup";
import ListGroupItem from  "react-bootstrap/ListGroupItem";
import Card from "react-bootstrap/Card";

const Account = ({user, orders} : any) => {
  return (

    <div className="bodyWrapper">
      <div className="dash-board">
        <Card style={{ width: "18rem" }}>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{user.lastName}</ListGroupItem>
            <ListGroupItem>{user.firstName}</ListGroupItem>
            <ListGroupItem>{user.email}</ListGroupItem>
          </ListGroup>
        </Card>
        {
          orders.map((order: any) => {
            return (
              <Card
                id="orderStyle"
                style={{ width: "18rem", marginTop: "2rem" }}
              >
                <Card.Header>Order</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>{order.id}</ListGroup.Item>
                  <ListGroup.Item>{order.status}</ListGroup.Item>
                  <ListGroup.Item>{order.datePlaced}</ListGroup.Item>
                </ListGroup>
              </Card>
            );
          })}
      </div>
    </div>
  )
}

export default Account;
