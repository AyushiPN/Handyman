import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Otp.css';
import Limage from '../../assets/otp.png'
import Grid from '@mui/material/Grid';

function Otp() {

        const [formData, setFormData] = useState({
          phone: "",
          mail:""
        })
      
        const handleSubmit = (e) => {
          e.preventDefault()
          console.log(formData)
        
        }
  return (
    <div className='login container'>
    <form method='POST' className='container'>
    <img className='otpImg' src={Limage} alt="otp image"/>
    <h1 className='loginHeading'>VERIFICATION</h1>
    <input type="password" className='inputTxt' placeholder = 'Verify Phone' name='phone' value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}/>
    <Grid container>
        <Grid item md={8} xs={12}>
            <p className='createAcct'>Didn’t Recieve Code?
            <Link to='#' className='regLink'> Request Again</Link> 
            </p>
            
        </Grid>
        <Grid item md={4} xs={12}>
            <button type="submit" className='otp' onClick={handleSubmit}>Verify</button>
        </Grid>
        
    </Grid>
    <br />
    <input type="password" className='inputTxt' placeholder = 'Verify Email' name='mail' value={formData.mail} onChange={(e) => setFormData({...formData, mail: e.target.value})}/>
    <Grid container>
        <Grid item md={8} xs={12}>
            <p className='createAcct'>Didn’t Recieve Code?
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

export default Otp