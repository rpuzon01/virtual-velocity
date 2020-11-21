import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Form, FormControl, Alert } from "react-bootstrap";

import {setLocalToken, setLocalUser} from '../util'
import {fetchUser} from '../api'
import Logout from './Logout';

const BASE_URL = '/api'

export default props => {
    const {setUser, setAuthenticated, authenticated} = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleAuth = async (url) => {
      try {
               await console.log(axios.post(`${BASE_URL}${url}`, {username, password}))
        const {data} = await axios.post(`${BASE_URL}${url}`, {username, password});
  
          setUsername('')
          setPassword('')
          if (data.token) {
            setAuthenticated(true);
            setLocalToken(data.token)
          } else if (data.error) {
            setError(data.error)
          }
          
          const user = await fetchUser({url: '/users/me'});
          if(user && user.username) {
            setUsername(user.username);
            setLocalUser(user)
          } 
      } catch (error) {
        console.error(error);
      }
    }
  
    const handleLogin = event => {
      handleAuth('/users/login')
    }
  
    const handleRegister = event => {
      handleAuth('/users/register')
    }
  
    return <> 
      {error && <Alert>{error}</Alert>}  
      {authenticated 
        ? <Logout setUser={setUser} setAuthenticated={setAuthenticated} />
        : <Form inline >
            <FormControl type="text" value={username} onChange={(e) => {setUsername(e.target.value)}} />
            <FormControl type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
            <Button onClick={handleLogin}type="button" >Login</Button> 
            <Button onClick={handleRegister} type="button" >Register</Button> 
          </Form>}
    </>
}