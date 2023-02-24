import React from 'react';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => (
    <div className='navbar-container'>
  <Container>
    <Row> 
      <Col> Home  </Col>
      <Col> About  </Col>
      <Col> Contact Us  </Col>
      <Col> Gallery  </Col>
    </Row>
  </Container>
    </div>
);
export default Navbar;