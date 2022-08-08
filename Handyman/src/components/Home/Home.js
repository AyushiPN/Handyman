import React from 'react'
import Bookingimg from './Bookingimg.js'
import Jumbotron from './Jumbotron.js'
// import Header from '../Header.js'
// import Footer from '../Footer.js'
// import Scarousel from './Scarousel.js'
import './Home.css';
import Footer from '../Footer.js';
import Header from "../Header";

function Home() {
  return (
    <div className='home container-fluid'>
      <Header />
      <Jumbotron />
      {/* <Scarousel /> */}
      <Bookingimg />
      <Footer />
    </div>
    
  )
}

export default Home