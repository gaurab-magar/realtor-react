import React from 'react';
import { FcGoogle } from "react-icons/fc";

export const OAuth = () => {
  return (
    <button className='bg-red-700 border-none text-white border rounded-full flex items-center w-full justify-center py-2 active:bg-red-800'>
        <FcGoogle className='mr-2 text-2xl rounded-full  bg-white' />
        Sign with google
    </button>
  )
}
