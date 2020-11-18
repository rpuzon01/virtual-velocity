import React, { useState, useEffect } from 'react';

import {
  getSomething
} from '../api';

import {
  Product,
} from './';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

const App = () => {
  const [message, setMessage] = useState('');
  const [product, setProduct] = useState('');

  // useEffect(() => {
  //   getSomething()
  //     .then(response => {
  //       setMessage(response.message);
  //     })
  //     .catch(error => {
  //       setMessage(error.message);
  //     });
  // });

  return ( <>
    <div className="App">
      <h1>Hello, World!!!!!!!!</h1>
      <h2>{ message }</h2>
      < Route path="/products/:productId" >
       < Product product={product} setProduct={setProduct} />
      </Route>


    </div>
    </>
  );
}

export default App;
