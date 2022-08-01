import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Login from "./components/Login/Login"
import Register from './components/Login/Register';

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
      </Routes>
     
    </BrowserRouter>

    </div>
  );
}

export default App;
