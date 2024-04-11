import React from 'react';
// Import Swiper styles
import 'swiper/css';
import { Slider } from '../Components/Slider';
import { ListingItem } from '../Components/ListingItem';

export const Home = () => {
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
  return (
  <main className='text-white'>
    <div className='px-0 py-4 mx-auto'>
      <Slider />
      <section className='py-7'>
        <div>
          <h1 className="font-bold text-center text-2xl text-white-600">Recent Offers</h1>
          <p className="w-full text-center">Find your dream home here</p>
        </div>
        <div className='container mx-auto'>
          <div className='flex flex-wrap'>
            {listingRent.map((data,index)=>(
              <ListingItem key={index} listing={data} id={data.id} />
            ))}
          </div>
        </div>
      </section>
      <section className='py-7'>
        <div>
          <h1 className="font-bold text-center text-2xl text-white-600">Rent listing</h1>
          <p className="w-full text-center">Find your dream apartment here</p>
        </div>
        <div className='container mx-auto'>
          <div className='flex flex-wrap'>
            {listingRent.map((data,index)=>(
              <ListingItem key={index} listing={data} id={data.id} />
            ))}
          </div>
        </div>
      </section>
      <section className='py-7'>
        <div>
          <h1 className="font-bold text-center text-2xl text-white-600">Sale listing</h1>
          <p className="w-full text-center">Buy your dream apartment here</p>
        </div>
        <div className='container mx-auto'>
          <div className='flex flex-wrap'>
            {listingRent.map((data,index)=>(
              <ListingItem key={index} listing={data} id={data.id} />
            ))}
          </div>
        </div>
      </section>

      
    </div> 
  </main>
);
};
