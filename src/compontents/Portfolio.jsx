import React, {useState, useRef, useEffect} from 'react'

import Slider1 from '../assets/portfolio_hk.webp'
import StronaLogo from '../assets/strony.webp'
import Slider2 from '../assets/gospodarna.webp'

import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperPortfolio from './SwiperPortfolio';





function Portfolio() {
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
    <div className='bg-[white] w-full px-4' id='portfolio'>
        <div ref={divRef} className='flex justify-center text-center max-w-[1240px] mx-auto'>
            <div className='mx-auto max-w-[1240px]'>
                <h2 className={`text-[#404040] md:text-[56px] text-[40px] font-black pt-[40px] ${isVisible ? 'animate-zoom-in' : ''}`}>Nasze Portfolio</h2>
                <div className={`w-[166px] h-[12px] bg-gradient-to-r from-[#b8c0d9] to-[#ba73d9] rounded-xl mx-auto mt-[20px] ${isVisible ? 'animate-zoom-in' : ''}`}></div>
                <p className={`py-[40px] pb-[80px] font-normal text-[#333333] ${isVisible ? 'animate-zoom-in' : ''}`}>Zapoznaj się z naszymi najświeższymi projektami! Jako specjaliści w dziedzinie tworzenia stron internetowych, sklepów online oraz projektów graficznych, z dumą prezentujemy nasze osiągnięcia.</p>
                    {/* <div className={`grid md:grid-cols-2 gap-8 mb-[40px] bg-[#e5e5e5] ${isVisible ? 'animate-zoom-in' : ''}`}>
                        <div className='hidden md:flex'>
                            <img src={Slider1} alt="slider1 img" className='mx-auto h-auto md:h-[340px]' />
                        </div>
                        <div className='bg-[#e5e5e5] px-4 py-4'>
                            <img src={StronaLogo} alt="logo strony" className='md:h-[112px] h-[80px] mx-auto md:mx-0' />
                            <h2 className='font-black text-[22px] text-[#404040] pt-[20px] md:text-left'>Poprzednia strona HKCode</h2>
                            <p className='text-[18px] pt-[10px] md:text-left'>Stary projekt strony naszej firmy.</p>   
                        </div>
                        <div className='md:hidden'>
                            <img src={Slider1} alt="slider1 img" className='mx-auto h-auto md:h-[340px]' />
                        </div>
                        
                    </div>
                    <div className={`grid md:grid-cols-2 gap-8 bg-[#e5e5e5] ${isVisible ? 'animate-zoom-in' : ''}`}>
                        <div className='md:hidden'>
                            <img src={Slider2} alt="slider1 img" className='mx-auto h-auto md:h-[340px]' />
                        </div>
                        <div className='bg-[#e5e5e5] px-10 py-4'>
                            <img src={StronaLogo} alt="logo strony" className='md:h-[112px] h-[80px] mx-auto md:mx-0' />
                            <h2 className='font-black text-[22px] text-[#404040] pt-[20px] md:text-left'>Projekt Gospodarna Polska</h2>
                            <p className='text-[18px] pt-[10px] md:text-left'><a href="https://gospodarnapolska.pl" target="_blank" rel="noopener noreferrer"><button className='flex hover:scale-105 duration-300 bg-white mt-[20px] text-black border-[1px] text-[18px] rounded-full w-[200px] h-[52px] items-center justify-center'>Przejdź na stronę</button></a></p>   
                        </div>
                        <div className='hidden md:flex'>
                            <img src={Slider2} alt="slider1 img" className='mx-auto h-auto md:h-[340px]' />
                        </div>
                        
                    </div> */}
                    {/* <SwiperPortfolio /> */}
                </div>
            </div>
            
        </div>
  )
}

export default Portfolio