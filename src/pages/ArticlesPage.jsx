import React from 'react'
import Footer from '../compontents/Footer';
import ArticlesHero from '../compontents/ArticlesHero';
import Navbar from '../compontents/Navbar';
import ArticlesContent from '../compontents/ArticlesContent';

function ArticlesPage() {
  return (
    <div className=''>
        <Navbar />
        <ArticlesHero />
        <ArticlesContent />
        <Footer />
    </div>
  )
}

export default ArticlesPage