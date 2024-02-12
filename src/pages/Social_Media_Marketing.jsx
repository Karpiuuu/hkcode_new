import React from 'react'
import Navbar from '../compontents/Navbar'
import Footer from '../compontents/Footer'
import SocialMedia_Offer_Hero from '../compontents/SocialMedia_Offer_Hero'
import SocialMedia_Offer_Details from '../compontents/SocialMedia_Offer_Details'

function Social_Media_Marketing() {
  return (
    <div className='bg-contact'>
      <Navbar />
      <SocialMedia_Offer_Hero />
      <SocialMedia_Offer_Details />
      <Footer />
    </div>
  )
}

export default Social_Media_Marketing