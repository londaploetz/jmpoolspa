import React from 'react';
import './banner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../assets/logo.png"
const Banner = () => {

  return (
    <div className='banner'>
      <Container>
        <Row className="justify-content-md-left">
          <Col >
            <img className='logo-img'
              src={Logo} />
          </Col>
          <Col >sm=8</Col>
          <Col className='tagline'>Weekly Pool Cleaning
            Full Service & Repairs
            Local, Family Owned & Operated
            210-549-7665</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;