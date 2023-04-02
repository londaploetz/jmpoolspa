import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { pool1, pool2, pool3, pool4, pool5, pool6, pool7 } from "./imports.js"
import Navbar from "../navbar/Navbar"
import pools from "../../pool.json"

function Gallery() {
  return (
    <div className="gallery">
      <Container className="gallery-container">
        <Row>
          {pools.data.map((pool) => (
            <GalleryCol
              poolImgNum={pool.img}
              altTag={pool.alt}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}


const GalleryCol = (props) => {

  return (
    
      <Col lg={4}><img className="gallery-img" src={require(`../../assets/galleryimgs/pool${props.poolImgNum}.jpg`)} alt={props.altTag} /></Col>
      

  )
}

export default Gallery;