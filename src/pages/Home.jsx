import React from 'react'
import Navbar from '../compontents/Navbar';
import Hero from '../compontents/Hero';
import Cards from '../compontents/Cards';
import Reviews from '../compontents/Reviews';
import Portfolio from '../compontents/Portfolio';
import Footer from '../compontents/Footer';

function Home() {
  return (
    <div className='main-bg'>
        <Navbar />
        <Hero />
        <Cards />
        <Reviews />
        <Portfolio />
        <Footer />
    </div>
  )
}

export default Home