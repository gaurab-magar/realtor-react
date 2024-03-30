import React from 'react';
import { Outlet , Navigate } from 'react-router';
import { useAuthStstus } from '../hooks/useAuthStstus';
import { Spinner } from './Spinner';
 
export const PrivateRoute = () => {
    const {loggedIn , checkingStatus} = useAuthStstus();
    if(checkingStatus){
        return <Spinner />
    }
  return loggedIn ? <Outlet /> : <Navigate to='/signin' />
}
