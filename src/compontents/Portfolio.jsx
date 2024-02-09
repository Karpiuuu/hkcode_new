import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Portfolio() {
  return (
    <div className='h-screen bg-[white] w-full'>
        <div className='flex justify-center text-center max-w-[1240px] mx-auto'>
            <div className='mx-auto w-1/2'>
                <h2 className='text-[#404040] text-[56px] font-black pt-[40px]'>Nasze Portfolio</h2>
                <div className='w-[166px] h-[12px] bg-[blue] mx-auto mt-[20px]'></div>
                <p className='py-[40px] font-normal text-[#333333]'>Mauris rutrum magna vestibulum justo ullamcorper, a suscipit sapien bibendum. Fusce finibus mi nibh, nec imperdiet augue consectetur in.</p>
                <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <div className='grid-cols-2'>
                        <div>a</div>
                        <div>a</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                
                </Swiper>
            </div>
            
        </div>
    </div>
  )
}

export default Portfolio