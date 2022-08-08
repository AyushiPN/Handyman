import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Register from './components/Login/Register';
import Otp from './components/Login/Otp';
import Forgot from './components/Login/Forgot';
import Reset from './components/Login/Reset';
import HandyReg from './components/Login/HandyReg';

function App() {
  return (
    <div className="container">
   
      
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />  
        <Route path="/login" element={<Login />} />       
        <Route path="/register" element={<Register />} />     
        <Route path="/otp" element={<Otp />} />   
        <Route path="/forgot" element={<Forgot />} /> 
        <Route path="/reset" element={<Reset />} /> 
        <Route path="/handymanreg" element={<HandyReg />} />
      </Routes>
     
    </BrowserRouter>

    </div>
  );
}

export default App;
