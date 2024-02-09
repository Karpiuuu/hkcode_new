import React from 'react'
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className="w-full z-998 py-[10rem] px-2 h-screen">
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
            <div className=''>
              <h1 className='text-white text-[80px] font-bold'>HKCODE.PL</h1>
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
                <div className=''><button className='flex hover:scale-105 duration-300 bg-white text-black text-[18px] rounded-full w-[200px] h-[52px] items-center justify-center'><a href="">Popros o wycenę</a></button></div>
                <div className=''><button className='flex hover:scale-105 duration-300 bg-transparent text-white border-[1px] text-[18px] rounded-full w-[200px] h-[52px] items-center justify-center'><a href="">Sprawdź ofertę</a></button></div>
                
              </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Hero