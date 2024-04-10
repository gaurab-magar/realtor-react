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
                    <div className='w-full h-[300px] overflow-hidden'
                        style={{background:`url(${data.image}) center, no-repeat`,backgroundSize:'cover'}}>
                    </div>
                </SwiperSlide>
            ))}
       </Swiper>
    </div>
  )
}
