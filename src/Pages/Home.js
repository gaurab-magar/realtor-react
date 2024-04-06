import React from 'react';
import {Swiper,SwiperSlide} from 'Swiper/react';
import 'swiper/css';
import SwiperCore,{EffectFade,Autoplay,Navigation,pagination} from 'swiper';
export const Home = () => {
  SwiperCore.use([Autoplay,Navigation,pagination,EffectFade]);
  return (
    <main className='text-white'>
      <div className='container px-6 py-4 mx-auto'>
        <Swiper slidesPerView={1} navigation pagination={{type:'progressbar'}} effect='fade' modules={[EffectFade]} autoplay={{delay:3000}}>
          {ListingItem.image.map((url,index)=>(
            <SwiperSlide key={index}>
              <div className='w-full overflow-hidden h-[300px]' style={{background:`url(${listing.imgUrls[index]}) center no-repeat`}}>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  )
}
