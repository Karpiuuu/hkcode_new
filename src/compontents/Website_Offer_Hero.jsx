import React from 'react'

function Website_Offer_Hero() {
    

  return (
    <div className='w-full h-screen md:mb-0 mb-[1000px]'>
        <div className='max-w-[1240px] mx-auto flex flex-col'>
            <div className='flex justify-center pt-[120px] pb-[50px]'>
                <h1 className='uppercase text-[white] font-bold text-[79px] animate-zoom-in'>pakiety cenowe</h1>
            </div>
            <div className='mx-auto grid md:grid-cols-3 gap-10 items-center'>
                <div className='glass-form w-full flex flex-col text-center leading-none py-10 px-10 animate-zoom-in'>
                    <h2 className='text-[80px] font-medium text-[white]'>One</h2>
                    <h1 className='text-[60px] font-normal text-white'>2000 zł</h1>
                    <p className='text-[20px] text-[white] font-normal'>(cena podlega negocjacji)</p>
                </div>
                <div className='glass-form w-full flex flex-col text-center leading-none py-10 px-10 animate-zoom-in'>
                    <h2 className='text-[80px] font-medium text-[white]'>Simple</h2>
                    <h1 className='text-[60px] font-normal text-white'>3500 zł</h1>
                    <p className='text-[20px] text-[white] font-normal'>(cena podlega negocjacji)</p>
                </div>
                <div className='glass-form w-full flex flex-col text-center leading-none py-10 px-10 animate-zoom-in'>
                    <h2 className='text-[80px] font-medium text-[white]'>Full</h2>
                    <h1 className='text-[60px] font-normal text-white'>6000 zł</h1>
                    <p className='text-[20px] text-[white] font-normal'>(cena podlega negocjacji)</p>
                </div>
            </div>
            <div className='flex justify-center py-[60px]'>
            <a href="#szczegoly"><button className='flex animate-zoom-in hover:scale-105 duration-300 bg-transparent text-white border-[1px] text-[18px] rounded-full w-[200px] h-[52px] items-center justify-center'>Sprawdź szczegóły</button></a>
            </div>
        </div>
      
    </div>
  )
}

export default Website_Offer_Hero