import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Bottom.css";
import image1 from "../../Images/image-gallery-milkbottles.jpg";
import image2 from "../../Images/image-gallery-orange.jpg";
import image3 from "../../Images/image-gallery-cone.jpg";
import image4 from "../../Images/image-gallery-sugarcubes.jpg";
function Bottom() {
  return (
    <Container fluid className='m-0 p-0'>
      <Row>
        <Col sm lg='3' className='m-0 p-0'>
          <img src={image1} alt='' className='bottom-section-image' />
        </Col>
        <Col sm lg='3' className='m-0 p-0'>
          <img src={image2} alt='' className='bottom-section-image' />
        </Col>
        <Col sm lg='3' className='m-0 p-0'>
          <img src={image3} alt='' className='bottom-section-image' />
        </Col>
        <Col sm lg='3' className='m-0 p-0'>
          <img src={image4} alt='' className='bottom-section-image' />
        </Col>
      </Row>
    </Container>
  );
}

export default Bottom;
