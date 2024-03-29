import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export const Profile = () => {
  const auth =  getAuth();
  const navigate = useNavigate();

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
  function onLogOut (){
    auth.signOut();
    navigate('/');
  }

  return (
    <>
      <section className='max-w-6xl mx-auto flex items-center justify-center flex-col '>
        <h1 className='text-2xl text-center mt-6 font-bold text-white'>My Profile</h1>
        <div className='w-full md:w-[50%] mt-6 px-3 border'>
          <form>
            <label htmlFor="name" className='text-white'>Change Name:</label>
            <input onChange={onChange} value={name} id='name' type='text' name='name' placeholder='Change Name' className='py-2 mb-4 w-full' />
            <label htmlFor='email' className='text-white'>New Email:</label>
            <input onChange={onChange} value={email} id='email' className='w-full py-2 mb-4' name='email' type='email' placeholder='Change Email' />
            <div className='text-white mb-4 flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p>Do you want to change your name?<span className='mx-2 text-yellow-200 hover:text-yellow-500 cursor-pointer'>Edit</span></p>
              <p onClick={onLogOut} className='mx-2 text-yellow-200 hover:text-yellow-500 cursor-pointer'>sign out</p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
