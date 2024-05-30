import React, { useState, useEffect } from 'react'
import Navbar from '../compontents/Navbar';
import Hero from '../compontents/Hero';
import Cards from '../compontents/Cards';
import Reviews from '../compontents/Reviews';
import Portfolio from '../compontents/Portfolio';
import Footer from '../compontents/Footer';
import LoadingComponent from '../compontents/LoadingComponent';
import BlogComponent from '../compontents/BlogComponent';
import SwiperPortfolio from '../compontents/SwiperPortfolio';

function Home() {

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const delay = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(delay);
  // }, []);

  

  return (
    <div className='main-bg'>
      <Navbar />
      <Hero />
      <Cards />
      <Reviews />
      <Portfolio />
      <SwiperPortfolio />
      <BlogComponent />
      
      <Footer />
      {/* {
        isLoading ? (
          <LoadingComponent />
        ) : (
          <div className='main-bg'>
            <Navbar />
            <Hero />
            <Cards />
            <Reviews />
            <Portfolio />
            <Footer />
          </div>
          
        )
      } */}
        
    </div>
  )
}

export default Home