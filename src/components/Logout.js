import React from 'react';
import {Button} from 'react-bootstrap';
import {removeToken, removeUser} from '../util';

export default function Logout(props) {
  const {setAuthenticated, setUser} = props;
  
  return (
    <Button onClick={() => {
      setAuthenticated(false)
      setUser(null)
      removeToken();
      removeUser();
    }}>Log Out
    </Button>
  )
}
