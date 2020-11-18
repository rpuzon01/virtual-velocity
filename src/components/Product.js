import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./Product.css"
import {getProducts} from '../api'
import {useParams} from "react-router-dom"



const Product = (props) => {
  // const [product, setProduct] = useState('')
  const {product, setProduct} = props
  console.log('prod1', product)

  const {productId} = useParams()

  // const handleProduct = async (event) => {
  //   try {
  //     event.preventDefault()
  //     const resp
  //   } catch (error) {
  //     throw error
  //   }
  // }

  // set the product
  useEffect(() => {
    getProducts(productId).then(setProduct)
  }, [])

  console.log('product in product.js', product)



return (<>
<>
{console.log('prod3', product.name, product.id)
}  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={product.imageURL} />
  <Card.Body>
  {/* <div key={product.id}> </div> */}
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>
      {product.description}
    </Card.Text>
    <Card.Text>
      {product.price}
    </Card.Text>
    <Card.Text>
      {product.category}
    </Card.Text>
    <Card.Text>
      {product.inStock}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</>


</>)
}

export default Product
