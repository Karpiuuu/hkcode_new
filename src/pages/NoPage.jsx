import React from 'react'
import Footer from '../compontents/Footer'
import Navbar from '../compontents/Navbar'

function NoPage() {
  return (
    <div className='main-bg'>
      <Navbar />
      <div className='h-screen bg-red-50'></div>
      <Footer />
    </div>
  )
}

export default NoPage