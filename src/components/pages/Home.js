import React from "react"; 
import Banner from "../banner/Banner";
import "./pages.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Navbar from "../navbar/Navbar";
import Brand from "../brand/Brand";
import Footer from "../footer/Footer";

function Home() {
  return (

    <div className="home-background" >

    <Banner/>
    {/* <Navbar /> */}
    <Brand />
    <Footer />
    </div>
  );
}

export default Home;