import React from 'react'

import Logo from '../assets/Logo_rozowe.webp'

function Footer() {
  return (
    <div className='w-full bg-[#e5e5e5] px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 pt-[100px]'>
        <div>
          <h2 className='text-[#333333] font-extrabold text-[20px] pt-[20px] md:pt-0'>Informacje</h2>
          <p className='text-[18px] pt-2 font-normal text-[#333333]'>Adrian Hecht Company</p>
          <p className='text-[18px] pt-2 font-normal text-[#333333]'>NIP: 8831878005</p>
          <p className='text-[18px] pt-2 font-normal text-[#333333]'>REGON: 526872796</p>
        </div>
        <div>
          <h2 className='text-[#333333] font-extrabold text-[20px] pt-[20px] md:pt-0'>Kontakt</h2>
          <p className='text-[18px] pt-2 font-normal text-[#333333]'>bok@hkcode.pl</p>
          <p className='text-[18px] pt-2 font-normal text-[#333333]'>536 276 886</p>
        </div>
        <div>
          <h2 className='text-[#333333] font-extrabold text-[20px] pt-[20px] md:pt-0'>Odnośniki</h2>
          <p className='text-[18px] pt-2 font-normal text-[#333333]'><a href="/home#o-nas">O nas</a></p>
          <p className='text-[18px] pt-2 font-normal text-[#333333]'><a href="/home#oferta">Oferta</a></p>
          <p className='text-[18px] pt-2 font-normal text-[#333333]'><a href="/home#portfolio">Portfolio</a></p>
          <p className='text-[18px] pt-2 font-normal text-[#333333]'><a href="/home#opinie">Opinie</a></p>
          <p className='text-[18px] pt-2 font-normal text-[#333333]'><a href="/contact">Kontakt</a></p>
          <p className='text-[18px] pt-2 font-normal text-[#333333]'><a href="/blog">Blog</a></p>
        </div>
        <div>
          <h2 className='text-[#333333] font-extrabold text-[20px] pt-[20px] md:pt-0'>O nas</h2>
          <p className='text-[18px] pt-2 font-normal text-[#333333]'>Tworzymy innowacyjne strony internetowe, sklepy online, grafiki i zajmujemy się profesjonalną obróbką wideo. Nasz zespół działa z zaangażowaniem, aby spełnić Twoje marzenia i zamienić je w rzeczywistość</p>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 pt-[50px] pb-[20px]'>
        <div>
          <img src={Logo} alt="Logo HKCode" className='w-[100px] ml-[-20px]'/>
        </div>
        <div className='md:text-right'>
          <p className='text-[18px] pt-2 font-normal text-[#333333]'>Made by: HKCODE.PL</p>
          <p className='text-[18px] pt-2 font-normal text-[#333333]'>Wszelkie prawa zastrzeżone &copy;</p>
        </div>
      </div>
    </div>
  )
}

export default Footer