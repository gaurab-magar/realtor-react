import React from 'react';
import { listingImg } from '../ListingImage';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import{ Navigation, Pagination,History } from 'swiper/modules';
import { Slider } from '../Components/Slider';

export const Home = () => {

  return (
  <main className='text-white'>
    <div className='px-0 py-4 mx-auto border'>
      <Slider />
    </div>
  </main>
);
};
