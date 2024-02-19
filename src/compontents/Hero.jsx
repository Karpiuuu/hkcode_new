import React from 'react'
import { ReactTyped } from "react-typed";

import Kula from '../assets/kula.webp'

function Hero() {
  return (
    <div className="w-full z-998 pb-[10rem] pt-[5rem] px-4 h-screen mb-[150px]" id='o-nas'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
            <div className='animate-slide-from-left text-center md:text-left'>
              <h1 className='text-white text-[45px] md:text-[62px] font-bold'>HKCODE.PL</h1>
              <ReactTyped
                className='text-[#BA74D9] text-[40px] md:text-[52px] font-bold'
                strings={[
                  "STRONY INTERNETOWE",
                  "SKLEPY INTERNETOWE",
                  "MEDIA MARKETING",
                  "AI MARKETING",
                  "COPYWRITING",
                  "SEO",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              >

              </ReactTyped>
              <p className='text-[20px] md:text-[30px] pt-[20px]'>Oferujemy wszystko czego potrzebujesz,<br/>żeby zainstnieć w internecie.</p>
              <div className='grid md:grid-cols-2 pt-[80px]'>
                <div className='flex justify-center md:justify-normal'><a href="/contact"><button className='flex mb-[15px] hover:scale-105 duration-300 bg-white text-black text-[18px] rounded-full w-[200px] h-[52px] items-center justify-center'>Poproś o wycenę</button></a></div>
                <div className='flex justify-center md:justify-normal'><a href="/home#oferta"><button className='flex md:ml-[-80px] hover:scale-105 duration-300 bg-transparent text-white border-[1px] text-[18px] rounded-full w-[200px] h-[52px] items-center justify-center'>Sprawdź ofertę</button></a></div>
                
              </div>
            </div>
            <div className='animate-slide-from-right'>
              <img src={Kula} alt="dryfujaca kula" className='hidden md:flex w-[600px] absolute animate-drift-up-down'/>
            </div>
        </div>
    </div>
  )
}

export default Hero