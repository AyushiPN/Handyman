import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Forgot.css';
import Limage from '../../assets/lock.png'
import Grid from '@mui/material/Grid';

function Forgot() {
  const [formData, setFormData] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  
  }
  return (
    <div className='login container'>
      <form method='POST' className='container'>
      <img className='otpImg' src={Limage} alt="login image"/>
      <h1 className='loginHeading'>FORGOT PASSWORD?</h1>
      <p className='loginSub'>Enter the code sent to your registered email.</p>
      
      <input type="password" className='inputTxt' placeholder = 'Verify Email' name='pwd' value={formData} onChange={(e) => setFormData(e.target.value)}/>
      <Grid container>
        <Grid item md={8} xs={12}>
            <p className='createAcct'>Didn't Recieve Code?
            <Link to='#' className='regLink'> Request Again</Link> 
            </p>
            
        </Grid>
        <Grid item md={4} xs={12}>
            <button type="submit" className='otp' onClick={handleSubmit}>Verify</button>
        </Grid>
        
    </Grid>
      </form>
    </div>
  )
}

export default Forgot