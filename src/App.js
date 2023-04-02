import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Gallery from "./components/pages/Gallery";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/Navbar"
import  Footer  from "./components/footer/Footer";


function App() {
  return ( 

  
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Gallery" element={<Gallery />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/" element={<Home />} />

      </Routes>

    </BrowserRouter>  
    

  );
}

export default App;

