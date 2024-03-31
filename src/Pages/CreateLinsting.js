import React, { useState } from 'react'

export const CreateLinsting = () => {
    const [formData , setFormData] = useState({
        type:'rent',
        name:'',
        bedroom:'',
        bathroom:'',
        parking:false,
        furnished:false,
        offer:true,
        reglarPrice:0,
        discountPrice:0
    });
    const {type , name , bedroom , bathroom , parking , furnished , offer , reglarPrice , discountPrice} = formData;
    function onChanged(){

    }

  return (
    <>
        <main className='text-white max-w-md mx-auto px-3'>
            <h1 className='text-center text-3xl my-2'>Create listing</h1>
            <form>
                <p className='text-lg mt-6 font-semibold'>Sell / Rent:</p>
                <div className='flex items-center gap-3'>
                    <button type='button' className={`py-2 px-6 font-medium text-sm uppercase shadow-md shadow-white active:shadow-lg border rounded-md w-full 
                    ${type === "rent" ? "bg-white text-black": "bg-slate-500"}`}
                     id='type' value="sale" onClick={onChanged}>Sell</button>
                    <button type='button' className={`py-2 px-6 font-medium text-sm uppercase shadow-md shadow-white active:shadow-lg border rounded-md w-full 
                    ${type === "sale" ? "bg-white text-black": "bg-slate-500"}`}
                     id='type' value="sale" onClick={onChanged}>rent</button>
                </div>
                <div className='my-2'>
                    <label htmlFor='name' className='font-semibold'>Name: </label><br />
                    <input type='text' id='name' placeholder='Your name' className='w-full py-2 text-xl border border-yellow-500 rounded-md px-3 transition duration-150 ease-in' value={name} onChange={onChanged} required minLength={4} />
                </div>
                <div className='my-2 flex items-center justify-between gap-3'>
                    <div>
                        <label htmlFor='bed' className='font-semibold'>Bed:</label><br />
                        <input className='w-full py-2 transition duration-150 ease-in text-center rounded-md' type='number' value={bedroom} onChange={onChanged}  min='1' id='bed' required/>
                    </div>
                    <div>
                        <label htmlFor='bath' className='font-semibold'>BathRoom:</label><br />
                        <input className='w-full py-2 transition duration-150 ease-in text-center rounded-md' type='number' value={bathroom} onChange={onChanged}  min='1' id='bath' required/>
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
                    <textarea type='text' id='address' placeholder='address' className='w-full py-2 text-xl border border-yellow-500 rounded-md px-3 transition duration-150 ease-in' value={name} onChange={onChanged} required maxLength={30} />
                </div>
                <div className='my-2'>
                    <label htmlFor='description' className='font-semibold'>Description: </label><br />
                    <textarea type='text' id='description' placeholder='Description' className='w-full py-2 text-xl border border-yellow-500 rounded-md px-3 transition duration-150 ease-in' value={name} onChange={onChanged} required maxLength={30} />
                </div>
                <p className='text-lg mt-3 font-semibold'>Offer:</p>
                <div className='flex items-center gap-3'>
                    <button type='button' 
                        className={`py-2 px-6 font-medium text-sm uppercase shadow-md shadow-white active:shadow-lg border rounded-md w-full 
                        ${ offer ? "bg-white text-black": "bg-slate-500"}`}
                        id='offer' value={true} onClick={onChanged}>Yes
                    </button>
                    <button type='button' className={`py-2 px-6 font-medium text-sm uppercase shadow-md shadow-white active:shadow-lg border rounded-md w-full 
                        ${ !offer ? "bg-white text-black": "bg-slate-500"}`}
                        id='offer' value={false} onClick={onChanged}>No
                    </button>
                </div>
                <div>
                    <p className='mt-3 text-lg font-semibold'>Regular Price</p>
                    <div className='flex items-center justify-between space-x-6'>
                        <input 
                            className='w-full py-2 transition duration-150 ease-in text-center rounded-md'
                            placeholder="Price" 
                            type='number' id='regularPrice'
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
                                    className='w-full py-2 transition duration-150 ease-in text-center rounded-md'
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
            </form>
        </main>
    </>
  )
}
