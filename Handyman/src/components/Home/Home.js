import React from 'react'
import Bookingimg from './Bookingimg.js'
import Jumbotron from './Jumbotron.js'
import Header from '../Header.js'
import Footer from '../Footer.js'
import Scarousel from './Scarousel.js'

function Home() {
  return (
    <div>
      <Header />
      <Jumbotron />
      {/* <Scarousel /> */}
      <Bookingimg />
      {/* <Footer /> */}
    </div>
    
  )
}

export default Home