import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navbarImg from '../Assets/navbar.png';
import { OAuth } from '../Components/OAuth';
import {toast} from 'react-toastify';
import { getAuth } from 'firebase/auth';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
export const ForgotPass = () => {
  const [email,setEmail] = useState()
  let  navigate = useNavigate();
  function onChange(e){ 
    setEmail(e.target.value)   
  }
  async function onSubmit(e){
      e.preventDefault();
      try{
        const auth = getAuth();
        await sendPasswordResetEmail(auth,email);
        toast("Please check your email for the reset link", {type: "success"});
        setTimeout(()=>navigate("/"),2000);
      }catch(error){
        toast.error('Error sending the email')
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
            <h2 className='text-slate-300'>Forgot password</h2>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <label htmlFor='email' className='text-white'>Email address</label>
          <input id='email' className='w-full px-4 py-2 mb-4' name='email' type='text' value={email} onChange={onChange} placeholder='example@gmail.com' />
          <button type='submit' className='my-2 bg-neutral-800 text-gray-400 w-full font-bold rounded-full py-2 hover:bg-neutral-900 hover:text-gray-50 transition duration-300 ease-out active:bg-neutral-950'>
            Continue
          </button>
        </form>
        <div className='flex justify-between text-slate-400 w-full'>
            <p>Don't have an  account ?
              <Link to='/signup' className='text-yellow-200 hover:text-yellow-500 ml-4'>Register</Link>  
            </p>
            <p>
              <Link to='/ForgotPass' className='text-yellow-200 hover:text-yellow-500'>Sign In</Link>  
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
