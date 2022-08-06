import React, { useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import { useForm} from 'react-hook-form'


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
      <form action='../../reg' className='container' method='post'>
        <h1 className=' regHeading'>Register</h1>
        <p className='loginSub'>Enter details below to continue</p>
        <input type="text" className='inputTxt' placeholder = 'Enter Name' name="name"  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
        <br />
        <input type="email" className='inputTxt' placeholder = 'Enter Email' name='email' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
        <br />
        <input type="text" className='inputTxt' placeholder = 'Enter Phone Number' name='number' value={formData.number} onChange={(e) => setFormData({...formData, number: e.target.value})}/>
        <br />
        <input type="text" className='inputTxt' placeholder = 'Enter Username' name='username' value={formData.user} onChange={(e) => setFormData({...formData, user: e.target.value})}/>
        <br />
        <input type="password" className='inputTxt' placeholder = 'Enter Password' name='password' value={formData.pwd} onChange={(e) => setFormData({...formData, pwd: e.target.value})}/>
        
          <button type="submit"  className='loginBtn'>Register</button>
          <p className='createAcct'>Already registered  
          <Link to='/login' className='regLink'>Login</Link> 
          </p>
      </form>
  </div>
  )
}

export default Register