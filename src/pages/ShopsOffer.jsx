import React from 'react'
import Shops_Offer_Hero from '../compontents/Shops_Offer_Hero'
import Navbar from '../compontents/Navbar'
import Footer from '../compontents/Footer'
import Shops_Offer_Details from '../compontents/Shops_Offer_Details'
import CheckOfferHero from '../compontents/CheckOfferHero'

function ShopsOffer() {
  return (
    <div className='bg-contact'>
      <Navbar />
      <Shops_Offer_Hero />
      <Shops_Offer_Details />
      <CheckOfferHero />
      <Footer />
    </div>
  )
}

export default ShopsOffer