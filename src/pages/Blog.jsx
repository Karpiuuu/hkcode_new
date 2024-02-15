import React from 'react'
import Navbar from '../compontents/Navbar'
import Footer from '../compontents/Footer'
import Articles from '../compontents/Articles'


function Blog() {
  return (
    <div className='bg-main'>
        <Navbar />
        <Articles />
        <Footer />
    </div>
  )
}

export default Blog