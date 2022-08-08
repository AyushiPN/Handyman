import React, { useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import Grid from '@mui/material/Grid';

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    user: "",
    pwd:""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  
  }

  return (
    
    <div className='login container'>
      {/* <img className='imageLog' src={Limage} alt="login image"/> */}
      <form className='container' method='POST'>
        <Grid container>
          <Grid md={6} sm={12} xs={12}>
            <h1 className=' regHeading'>Register</h1>
          </Grid>
          <Grid md={6} sm={12} xs={12}>
            <Link to="/handymanreg" className='handyReg'>Are you a Handyman?</Link>
          </Grid>
        </Grid>
  
        <p className='loginSub'>Enter details below to continue</p>
        <input type="text" className='inputTxt' placeholder = 'Enter Name' name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
        <br />
        <input type="email" className='inputTxt' placeholder = 'Enter Email' name='email' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
        <br />
        <input type="text" className='inputTxt' placeholder = 'Enter Phone Number' name='number' value={formData.number} onChange={(e) => setFormData({...formData, number: e.target.value})}/>
        <br />
        <input type="text" className='inputTxt' placeholder = 'Enter Username' name='user' value={formData.user} onChange={(e) => setFormData({...formData, user: e.target.value})}/>
        <br />
        <input type="password" className='inputTxt' placeholder = 'Enter Password' name='pwd' value={formData.pwd} onChange={(e) => setFormData({...formData, pwd: e.target.value})}/>
        
          <button type="submit" onClick={handleSubmit} className='loginBtn'>Register</button>
          <p className='createAcct'>Already registered  
          <Link to='/login' className='regLink'>Login</Link> 
          </p>
      </form>
  </div>
  )
}

export default Register
