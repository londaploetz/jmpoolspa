import React, {useState, useEffect, useRef} from "react";
import './contactus.css';
import Map from '../../assets/images/map.png'
import { Row, Col } from "react-bootstrap";
import Navbar from "../navbar/Navbar";

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = "pk.eyJ1IjoibG9uZGFwbG9ldHoiLCJhIjoiY2xmd3hyc29lMDdyazNlcDZieWw4cnh6eCJ9.Pl1Ibjru90-sPjXQJtkJuQ"
function ContactUs() {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-98.469361);
  const [lat, setLat] = useState(29.589109);
  const [zoom, setZoom] = useState(9);


  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div className="contactus" >

      <h1 className="contact-headder">Contact Us Today</h1>

      <Row className='contactus-row'>
        <Col className='nav-btns' lg={7} sm={12}>

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
        <Col lg={5} sm={12}>

          <div>
            <div ref={mapContainer} className="map-container" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ContactUs;