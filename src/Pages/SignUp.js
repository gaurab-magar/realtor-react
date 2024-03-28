import React, { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import navbarImg from '../Assets/navbar.png';
import { OAuth } from '../Components/OAuth';
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {db} from '../Firebase';
import { serverTimestamp, setDoc ,doc} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';

export const SignUp = () => {
  const [show,setShow] = useState(false)
  const [formData , setFormData] = useState({
    username:'',
    email:'',
    password:''
  });
  const {email , password , username} = formData;
  const navigate = useNavigate();
  function onChange(e){
    setFormData((prevState)=>({
      ...prevState ,
      [e.target.id]: e.target.value,
    }))
  }
  async function onSubmit(e){
    e.preventDefault();
    try{
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser,{
        displayName: username
      })
      const user = userCredential.user
      const formDataCopy = {...formData}
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, 'users', user.uid), formDataCopy);
      navigate('/');
      toast.success('Signed Up Successfully!',{
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    
    }catch(error){
      toast.error("Error Occured!", {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        });
    }
  }
  return (
    <div className="flex justify-center flex-wrap items-center p-6 max-w-6xl mx-auto">
      <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
        <img className='w-full rounded-2xl' src='https://cdn-gdalb.nitrocdn.com/LKErezJcAyurKLBNOppXfGJVQQbZsRzg/assets/images/optimized/rev-d924db9/www.luxurypresence.com/wp-content/uploads/2023/08/header-1-min-4-1200x720.jpg' alt='signInImg'></img>
      </div>
      <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
        <div className='text-white text-center'>
          <div class="flex flex-col items-center gap-2">
            <img className='cursor-pointer' src={navbarImg} alt='navbarImg' style={{width:'9rem'}}></img>
            <h1 className='text-2xl'>Welcome back to Luxury Presence</h1>
            <h2 className='text-slate-300'>To get started, please sign Up.</h2>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <label htmlFor='username' className='text-white'>Username</label>
          <input id='username' className='w-full px-4 py-2 mb-4' name='usrename' type='text' value={username} onChange={onChange} placeholder='Username' />
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
        <div className='flex justify-between text-slate-400 w-full'>
            <p>Already have an  account ?
              <Link to='/signin' className='text-yellow-200 hover:text-yellow-500 ml-4'>Sign In</Link>  
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
