import React from 'react'

import data from '../json/Articles.json'

function ArticlesContent() {

    
    return (
        <div className='w-full px-4'>
            <div className='max-w-[1240px] mx-auto py-4 px-4'>
                <div className='grid md:grid-cols-4 justify-center text-center gap-8 py-10'>
                {
                    data.map((item, index) => (                      
                            <div key={index} className='relative'>
                                <a href={item.article_href}>
                                    <div className='w-full border-2 hover:scale-105 duration-300 py-4 px-4 max-w-prose h-[100%]'>
                                        <p className='p-4 text-[22px]'>{item.article_name}</p>
                                        <p className='mb-8'>{item.article_snippet.length > 100 ? item.article_snippet.slice(0, 100) + '...' : item.article_snippet}</p>
                                        <a href={item.article_href} className='p-4 text-[18px] mt-[30px] absolute bottom-0 left-0 right-0'><span className='hover:scale-120 duration-300'>Dowiedz się więcej</span></a>
                                    </div>
                                </a>    
                            </div>         
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default ArticlesContent