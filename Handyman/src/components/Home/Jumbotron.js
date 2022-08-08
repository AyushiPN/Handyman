import React from 'react'
import './Jumbotron.css'


function Jumbotron() {
  return (
    <div className="bg_image"> 
    
      <div className="text_box_jumbo">
        <h1 className='heading_jumbo'>A Full Range of Handyman Services</h1>
        <p className='para_jumbo'>We are a dedicated team with a commitment to our customer’s satisfaction whether it be a small repair or large remodelling job.</p>
        <button className='btn_jumbo'>Book Online</button>
      </div>
    </div>

  );
}

export default Jumbotron;