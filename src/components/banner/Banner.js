import React from 'react';
import './banner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../assets/logo.png"
import Navbar from "../navbar/Navbar";

const Banner = () => {

  return (
    <div className='banner'>
      <Container fluid className='banner-container'>
        <Row  className="justify-content-sm-center">
          <Col lg={3} sm={8}>
            <img className='logo-img'
              src={Logo} />
          </Col>
          <Col lg={4} sm={12} className='poolandspa-tag'> JM POOL & SPA </Col>
          <Col lg={5} sm={12} className='tagline'>Weekly Pool Cleaning
            Full Service & Repairs <br/>
            Local, Family Owned & Operated <br/>
            210-549-7665</Col>
        </Row>
        
      </Container>
      <Navbar /> 
    </div>
  );
}

export default Banner;