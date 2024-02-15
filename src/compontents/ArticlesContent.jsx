import React from 'react'

import data from '../json/Articles.json'


function ArticlesContent() {

    
    return (
        <div className='w-full px-4'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid md:grid-cols-4 justify-center text-center'>
                    <div>
                        {data.map((item, index) => (
                            <div key={index}>
                                <div>
                                    <p>{item.article_name}</p>
                                    <a href={item.article_href}>Dowiedz się więcej</a>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>b</div>
                    <div>b</div>
                    <div>b</div>
                    <div>b</div>
                </div>
            </div>
        </div>
    )
}

export default ArticlesContent