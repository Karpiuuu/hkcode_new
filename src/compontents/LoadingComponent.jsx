import React from 'react'

function LoadingComponent() {
  return (
    <div className='w-full main-bg'>
        <div className='max-w-[1240px] mx-auto h-screen flex flex-col justify-center py-[10rem] text-center'>
            <div className='loader mx-auto'></div>
        </div>
    </div>
  )
}

export default LoadingComponent