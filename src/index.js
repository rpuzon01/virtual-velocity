import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import {
  App,
//   Product,
} from './components';


ReactDOM.render(
  <Router>
    <App />
    {/* < Route path="/products/:productId" >
    < Product product={product} setProduct={setProduct} />
    </Route> */}
  </Router>,
  document.getElementById('root')
);
