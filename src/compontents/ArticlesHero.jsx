import React from 'react'

function ArticlesHero() {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='flex flex-col justify-center gap-8'>
                <div className='mx-auto text-center'>
                    <h2 className='text-[40px] text-white'>Wybierz temat artykułu</h2>
                    <div className='flex justify-center gap-8 py-4'>
                        <button className='flex hover:scale-105 duration-300 bg-white text-black text-[18px] rounded-full w-[200px] h-[52px] items-center justify-center'>Agencja Marketingowa</button>

                        <button className='flex hover:scale-105 duration-300 bg-white text-black text-[18px] rounded-full w-[200px] h-[52px] items-center justify-center'>Strony internetowe</button>
                    </div> 
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ArticlesHero