import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

export const ListingItem = ({listing,id,onDelete}) => {
  return (
  <div className="p-4 md:w-1/3">
    <Link to={`/category/${id}`}>
      <div className="bg-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-white shadow-md hover:shadow-lg transition-shadow duration-150 relative">
          <img loading='lazy' className="lg:h-44 md:h-36 w-full object-cover object-center hover:scale-110 transition-scale duration-200 ease-in" src={listing.image} alt="blog" />
          <p className='font-semibold bg-blue-700 p-2 rounded-md text-white absolute top-2 left-2 text-xs shadow-lg'>7 Hours ago</p>
          <div className="p-4">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 flex items-center"><CiLocationOn className='text-red-700 text-2xl mr-2'/>{listing.location}</h2>
            <h1 className="title-font text-lg font-medium text-black-50 mb-3">{listing.title}</h1>
            <p className="leading-relaxed mb-3 text-gray-400">{listing.price}</p>
            <div className='flex items-center start my-2 '>
              <span className="text-gray-400 mr-3 inline-flex items-center md:ml-0 leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  {listing.bed}
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  {listing.bath}
                </span>
            </div>
            <div className="flex items-center flex-wrap ">
              <a href='/' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>

                <Link to='/create-listing' className='ml-auto mr-3 text-xl text-blue-500 hover:scale-125 transition-scale duration-200 ease-in'>
                  <FaUserEdit />
                </Link>
                <button onClick={()=>onDelete(listing.id)} className='text-xl text-red-700 hover:scale-125 transition-scale duration-200 ease-in'>
                  <MdDeleteOutline />
                </button>
            </div>
          </div>
      </div>
    </Link>
  </div>
  )
}