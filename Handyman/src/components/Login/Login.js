import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Login.css';
import Limage from '../../assets/login.png'

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password:""
  });

  let name , value;
  const handleInputs = (e) => {
    e.preventDefault()
    name = e.target.name;
    value = e.target.value;
    console.log(formData)
    setFormData({...formData,[name]:value});
  
  }
  const PostData =async(e) =>
  {
    e.preventDefault();
    
    const {username ,password} =formData;
    const res = await fetch("/log",{
      method : "POST",
      headers : {
        "Content-Type" :"application/json"
      },
      body:JSON.stringify({
        username,password
      })
    });
    const data =await res.json();
    console.log("hey");
    console.log(res.status);
    if(res.status === 200 )
    {
      navigate("/");
    }
    else if(res.status === 404)
    {
      alert("Invalid login creadentital");
    }
  }
  return (
    <div className='login container'>
      <form method='POST' className='container'>
      <img className='imageLog' src={Limage} alt="login image"/>
      <h1 className='loginHeading'>LOGIN NOW</h1>
      <p className='loginSub'>Enter details below to continue</p>
      <input type="text" className='inputTxt' placeholder = 'Enter Username' name='username' value={formData.username} onChange={handleInputs}/>
      <br/>
      <input type="password" className='inputTxt' placeholder = 'Enter Password' name='password' value={formData.password} onChange={handleInputs}/>
       <p><Link to="/forgot" className='fogLink'>Forgot Password ?</Link></p>
        <button type="submit"  onClick= {PostData} className='loginBtn' >Login</button>
        <p className='createAcct'>Don't have an account! 
        <Link to='/register' className='regLink'>Register</Link> 
        </p>
      </form>
    </div>
  )
}

export default Login