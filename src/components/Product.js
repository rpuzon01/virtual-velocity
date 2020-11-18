import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./Product.css"

const Product = (props) => {
return (<>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/s960x960/1907723_281691581990969_1728319671_o.jpg?_nc_cat=105&ccb=2&_nc_sid=2d5d41&_nc_ohc=yFTj13EVtiMAX_nXxnT&_nc_ht=scontent-lax3-1.xx&tp=7&oh=1219788693ff0a945261de8767bdfac4&oe=5FD77D18" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</>)
}

export default Product
