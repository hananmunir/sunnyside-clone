import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Middle.css";
import image1 from "../../Images/image-transform.jpg";
import image2 from "../../Images/image-stand-out.jpg";
import image3 from "../../Images/image-graphic-design.jpg";
import image4 from "../../Images/image-photography.jpg";
export default function Middle() {
  return (
    <section>
      <Container fluid className='m-0 p-0 middle-section-container '>
        <Row className='card-container'>
          <Col sm='12' lg='6' className='p-0'>
            <div className='card-text'>
              <h1 className='card-title'>Transform Your Brand</h1>
              <span className='card-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                sequi sit repellendus itaque quod necessitatibus ullam deserunt
                optio cumque. Sed recusandae atque vitae perferendis blanditiis
                provident perspiciatis? Iste, quas aspernatur.
              </span>
              <a href='' className='card-link'>
                LEARN MORE
              </a>
            </div>
          </Col>
          <Col sm='12' lg='6' className='p-0 card-image-container'>
            <img className='card-image' src={image1}></img>
          </Col>
        </Row>
        <Row className='card-container'>
          <Col sm='12' lg='6' className='p-0 card-image-container'>
            <img className='card-image' src={image2}></img>
          </Col>
          <Col lg='6' className='p-0'>
            <div className='card-text'>
              <h1 className='card-title'>Stand Out to the right Audience</h1>
              <span className='card-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                sequi sit repellendus itaque quod necessitatibus ullam deserunt
                optio cumque. Sed recusandae atque vitae perferendis blanditiis
                provident perspiciatis? Iste, quas aspernatur.
              </span>
              <a href='' className='card-link'>
                LEARN MORE
              </a>
            </div>
          </Col>
        </Row>
        <Row className='card-container'>
          <Col
            sm='12'
            lg='6'
            className='p-0 card-image-container'
            style={{ position: "relative " }}
          >
            <img src={image3} className='card-image ' alt='' srcset='' />
            <div className='image-text' style={{ color: "hsl(167, 40%, 24%)" }}>
              <h1 className='image-title-text'>Graphic Design</h1>
              <span className='image-description-text'>
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </span>
            </div>
          </Col>
          <Col
            sm='12'
            lg='6'
            className='p-0 card-image-container'
            style={{ position: "relative " }}
          >
            <img
              src={image4}
              className='card-image text-holder-image'
              alt=''
              srcset=''
            />
            <div className='image-text' style={{ color: "hsl(198, 62%, 26%)" }}>
              <h1 className='image-title-text'>Photography</h1>
              <span className='image-description-text'>
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
