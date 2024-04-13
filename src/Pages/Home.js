import React from 'react';
// Import Swiper styles
import 'swiper/css';
import { Slider } from '../Components/Slider';
import { ListingItem } from '../Components/ListingItem';
import { FaCheck } from "react-icons/fa6";

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
        <div className=' flex flex-col justify-center items-center space-y-5'>
            <h1 className='font-thin text-center text-3xl text-white-900'>The Goals</h1>
            <p className='font-serif text-center text-md text-white w-full p-1 md:w-2/3'>
            Landmark Sotheby’s International Realty wanted to elevate their agent recruitment and retention, build brand recognition for their business, empower their agents to build their personal brands and engage more leads, and stay cost efficient while doing so.
            </p>
        </div>
        <div className='mx-1 md:mx-8 my-6 p-1 md:flex overflow-hidden gap-6 '>
          <div className='w-full md:w-2/3'>
              <img className='object-center object-cover h-96 w-full rounded-md' alt='homeImg1' src='https://www.luxurypresence.com/wp-content/uploads/2023/08/big-left-1-min-4-1200x720.jpg'></img>
          </div>
          <div className='hidden md:block md:w-1/3 space-y-3 mt-2 md:mt-0'>
            <div className='h-1/2'>
              <img className='object-center object-cover h-44' alt='homeImg1' src='https://www.luxurypresence.com/wp-content/uploads/2023/08/small-up-1-min-4-1200x720.jpg'></img>
            </div>
            <div className='w-full md:h-1/2'>
              <img className='object-center object-cover h-44' alt='homeImg1' src='https://www.luxurypresence.com/wp-content/uploads/2023/08/small-down-1-min-4-1200x720.jpg'></img>
            </div>
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
      <section className='py-7 '>
          <div className='container mx-auto'>
            <div className='md:flex gap-3 p-1'>
              <div className='w-full md:w-1/2'>
                <h1 className='font-thin text-3xl text-white-900 mb-4'>The Solutions</h1>
                <p>With agent subdomain sites, agents on the Landmark Sotheby’s International Realty team are able to easily set up their own beautiful, personalized websites. Benefits of using the product include:</p>
                <div>
                  <ul className='my-4'>
                    <li className='text-gray-400 flex items-start gap-3'>
                      <FaCheck className='text-yellow-400 text-xl' />
                      <p className='text-sm'>
                        <strong className='text-gray-200'>Fostering a Supportive Environment:</strong> Search by location or property type to find the perfect place for you.
                      </p>
                    </li>
                    <li className='text-gray-400 flex items-start gap-3'>
                      <FaCheck className='text-yellow-400 text-xl' />
                      <p className='text-sm'>
                        <strong className='text-gray-200'>Recruiting and Retaining Talent:</strong> having the strong feeling of home the perfect place for you.
                      </p>
                    </li>
                    <li className='text-gray-400 flex items-start gap-3'>
                      <FaCheck className='text-yellow-400 text-xl' />
                      <p className='text-sm'>
                        <strong className='text-gray-200'>Engaging More Leads:</strong> dont need yoga after sunbath find the perfect place for you.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='w-full md:w-1/2 p-1'>
                <img className='object-center object-cover rounded-md' alt='homeImg1' src='https://www.luxurypresence.com/wp-content/uploads/2023/08/big-right-1-min-4.jpg'></img>
              </div>
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
      <section className='py-7'>
        <div className='container mx-auto flex items-center justify-center'>
          <p className='w-full p-1 md:w-2/3 text-center font-serif text-4xl'>
            Trusted by over 20 of the top 100 WSJ agents in the US
          </p>
        </div>
        </section> 
    </div> 
  </main>
);
};
