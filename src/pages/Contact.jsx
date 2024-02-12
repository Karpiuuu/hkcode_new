import React from 'react'
import Footer from '../compontents/Footer';
import Form_Hero from '../compontents/Form_Hero';
import Navbar from '../compontents/Navbar';

function Contact() {
  return (
    <div className='bg-contact'>
      <Navbar />
      <Form_Hero />
      <Footer />
    </div>
  )
}

export default Contact