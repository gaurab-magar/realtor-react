import React from 'react';
import { listingImg } from '../ListingImage';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import{ Navigation, Pagination,History } from 'swiper/modules';

export const Home = () => {

  return (
  <main className='text-white'>
    <div className='container px-6 py-4 mx-auto'>
      <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          pagination={true}
          history={{
            key: 'slide',
          }}
          modules={[Navigation, Pagination, History]}
          className="mySwiper"
        >
        {listingImg.map((item, index) => (
            <SwiperSlide key={index}>
              <div>
                <img src={`${item.image}`} alt='pagination' />
              </div>
            </SwiperSlide>))}
      </Swiper>
    </div>
  </main>
);
};



            // <div
            //   className='w-full h-[300px]'
            //   style={{
            //     backgroundImage: `url(${item.image})`,
            //     backgroundPosition: 'center',
            //     backgroundRepeat: 'no-repeat',
            //     backgroundSize: 'cover',
            //   }}
            // ></div>
