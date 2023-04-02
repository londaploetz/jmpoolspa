import React from "react";
import Banner from "../banner/Banner";
import Carousel from 'react-bootstrap/Carousel';
import {pool1, pool2, pool3} from "./imports.js"
import Navbar from "../navbar/Navbar";

function About() {
  return (
    <div className="about" >
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pool1}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pool2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pool3}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
    <p className="about-p">
        JMpoolspa is a company 19 years in the making.
        We specialize in swimming pool/Spa repairs, upgrades, automation and custom building.
        We are currently a certified Texas Residential Installer Contractor and Jacuzzi A+ certified in spa repairs.
        Jorge C.E.O. has been in the swimming pool and spa business since 1993.
        He is president of the San Antonio,Tx.
        IPSSA Independent Pool Spa Service Association and sat on the Board of Directors Region 9 Texas.
        ” i am excited about this new company specializing in customer satisfaction and superior performance.”
        we are up to date in all the industries classes and equipment.

        Custom swimming pool and Spa building is our newest venture.
        We have spent 3 yrs interviewing sub-contractors, plumbers, licenced electricians and with my brother Joe C.F.O.
        coming on board bringing 10 yrs of construction experience, has us ready to tackle the best swimming pool, spa, and backyard escapes.
        </p>
        </div>
        );
}

        export default About;