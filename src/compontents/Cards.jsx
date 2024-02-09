import React from 'react'
import Single from '../assets/strony.png'
import Triple from '../assets/sklepy.png'
import Double from '../assets/marketing.png'
import Offery from '../assets/OFERTA.png'

const Cards = () => {
  return (
    <div className='w-full pt-[80px] md:pt-[10rem] pb-[40px] px-4 bg-white rounded-t-[100px] xl:rounded-bl-[500px]'>
        <div className='flex md:hidden justify-center'>
        <img src={Offery} alt="napis oferta" className='w-[320px] pb-[80px]'/>
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-[100px] hover:scale-105 duration-300 bg-[#eeeeee]'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Single} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Strony internetowe</h2>
                <p className='text-center text-[18px] text-[#333333]'>Donec laoreet, augue non fermentum feugiat, libero enim tincidunt lectus, cursus sagittis dolor augue id elit.</p>
                <button className='text-[#333333] text-[18px] underline mt-[80px] pb-[20px] font-bold hover:scale-105 duration-300'>Dowiedz się więcej</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-[100px] hover:scale-105 duration-300 bg-[#eeeeee]'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Triple} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Sklepy internetowe</h2>
                <p className='text-center text-[18px] text-[#333333]'>Donec laoreet, augue non fermentum feugiat, libero enim tincidunt lectus, cursus sagittis dolor augue id elit.</p>
                <button className='text-[#333333] text-[18px] underline mt-[80px] font-bold hover:scale-105 duration-300'>Dowiedz się więcej</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-[100px] hover:scale-105 duration-300 bg-[#eeeeee]'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Social Media Marketing</h2>
                <p className='text-center text-[18px] text-[#333333]'>Donec laoreet, augue non fermentum feugiat, libero enim tincidunt lectus, cursus sagittis dolor augue id elit.</p>
                <button className='text-[#333333] text-[18px] underline mt-[80px] font-bold hover:scale-105 duration-300'>Dowiedz się więcej</button>
            </div>
        </div>
        <div className='hidden md:flex justify-end pt-[100px]'>
            <img src={Offery} alt="napis oferta" className='xl:w-[1000px]'/>
        </div>
    </div>
  )
}

export default Cards