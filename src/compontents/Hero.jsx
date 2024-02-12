import React from 'react'
import { ReactTyped } from "react-typed";

import Kula from '../assets/kula.png'

function Hero() {
  return (
    <div className="w-full z-998 pb-[10rem] pt-[5rem] px-2 h-screen" id='o-nas'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
            <div className='animate-slide-from-left'>
              <h1 className='text-white text-[62px] font-bold'>HKCODE.PL</h1>
              <ReactTyped
                className='text-[#BA74D9] text-[52px] font-bold'
                strings={[
                  "STRONY INTERNETOWE",
                  "SKLEPY INTERNETOWE",
                  "MEDIA MARKETING",
                  "COPYWRITING",
                  "SEO",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              >

              </ReactTyped>
              {/* <h2 className='text-[#BA74D9] text-[55px] font-bold'>STRONY INTERNETOWE</h2> */}
              <p className='text-[30px] pt-[20px]'>Oferujemy wszystko czego potrzebujesz,<br></br>żeby zainstnieć w internecie.</p>
              <div className='flex gap-8 pt-[80px]'>
                <div className=''><a href="/contact"><button className='flex hover:scale-105 duration-300 bg-white text-black text-[18px] rounded-full w-[200px] h-[52px] items-center justify-center'>Popros o wycenę</button></a></div>
                <div className=''><a href="/home#oferta"><button className='flex hover:scale-105 duration-300 bg-transparent text-white border-[1px] text-[18px] rounded-full w-[200px] h-[52px] items-center justify-center'>Sprawdź ofertę</button></a></div>
                
              </div>
            </div>
            <div className='animate-slide-from-right'>
              <img src={Kula} alt="dryfujaca kula" className='hidden md:flex w-[600px] mt-[-50px] ml-[50px] absolute animate-drift-up-down'/>
            </div>
        </div>
    </div>
  )
}

export default Hero