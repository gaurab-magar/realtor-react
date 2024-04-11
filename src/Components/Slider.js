import React from 'react';
import { listingImg } from '../ListingImage';
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Navigation, Scrollbar } from 'swiper/modules';
import SwiperCore from 'swiper/core';

export const Slider = () => {
    SwiperCore.use(Navigation,Scrollbar);//,Pagination,Scrollbar
  return (
    <div>
        
       <Swiper
           slidesPerView={1}
           navigation
           effect='fade'
        //    modules={[EffectFade]}
           autoplay={{delay: 3000}}
       >
            {listingImg.map((data,index)=>(
                <SwiperSlide key={Math.random().toString()}>
                    <div className='w-full relative h-[400px] overflow-hidden'
                        style={{background:`url(${data.image}) center, no-repeat`,backgroundSize:'cover'}}>
                    </div>
                    <div className='absolute top-2 left-4 p-1 rounded text-white bg-red-500'>
                        <p className='text-sm font-semibold'>Stunning place to live under $1200</p>
                    </div>
                </SwiperSlide>
            ))}
       </Swiper>
    </div>
  )
}
