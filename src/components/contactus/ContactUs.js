import React from "react"; 
import './contactus.css';
import Map from '../../assets/images/map.png'
import { Row, Col} from "react-bootstrap";
import Navbar from "../navbar/Navbar";
 
function ContactUs() {
  return (
    <div className="contactus" >
     
      <h1 className="contact-headder">Contact Us Today</h1>  
      
<Row className='contactus-row'>
        <Col className='nav-btns' lg={6} sm={12}>  
      
          <div id="contactForm">
            <form action="mailto:lploetz@hotmail.com" method="post">
              <label for="name">Name: </label>
              <input type="text" name="name" placeholder="Enter your name" required />
              <label for="email">Email: </label>
              <input type="email" placeholder="email@example.com" required />
              <label for="message">Message</label>
              <textarea rows="10" cols="33" placeholder="Please enter your message..." required name="message"></textarea>
              <input className="send-btn" type="submit" value="Send" />
            </form> 
        
      </div>  
      </Col>
      <Col lg={6} sm={12}>
      <img 
          className="map"
          src={Map}
          />
         
          </Col>
          </Row>
    </div>
  );
}

export default ContactUs;