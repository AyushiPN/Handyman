import React from 'react'
import "./Header.css"
import Logo from "../assets/HandymaN.png";
import {  Link } from "react-router-dom";

function Header() {
  return (
    <div id="abc">
    <nav className='navbar'>
      <div className='logo'>
        <Link to="/"><img src = {Logo} alt="logo"/></Link>
        
      </div>
        <ul>
            <li className='headerItem'><Link to="/services">Services</Link></li>
            <li className='headerItem'><Link to="/about">About</Link></li>
            <li className='headerItem'><Link to="/login">Login</Link></li>
            <li className='headerItem'>
              <Link to="/booking">
                <div className='btn'>
                  <p style={{fontWeight : 800}}>Book Online</p>
                </div>
              </Link>
            </li>
        </ul>
    </nav>
</div>
  )
}

export default Header