import React from 'react'
import Footer from '../compontents/Footer'
import Navbar from '../compontents/Navbar'
import NoPage_Hero from '../compontents/NoPage_Hero'

function NoPage() {
  return (
    <div className='main-bg'>
      <Navbar />
      <NoPage_Hero />
      <Footer />
    </div>
  )
}

export default NoPage