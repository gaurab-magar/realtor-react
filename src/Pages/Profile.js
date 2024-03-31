import { getAuth, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {toast} from 'react-toastify';
import {db} from '../Firebase';
import { doc } from 'firebase/firestore';
import { updateDoc } from 'firebase/firestore';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Profile = () => {


  const auth =  getAuth();
  const navigate = useNavigate();

  const [changeDetails , setChangeDetails] = useState(false);

  const [formData,setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  });
  const {name,email} = formData;
  function onChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value})
  }
  async function onSubmit (e){
    e.preventDefault();

    if(changeDetails){
      setChangeDetails(false);
      await updateProfile(auth.currentUser,{
        displayName:name,
      })
      const docRef = doc(db,'users',auth.currentUser.uid)
      await updateDoc(docRef,{
        name:name
      });
      toast.success("Your profile has been updated successfully!");

    }else{
      setChangeDetails(true)
    }
  }
  function onLogOut (){
    auth.signOut();
    navigate('/');
  }

  return (
    <>
      <section className='max-w-6xl mx-auto flex items-center justify-center flex-col '>
        <h1 className='text-2xl text-center mt-6 font-bold text-white'>My Profile</h1>
        <div className='w-full md:w-[50%] mt-6 px-3 border'>
          <form onSubmit={onSubmit}>
            <label htmlFor="name" className='text-white'>Change Name:</label>
            <input onChange={onChange} value={name} id='name' type='text' name='name' placeholder='Change Name' className='py-2 mb-4 w-full' disabled={!changeDetails} />

            <label htmlFor='email' className='text-white'>New Email:</label>
            <input onChange={onChange} value={email} id='email' className='w-full py-2 mb-4' name='email' type='email' placeholder='Change Email' disabled />

            <div className='text-white mb-4 flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p>Do you want to change your name?
                <button type='submit' className={` ${changeDetails ? 'mx-2 text-green-500 hover:text-green-700 cursor-pointer' : 'mx-2 text-red-500 hover:text-red-700 cursor-pointer' }`}>
                  {changeDetails  ? "Apply": "Edit"}
                </button>
              </p>
              <p onClick={onLogOut} className='mx-2 text-yellow-200 hover:text-yellow-500 cursor-pointer'>sign out</p>
            </div>
          </form>
          <Link to='/create-listing'>
            <button  type='submit' className=' my-2 text-white rounded-md font-bold py-2 w-full flex items-center justify-center bg-slate-500'>
              <FaHome className='mr-2 text-2xl' />
              Sell Or Rent Your Home
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}
