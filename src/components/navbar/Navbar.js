import React from 'react';
import './navbar.css';
import { Link, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => (

  <div className='navbar-container'>
    <Container>
      <Row className='buttons-nav'>
        <Col className='nav-btns' lg={3} sm={12}>  
        <Link
          to="/Home"
          id="home"
          className='link-btn'>
          Home
        </Link>   
        </Col>
        <Col className='nav-btns' lg={3} sm={12}> 
        <Link
          to="/About"
          id="about"
          className='link-btn'>
          About
        </Link>    
        </Col>
        <Col className='nav-btns' lg={3} sm={12}> 
        <Link
          to="/Contact"
          id="contact"
          className='link-btn'>
          Contact Us
        </Link>    
        </Col>
        <Col className='nav-btns' lg={3} sm={12}> 
        <Link
          to="/Gallery"
          id="gallery"
          className='link-btn'>
          Gallery
        </Link>   
        </Col>
      </Row>
    </Container>
  </div>

);
export default Navbar;