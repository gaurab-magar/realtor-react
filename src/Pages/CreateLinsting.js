import React, { useState } from 'react'
import { Spinner } from '../Components/Spinner';
import { toast } from 'react-toastify';
import{getStorage , ref, uploadBytesResumable} from 'firebase/storage';
import {getAuth } from "../Firebase/auth.js";
import {v4 as uuidv4, v4} from 'uuid';

export const CreateLinsting = () => {
    const auth = getAuth();
    const [geolocationEnabled , setGeolocationEnabled] = useState(true);
    const [loading , setLoading] = useState(false);
    const [formData , setFormData] = useState({
        type:'rent',
        name:'',
        bedroom:1,
        bathroom:1,
        parking:false,
        furnished:false,
        address:'',
        description:'',
        offer:true,
        reglarPrice:0,
        discountPrice:0,
        latitude:0,
        longitude:0,
        images:{}
    });
    const {type , name , bedroom , bathroom , parking , furnished ,address,description, offer , reglarPrice , discountPrice,latitude,longitude,images} = formData;
    
    function onChanged(e){
    
        let boolean = null;
        if(e.target.value === "true"){
            boolean = true
        }
        if(e.target.value ==='false'){
            boolean = false
        }
        //files
        if(e.target.files){
            setFormData((prevState)=>({
                ...prevState,
                images: e.target.files
            }))
        }
        //text
        if(!e.target.files){
            setFormData((prevState)=>({
                ...prevState,
                [e.target.id]: boolean ?? e.target.value,
            }))
        }
    }

    async function onSubmit(e){
        e.preventDefault();
        setLoading(true);
        try{
            if(discountPrice >= reglarPrice){
                setLoading(false)
                toast.error('regular price should be greater than discount price')
                return;
            }
            if(images.length > 6){
                setLoading(false)
                toast.warning("you can't upload more than 6 image at once");
                return;
            }
            let geoLocation = {}
            let location
            if(geolocationEnabled){
                const response = await fetch(`https://ipapi.co/json/?address=${address}&key=${process.env.geolocation_API}`);
                const data = await response.json()

                geolocation.lat = data.results[0]?.geometry.location.lat ?? 0;
                geolocation.lng = data.results[0]?.geometry.location.lng ?? 0;
                location = data.status === 'Zero_Results'&&undefined;

                if(location === undefined || location.includes('undefined')){
                    setLoading(false)
                    toast.error('Geolocaion is not  available please enter the address manually');
                    return;
                }
            }else{
                geolocation.lat = latitude;
                geolocation.lng = longitude;
            }
            async function storeImage(image){
                return new Promise((resolve,reject)=>{
                    const storage= getStorage();
                    const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
                    const storageRef = ref(storage, fileName);
                    const upLoadTask = uploadBytesResumable(storageRef, image);
                    upLoadTask.on('state_changed', (snapshot) => {
                        const  progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        switch(snapshot.state){
                            case 'pending':
                                console.log(`uploading ${progress}%`);
                                break;
                            case 'running':
                                console.log(`Upload in progres: ${progress}%`);
                                break;
                            default:
                                if(snapshot.state == 'success'){
                                    console.log('Upload success');
                                    resolve({id: snapshot.metadata.firebaseStorageDownloadTokens, ...geolocation});
                                    resolve({id: snapshot.metadata.ref.fullPath, ...geoLocation});
                                } else {
                                    console.log('failed');
                                    reject(snapshot.error);
                                }
                        }
                    })

                })
            }
            const imgUrls = await Promise.all(
                [...images]
                .map((image)=> storeImage(image))
                .catch((error)=>{
                    setLoading(false)
                    toast.error('Images not uploaded')
                    return;
                })
                )
        }catch{
            alert('error during filling form')
        }
    }

    if(loading){
        return <Spinner />
    }
  return (
    <>
        <main className='text-white max-w-md mx-auto px-3'>
            <h1 className='text-center text-3xl my-2'>Create listing</h1>
            <form onSubmit={onSubmit}>
                <p className='text-lg mt-6 font-semibold'>Sell / Rent:</p>
                <div className='flex items-center gap-3'>
                    <button type='button' className={`py-2 px-6 font-medium text-sm uppercase shadow-md shadow-white active:shadow-lg border rounded-md w-full 
                    ${type === "rent" ? "bg-white text-black": "bg-slate-500"}`}
                     id='type' value="sale" onClick={onChanged}>Sell</button>
                    <button type='button' className={`py-2 px-6 font-medium text-sm uppercase shadow-md shadow-white active:shadow-lg border rounded-md w-full 
                    ${type === "sale" ? "bg-white text-black": "bg-slate-500"}`}
                     id='type' value="rent" onClick={onChanged}>rent</button>
                </div>
                <div className='my-2'>
                    <label htmlFor='name' className='font-semibold'>Name: </label><br />
                    <input type='text' id='name' placeholder='Your name' className='w-full text-black py-2 text-xl border border-yellow-500 rounded-md px-3 transition duration-150 ease-in' value={name} onChange={onChanged} required minLength={4} />
                </div>
                <div className='my-2 flex items-center justify-between gap-3'>
                    <div>
                        <label htmlFor='bed' className='font-semibold'>Bed:</label><br />
                        <input className='w-full text-black py-2 transition duration-150 ease-in text-center rounded-md' type='number' value={bedroom} onChange={onChanged}  min='1' id='bed' required/>
                    </div>
                    <div>
                        <label htmlFor='bath' className='font-semibold'>BathRoom:</label><br />
                        <input className='w-full text-black py-2 transition duration-150 ease-in text-center rounded-md' type='number' value={bathroom} onChange={onChanged}  min='1' id='bath' required/>
                    </div>
                </div>
                <p className='text-lg mt-3 font-semibold'>Parking Spot:</p>
                <div className='flex items-center gap-3'>
                    <button type='button' 
                        className={`py-2 px-6 font-medium text-sm uppercase shadow-md shadow-white active:shadow-lg border rounded-md w-full 
                        ${ !parking ? "bg-white text-black": "bg-slate-500"}`}
                        id='parking' value={true} onClick={onChanged}>Yes
                    </button>
                    <button type='button' className={`py-2 px-6 font-medium text-sm uppercase shadow-md shadow-white active:shadow-lg border rounded-md w-full 
                        ${  parking ? "bg-white text-black": "bg-slate-500"}`}
                        id='parking' value={false} onClick={onChanged}>No
                    </button>
                </div>
                <p className='text-lg mt-3 font-semibold'>Furnished:</p>
                <div className='flex items-center gap-3'>
                    <button type='button' className={`py-2 px-6 font-medium text-sm uppercase shadow-md shadow-white active:shadow-lg border rounded-md w-full 
                        ${ !furnished ? "bg-white text-black": "bg-slate-500"}`}
                        id='furnished' value={true} onClick={onChanged}>Yes
                    </button>
                    <button type='button' className={`py-2 px-6 font-medium text-sm uppercase shadow-md shadow-white active:shadow-lg border rounded-md w-full 
                        ${ furnished ? "bg-white text-black": "bg-slate-500"}`}
                        id='furnished' value={false} onClick={onChanged}>No
                    </button>
                </div> 
                <div className='my-2'>
                    <label htmlFor='address' className='font-semibold'>Address: </label><br />
                    <textarea type='text' id='address' placeholder='address' className='w-full text-black py-2 text-xl border border-yellow-500 rounded-md px-3 transition duration-150 ease-in' value={address} onChange={onChanged} required maxLength={30} />
                </div>
                {!geolocationEnabled && (
                    <div className='flex items-center justify-between space-x-6'>
                        <div>
                            <p className='text-lg font-semibold'>latitude:</p>
                            <input className='py-2 text-black px-3 rounded-md text-xl w-full' type='number' id='latitude' value={latitude} min='-90' max='90' onChange={onChanged} required></input>
                        </div>
                        <div>
                            <p className='text-lg font-semibold'>longitude:</p>
                            <input className='py-2 text-black px-3 rounded-md text-xl w-full' type='number' id='longitude' value={longitude} min='-180' max='180' onChange={onChanged} required></input>
                        </div>
                    </div>
                )}
                <div className='my-2'>
                    <label htmlFor='description' className='font-semibold'>Description: </label><br />
                    <textarea type='text' id='description' placeholder='Description' className='w-full text-black py-2 text-xl border border-yellow-500 rounded-md px-3 transition duration-150 ease-in' value={description} onChange={onChanged} required maxLength={30} />
                </div>
                <p className='text-lg mt-3 font-semibold'>Offer:</p>
                <div className='flex items-center gap-3'>
                    <button type='button' 
                        className={`py-2 px-6 font-medium text-sm uppercase shadow-md shadow-white active:shadow-lg border rounded-md w-full 
                        ${ offer ? " bg-slate-500" : "bg-black text-white "}`}
                        id='offer' value={true} onClick={onChanged}>Yes
                    </button>
                    <button type='button' className={`py-2 px-6 font-medium text-sm uppercase shadow-md shadow-white active:shadow-lg border rounded-md w-full 
                        ${ !offer ? " bg-slate-500" : "bg-black text-white "}`}
                        id='offer' value={false} onClick={onChanged}>No
                    </button>
                </div>
                <div>
                    <p className='mt-3 text-lg font-semibold'>Regular Price</p>
                    <div className='flex items-center justify-between space-x-6'>
                        <input 
                            className='w-full text-black py-2 transition duration-150 ease-in text-center rounded-md'
                            placeholder="Price" 
                            type='number' id='reglarPrice'
                            required value={reglarPrice} onChange={onChanged}
                            min="50" max="40000000">
                        </input>
                        {type === 'rent' && (
                            <div className='border px-2 py-3'>
                                <p className='text-md w-full whitespace-nowrap transition duration-200 ease-linear '> $/month </p>
                            </div>
                        )}
                    </div> 
                    {offer && (
                        <div>
                            <p className='mt-3 text-lg font-semibold'>Discount Price:</p>
                            <div className='flex items-center justify-between space-x-6'>
                                <input 
                                    className='w-full text-black py-2 transition duration-150 ease-in text-center rounded-md'
                                    placeholder="Price" 
                                    type='number' id='discountPrice'
                                    required={offer} value={discountPrice} onChange={onChanged}
                                    min="50" max="40000000">
                                </input>
                                {type === 'rent' && (
                                    <div className='border px-2 py-3'>
                                        <p className='text-md w-full whitespace-nowrap transition duration-200 ease-linear '> $/month </p>
                                    </div>
                                )}
                            </div> 
                        </div>
                    )} 
                </div>
                <div className='flex flex-col '>
                    <label id='inputFile'  className='font-semibold text-lg'>Images:</label>
                    <input type='file' id='inputFile' 
                        className='border border-dotted py-2 px-3 transition duration-200 ease-in-out rounded-md focus:border-slate-700'
                        onChange={onChanged} 
                        accept='.jpg,.png,jpeg'
                        multiple
                        required
                    ></input>
                </div>
                <button type='submit' className='w-full my-3 bg-blue-700 hover:bg-blue-800 rounded-md shadow-sm py-2 active:bg-blue-950 transition duration-200 ease-out'>Create List</button>
            </form>
        </main>
    </>
  )
}
