import React from 'react'
import './Bookingimg.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Bg from '../../assets/b.png'

function Bookingimg() {
  return (
<div className='booking container'>
<Box sx={{ width: '100%' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} md={4}>
        
          <div className="booking-img">
            <img src={Bg} alt ='booking img' />
          </div>
        
      </Grid>
      <Grid item xs={12} md={8}>
        
           <div className="booking-text">
             <h1 className='bookHead'>Booking Your Fixer <br/> is Easy & Fuss-Free</h1> <br/>
             <p className='bookContent'>
               Step 1 Check our rates in your area by confirming your zip code <br /> <br />
               Step 2 Tell us what you need fixed, and when you’d like it done. Our team will reach out if they need more information, in order to pair you with the best Fixer for the job <br /> <br />
               Step 3 Your Fixer arrives on time, ready to get to work! You’ll be amazed at everything they can do. When they’re all done, we’ll text you a link to pay online — you only pay once they’re finished.
               </p>
               <br />
               <button className="booking-button">Book Online</button>
             </div>
        
      </Grid>
      
      
    </Grid>
  </Box>
</div>

    // <div>
    //   <div className="booking container">
    //     <div className="booking-img">
      
    //     </div>
    //     <div className="booking-text">
    //       <h1>Booking Your Fixer <br/> is Easy & Fuss-Free</h1> <br/>
    //       <p>
    //         Step 1 Check our rates in your area by confirming your zip code <br /> <br />
    //         Step 2 Tell us what you need fixed, and when you’d like it done. Our team will reach out if they need more information, in order to pair you with the best Fixer for the job <br /> <br />
    //         Step 3 Your Fixer arrives on time, ready to get to work! You’ll be amazed at everything they can do. When they’re all done, we’ll text you a link to pay online — you only pay once they’re finished.
    //       </p>
    //       <br />
    //       <button className="booking-button">Book Online</button>
    //     </div>
    //   </div>
    // </div>

    
  )
}

export default Bookingimg