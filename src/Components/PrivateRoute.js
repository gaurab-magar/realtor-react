import React from 'react';
import { Outlet , Navigate } from 'react-router';
import { useAuthStstus } from '../hooks/useAuthStstus';

export const PrivateRoute = () => {
    const {loggedIn , checkingStatus} = useAuthStstus();
    if(checkingStatus){
        return <h3>loading.....</h3>
    }
  return loggedIn ? <Outlet /> : <Navigate to='/signin' />
}
