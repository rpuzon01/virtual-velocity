import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Form, FormControl, Alert } from "react-bootstrap";

import {fetchUser, setLocalToken, setLocalUser} from '../util'
import Logout from './Logout';

const BASE_URL = 'https://localhost:3000'

export default props => {
    const {setUser, setAuthenticated, authenticated} = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
  
    const handleAuth = async (url) => {
      try {
               
        const {data} = await axios.post(`${BASE_URL}${url}`, {username, password});
  
          setUsername('')
          setPassword('')
          if (data.token) {
            setAuthenticated(true);
            setLocalToken(data.token)
          } else if (data.error) {
            setError(<Alert variant="danger">
              {data.error}
            </Alert>) 
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
      {error}  
      {authenticated 
        ? <Logout setUser={setUser} setAuthenticated={setAuthenticated} />
        : <Form inline >
            <FormControl ml="2" mr="2" type="text" value={username} onChange={(e) => {setUsername(e.target.value)}} />
            <FormControl type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
            <Button onClick={handleLogin}type="button" >Login</Button> 
            <Button onClick={handleRegister} type="button" >Register</Button> 
          </Form>}
    </>
}