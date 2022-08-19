import React, { useState } from 'react'
import './Login.css'
import {Link,useNavigate} from 'react-router-dom'
import Grid from '@mui/material/Grid';



function  Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    username: "",
    password:""
  });
  let name , value;

  const handleInputs =(e) =>
  {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setFormData({...formData,[name]:value});
  }

  const PostData = async (e) => {
    e.preventDefault();
    
    const {name ,email,number,username,password} = formData;
    console.log(name);
    const res= await fetch("/reg",{
      method : "POST",
      headers : {
        "Content-Type" :"application/json"
      },
      body:JSON.stringify({
        name ,email,number,username,password
      })
    });

    const data =await res.json();
    
    if(res.status === 422 || !data)
    {
      alert("Already Email is Register");
    }
    else if(res.status === 423 )
    {
      alert("UserName is Taken");
    }
    else if(res.status === 201)
    {
      navigate("/otp");
    }
    

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
        <input type="text" className='inputTxt' placeholder = 'Enter Name' name="name" value={formData.name} onChange={handleInputs} />
        <br />
        <input type="email" className='inputTxt' placeholder = 'Enter Email' name='email' value={formData.email} onChange={handleInputs}/>
        <br />
        <input type="text" className='inputTxt' placeholder = 'Enter Phone Number' name='number' value={formData.number} onChange={handleInputs}/>
        <br />
        <input type="text" className='inputTxt' placeholder = 'Enter Username' name='username' value={formData.username} onChange={handleInputs}/>
        <br />
        <input type="password" className='inputTxt' placeholder = 'Enter Password' name='password' value={formData.password} onChange={handleInputs}/>
        
          <button type="submit" onClick={PostData} className='loginBtn'>Register</button>
          <p className='createAcct'>Already registered  
          <Link to='/login' className='regLink'>Login</Link> 
          </p>
      </form>
  </div>
  )
}

export default Register
