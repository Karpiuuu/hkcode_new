import React, {useState, useRef, useEffect} from 'react'

import {Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Sudety from '../assets/sudety.png'
import StronaLogo from '../assets/strony.webp'
import Slider2 from '../assets/gospodarna.webp'



function SwiperPortfolio() {

    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
            }
        },
        { threshold: 0.01 }
        );

        if (divRef.current) {
        observer.observe(divRef.current);
        }

        return () => {
        if (divRef.current) {
            observer.unobserve(divRef.current);
        }
        };
    }, []);


    return (
    <div className='w-full bg-white'>
        <div ref={divRef} className='max-w-[1240px] mx-auto flex justify-center'>
            <Swiper
                style={{
                    "--swiper-pagination-color": "#B8C0D9",
                    "--swiper-pagination-bullet-inactive-color": "#E5E5E5",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "12px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px"
                  }}
                
                className='md:h-[380px]'
                modules={[Autoplay, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    enabled: true,
                    delay: 7*1000
                }}
                loop={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                speed={1200}
                >
                <SwiperSlide>
                    <div className={`grid md:grid-cols-2 text-center ${isVisible ? 'animate-zoom-in' : ''}`}>
                        <div>
                            <img src={Slider2} alt="slider1 img" className='mx-auto h-auto md:h-[340px]' />
                        </div>
                        <div className='bg-[#e5e5e5] px-10 py-4'>
                            <img src={StronaLogo} alt="logo strony" className='md:h-[112px] h-[80px] mx-auto md:mx-0' />
                            <h2 className='font-black text-[22px] text-[#404040] pt-[20px] md:text-left'>Projekt Gospodarna Polska</h2>
                            <div className='flex justify-center md:justify-start'>
                                <p className='text-[18px] pt-[10px] md:text-left'><a href="https://gospodarnapolska.pl" target="_blank" rel="noopener noreferrer"><button className='flex hover:scale-105 duration-300 bg-white mt-[20px] text-black border-[1px] text-[18px] rounded-full w-[200px] h-[52px] items-center justify-center'>Przejdź na stronę</button></a></p>   
                            </div> 
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`grid md:grid-cols-2 text-center ${isVisible ? 'animate-zoom-in' : ''}`}>
                        <div>
                            <img src={Sudety} alt="slider1 img" className='mx-auto h-auto md:h-[340px]' />
                        </div>
                        <div className='bg-[#e5e5e5] px-10 py-4'>
                            <img src={StronaLogo} alt="logo strony" className='md:h-[112px] h-[80px] mx-auto md:mx-0' />
                            <h2 className='font-black text-[22px] text-[#404040] pt-[20px] md:text-left'>Sudety Drewno Sklep</h2>
                            <div className='flex justify-center md:justify-start'>
                                <p className='text-[18px] pt-[10px] md:text-left'><a href="https://sudetydrewno.com.pl" target="_blank" rel="noopener noreferrer"><button className='flex hover:scale-105 duration-300 bg-white mt-[20px] text-black border-[1px] text-[18px] rounded-full w-[200px] h-[52px] items-center justify-center'>Przejdź na stronę</button></a></p>   
                            </div>  
                        </div>
                        
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        
    </div>
  )
}

export default SwiperPortfolio