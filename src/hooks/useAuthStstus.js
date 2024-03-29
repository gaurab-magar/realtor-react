import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

export const useAuthStstus = () => {
    const [loggedIn , setLoggedIn] = useState(false);
    const [checkingStatus , setCheckingStatus] = useState(true);
    useEffect(()=>{
        const auth = getAuth()
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setLoggedIn(true)
            }
            setCheckingStatus(false)
        })
    },[])
  return { loggedIn , checkingStatus };
}
