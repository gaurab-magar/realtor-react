import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import {toast} from 'react-toastify';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import { useNavigate } from 'react-router';

export const OAuth = () => {
  let navigate = useNavigate();

  async function onGoogleClick(){
    try{
      const auth = getAuth()
      const provider = new
      GoogleAuthProvider()
      const result = await signInWithPopup(auth,provider)
      const user = result.user
      console.log(user);
      const docRef = doc(db,'users',user.uid);
      const docSnap = await getDoc(docRef);

      if(!docSnap.exists()) {
        await setDoc(docRef,{
          name:user.displayName || 'Anonymous',
          email:user.email,
          timestamp:serverTimestamp()
        })
      }
      navigate('/');
      toast("Signed in with google",{type:"success"});
    }catch(error){
      toast.error('Could not authorized with google')
    }
  }
  return (
    <button onClick={onGoogleClick} type='button' className='bg-red-700 border-none text-white border rounded-full flex items-center w-full justify-center py-2 active:bg-red-800'>
        <FcGoogle className='mr-2 text-2xl rounded-full  bg-white' />
        Sign with google
    </button>
  )
}
