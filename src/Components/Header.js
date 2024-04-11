import React, { useEffect, useState } from 'react';
import navbarImg from '../Assets/navbar.png';
import {Link, useLocation} from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const Header = () => {
  const [pageState , setPageState] = useState()
  const location = useLocation();
  const auth = getAuth();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if(user){
        setPageState(user.displayName);
      }else{
        setPageState("Sign In");
      }
      })
  },[auth])

  function pathMatchRoute(route) {
    if(route === location.pathname){
      return true
    }
  }
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <Link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
          <img className='h-16 cursor-pointer' src={navbarImg} alt='navbar-img'></img>
        </Link>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to='/'>
            <a className={`mr-5 cursor-pointer py-5 px-2 hover:text-yellow-500 text-gray-400 ${pathMatchRoute('/') && "text-light border-b-yellow-400 border-b-[3px]"}`}>Home</a>
          </Link>
          <Link to='/offers'>
            <a className={`mr-5 cursor-pointer py-5 px-2 hover:text-yellow-500 text-gray-400 ${pathMatchRoute('/offers') && "text-light border-b-yellow-400 border-b-[3px]"}`}>Offers</a>
          </Link>
          <Link to='/Contact'>
            <a className={`mr-5 cursor-pointer py-5 px-2 hover:text-yellow-500 text-gray-400 ${pathMatchRoute('/Contact') && "text-light border-b-yellow-400 border-b-[3px]"}`}>Contact Us</a>
          </Link>
        </nav>
        {pageState ? 
            <Link to='/profile'
               className={`cursor-pointer py-5 px-2 hover:text-yellow-500 text-gray-400 ${pathMatchRoute('/profile') && "text-light border-b-yellow-400 border-b-[3px]"}`}>{pageState}
            </Link>:
            <Link to='/signin' className={`cursor-pointer py-5 px-2 hover:text-yellow-500 text-gray-400 ${pathMatchRoute('/signin') && "text-light border-b-yellow-400 border-b-[3px]"}`}>{pageState}
            </Link>
          }
      </div>
    </header>

  )
}



{/* <header>
        <div className='bg-black px-10 shadow-sm sticky top-0 z-50 flex justify-between items-center'>
          <div>
            <Link to="/">
              <img className='h-16 cursor-pointer' src={navbarImg} alt='navbar-img'></img>
            </Link>
          </div>
          <div>
            <ul className='flex space-x-10 color-white text-base font-thin'>
              <Link to='/'>
                <li className={`cursor-pointer py-5 px-2 hover:text-yellow-500 text-gray-400 ${pathMatchRoute('/') && "text-light border-b-yellow-400 border-b-[3px]"}`}>Home</li>
              </Link>
              <Link to='/offers'>
                <li className={`cursor-pointer py-5 px-2 hover:text-yellow-500 text-gray-400 ${pathMatchRoute('/offers') && "text-light border-b-yellow-400 border-b-[3px]"}`}>Offers</li>
              </Link>
              {pageState ? 
                <Link to='/profile'>
                  <li className={`cursor-pointer py-5 px-2 hover:text-yellow-500 text-gray-400 ${pathMatchRoute('/profile') && "text-light border-b-yellow-400 border-b-[3px]"}`}>{pageState}</li>
                </Link>:
                <Link to='/signin'>
                  <li className={`cursor-pointer py-5 px-2 hover:text-yellow-500 text-gray-400 ${pathMatchRoute('/signin') && "text-light border-b-yellow-400 border-b-[3px]"}`}>{pageState}</li>
                </Link>
              }
            </ul>
          </div>
        </div>
    </header> */}