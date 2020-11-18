import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import {
  App,
  Product,
} from './components';

ReactDOM.render(
  <Router>
    <App />
    < Product />
  </Router>,
  document.getElementById('root')
);
