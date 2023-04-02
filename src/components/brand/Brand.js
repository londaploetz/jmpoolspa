import React from 'react';
import './brand.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import pool1 from "../../assets/images/pool1.jpg"

const Brand = () => (
  <div className='brand'>
    <Container fluid className='banner-container'>
      <Row className="justify-content-sm-center-brand">
        <Col lg={5} sm={12}>
          <div className="pool_img_change"></div>

        </Col>

        <Col lg={7} sm={12} className='brand-service'>Weekly Pool Cleaning

          Renovation, Automation, Innovation
          Swimming Pool and Spa Specialists <br />
          Upgrade your swimming pool to a PDA remote with one call<br />
          19 years in the swimming pool and spa business. <br />
          we are currently a Licensed Texas Residential Installer Contractor and certified Jacuzzi A+ technician.
          A family owned and operated business.<br />
          If you are a commercial property please check out the current ADA requirements under our ADA tab.
          We are set up to install and provide customer support and make sure your property is compliant within the new regulations.
        </Col>
      </Row>

    </Container>
    <Container fluid className='footer'>
      <Row className="justify-content-sm-center-footer">
        <Col lg={6} sm={12} className='footer-tag'> Renovation <br />
          Automation <br />
          Innovation<br />
        </Col>
        <Col lg={6} sm={12} className='footer-tag'> Phone	210-549-7665<br />
        General Information & Service Requests	pooldoc@hotmail.com or jmpoolspa@outlook.com <br />
          <br />
      


        </Col>
      </Row>

    </Container>
  </div>
);
export default Brand;