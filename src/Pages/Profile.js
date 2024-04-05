import { getAuth, updateProfile } from 'firebase/auth';
import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router';
import {toast} from 'react-toastify';
import {db} from '../Firebase';
import { doc } from 'firebase/firestore';
import { updateDoc } from 'firebase/firestore';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {collection, getDocs, orderBy, query, where} from 'firebase/firestore';
import { ListingItem } from '../Components/ListingItem';

export const Profile = () => {

  const auth =  getAuth();
  const navigate = useNavigate();
  // const [listings , setListings] = useState(null);
  const [loading , setLoading] = useState(true);

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

  let listingRent = [
    {
      image:'https://media.istockphoto.com/id/1139966848/ro/fotografie/abstract-blur-living-zona-de-interior-pentru-fundal-imagine.jpg?s=1024x1024&w=is&k=20&c=d4KBhRwwJvuYosluQklHno1iHv5lmGlemMeLHshnHxM=',
      title:'luxury Designer Townhall',
      location: '34 velvet Road, port melourne, victory',
      price: '$1,859 / month',
      bed: '5 Beds',
      bath: '3 Baths'
    },
    {
      image:'https://media.istockphoto.com/id/651191036/ro/fotografie/interior-cu-canapea-ilustra%C8%9Bie-3d.jpg?s=1024x1024&w=is&k=20&c=jbC8lPdqeywBGUQBTlyJfxTfveYelVRZYj5aupmmJ1w=',
      title:'Room for rent with pool',
      location: '4/78 Raglan Street',
      price: '$1,859 / month',
      bed: '1 Beds',
      bath: '1 Baths'
    },
    {
      image:'https://media.istockphoto.com/id/651172614/ro/fotografie/interior-cu-canapea-ilustra%C8%9Bie-3d.jpg?s=1024x1024&w=is&k=20&c=RATjqp3mInzPQshsiEZNb1B9i-tWO6szz5daz-y7oPw=',
      title:'Elegant, spacious theme',
      location: '3/15 petkell parade',
      price: '$1,859 / month',
      bed: '2 Beds',
      bath: '1 Baths'
    },
  ]
//   useEffect(()=>{
//     async function fetchUserListing(){
//         const listingRef = collection(db, "listings");
//         const q = query(listingRef , 
//             where('userRef', '==',auth.currentUser.uid), 
//             orderBy( 'timeStamp','desc'));
//         const querySnap = await getDocs(q);
//         let listings = [];
//         querySnap.forEach((doc)=> {
//             return listings.push({
//                 id: doc.id,
//                 data: doc.data(),
//             })
//         })
//         setListings(listings);
//         setLoading(false);
//     }
//     fetchUserListing();
// },[auth.currentUser.uid]);

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
      <div className='max-w-6xl px-3 mt-6 mx-auto'>
            <h1 className='text-white text-3xl text-center font-semibold'>my Listings</h1>
            <section className="text-gray-600">
              <div className="container px-2 py-7 mx-auto">
                <div className="flex  flex-wrap">
                    {listingRent.map((listing)=>(
                      <ListingItem listing={listing} id={listing.id} key={listing.id} />
                    ))}
                </div>
              </div>
            </section>
      </div>
    </>
  )
}
