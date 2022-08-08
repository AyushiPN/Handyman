import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Login.css';
import Limage from '../../assets/lock.png'

function Reset() {
    const [formData, setFormData] = useState({
        pwd: "",
        cpwd:""
      })
    
      const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
      
      }
      return (
        <div className='login container'>
          <form method='POST' className='container'>
          <img className='otpImg' src={Limage} alt="login image"/>
          <h1 className='loginHeading'>RESET PASSWORD?</h1>
          
          <input type="password" className='inputTxt' placeholder = 'New Password' name='pwd' value={formData.pwd} onChange={(e) => setFormData({...formData, pwd: e.target.value})}/>
          <br />
          <input type="password" className='inputTxt' placeholder = 'Confirm New Password' name='cpwd' value={formData.cpwd} onChange={(e) => setFormData({...formData, cpwd: e.target.value})}/>
           
            <button type="submit" className='loginBtn' onClick={handleSubmit}>Login</button>
            <p className='createAcct'>Don't have an account! 
            <Link to='/register' className='regLink'>Register</Link> 
            </p>
          </form>
        </div>
      )
}

export default Reset