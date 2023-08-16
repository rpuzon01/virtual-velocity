import React from 'react';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../redux/hooks';
import { logOut } from '../redux/slices/authSlice';

const Logout = () => {
  const dispatch = useAppDispatch(); 

  const handleClick = () => {
    dispatch(logOut);
    localStorage.removeItem('token');
    //setCart(null);
  }

  return (
    <Button onClick={handleClick}>
      Log Out
    </Button>
  );
}

export default Logout;
