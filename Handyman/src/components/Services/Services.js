import React from 'react'
import Header from '../Header';
import Footer from '../Footer'
import './Services.css'
import Jumbo from './ServiceJumbo';
import Category from './Category'
function Services() {
  return (
    <div className='services '>
      
        <Header />
        <Jumbo />   
        <Category /> 
        <Footer />
   
    </div>
  )
}

export default Services