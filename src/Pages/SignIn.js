import React, { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import navbarImg from '../Assets/navbar.png';
import { OAuth } from '../Components/OAuth';
import { signInWithEmailAndPassword , getAuth } from 'firebase/auth';
import {toast} from 'react-toastify';

export const SignIn = () => {
  const [show,setShow] = useState(false)
  const [formData , setFormData] = useState({
    email:'',
    password:''
  });
  let navigate = useNavigate();
  const {email , password} = formData;
  function onChange(e){
    setFormData((prevState)=>({
      ...prevState ,
      [e.target.id]: e.target.value,
    }))
  }
  async function onSubmit(e){
    e.preventDefault();
    try{
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(auth,email,password)
      if(userCredential.user){
        navigate('/')
      }
      toast.success('signin successfully')

    }catch(error){
      toast.error(`Bad user crenditials${error}`)
    }
  }

  return (
    <div className="flex justify-center flex-wrap items-center p-6 max-w-6xl mx-auto">
      <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
        <img className='w-full rounded-2xl' src='https://www.luxurypresence.com/wp-content/uploads/2023/08/header-1-min-4.jpg' alt='signInImg'></img>
      </div>
      <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
        <div className='text-white text-center'>
          <div class="flex flex-col items-center gap-2">
            <img className='cursor-pointer' src={navbarImg} alt='navbarImg' style={{width:'9rem'}}></img>
            <h1 className='text-2xl'>Welcome back to Luxury Presence</h1>
            <h2 className='text-slate-300'>To get started, please sign in.</h2>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <label htmlFor='email' className='text-white'>Email address</label>
          <input id='email' className='w-full px-4 py-2 mb-4' name='email' type='text' value={email} onChange={onChange} placeholder='example@gmail.com' />
          <div className='relative'>
            <label htmlFor='password' className='text-white'>password</label>
            <input id='password' className='w-full px-4 py-2 mb-4' name='password' type='password' value={password} onChange={onChange} placeholder='**********' />
            {show ? (
              <FaRegEye onClick={()=> setShow(!show)} className='absolute right-5 top-8 text-xl cursor-pointer' />
            ): (
              <FaEyeSlash onClick={()=>setShow(!show)}  className='absolute right-5 top-8 text-xl cursor-pointer' />
            )}
          </div>
          <button type='submit' className='my-2 bg-neutral-800 text-gray-400 w-full font-bold rounded-full py-2 hover:bg-neutral-900 hover:text-gray-50 transition duration-300 ease-out active:bg-neutral-950'>
            Continue
          </button>
        </form>
        <div className='flex justify-between text-slate-400 whitespace-nowrap w-full'>
            <p>Don't have a account
              <Link to='/signup' className='text-yellow-200 hover:text-yellow-500 ml-4'>Register</Link>  
            </p>
            <p>
              <Link to='/forgotpass' className='text-yellow-200 hover:text-yellow-500'>Forgot password ?</Link>  
            </p>
        </div>
        <div class="flex justify-between items-center my-2">
          <hr class="flex-grow border-t border-gray-300 mr-4" />
          <span class="text-gray-500 font-bold text-xl">or</span>
          <hr class="flex-grow border-t border-gray-300 ml-4" />
        </div>
        <OAuth />
      </div>
    </div>
  )
}
