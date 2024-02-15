import React from 'react'
import Navbar from '../compontents/Navbar'
import Footer from '../compontents/Footer'
import Website_Offer_Hero from '../compontents/Website_Offer_Hero'
import Website_Offer_Details from '../compontents/Website_Offer_Details'

function Webiste_Offer() {
  return (
    <div className='bg-contact'>
      <Navbar />
      <Website_Offer_Hero />
      <Website_Offer_Details />
      <Footer />
    </div>
  )
}

export default Webiste_Offer