import React from 'react';
import { ListingItem } from '../Components/ListingItem';


export const Offers = () => {
  let listingOffers = [
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
  return (
    <section className='text-white'>
      <div className='container py-4 px-6 mx-auto'>
        <h2 className='text-center text-3xl font-semibold'>Offers</h2>
        <p className='text-center text-sm font-thin'>Available offer now</p>
        <div className='flex flex-wrap'>
          {listingOffers.map((data,index)=>(
            <ListingItem key={index} listing={data}/>
          ))}
        </div>
      </div>
    </section>
  )
}
