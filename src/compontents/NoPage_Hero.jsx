import React from 'react'

function NoPage_Hero() {
  return (
    <div className='w-full px-4'>

        <div className='max-w-[1240px] grid justify-center mx-auto h-screen py-[10rem]'>
        <h1 className='uppercase text-[white] font-bold text-[79px] animate-zoom-in'>ta strona nie istnieje</h1>
        <a href="/home"><button className='flex mx-auto animate-zoom-in bg-transparent text-white border-[1px] text-[18px] rounded-full w-[400px] h-[82px] items-center justify-center hover:text-[black] hover:bg-[white]'>Powrót do strony głównej</button></a>
        </div>
        

    </div>
  )
}

export default NoPage_Hero