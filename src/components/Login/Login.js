import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
import './Login.css';
import Limage from '../../assets/login.png'

function Login() {
  const [formData, setFormData] = useState({
    user: "",
    pwd:""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  
  }
  return (
    <div className='login container'>
      <form method='POST' className='container'>
      <img className='imageLog' src={Limage} alt="login image"/>
      <h1 className='loginHeading'>LOGIN NOW</h1>
      <p className='loginSub'>Enter details below to continue</p>
      <input type="text" className='inputTxt' placeholder = 'Enter Username' name='user' value={formData.user} onChange={(e) => setFormData({...formData, user: e.target.value})}/>
      <br />
      <input type="password" className='inputTxt' placeholder = 'Enter Password' name='pwd' value={formData.pwd} onChange={(e) => setFormData({...formData, pwd: e.target.value})}/>
       
        <button type="submit" className='loginBtn' onClick={handleSubmit}>Login</button>
        <p className='createAcct'>Don't have an account! 
        <Link to='/register' className='regLink'>Register</Link> 
        </p>
      </form>
    </div>
  )
}

export default Login