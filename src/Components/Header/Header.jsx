import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImage from "../../Images/image-header.jpg";
import "./Header.css";

function Header() {
  return (
    <Container fluid className='m-0 p-0'>
      <Row>
        <Col className='12'>
          <img src={headerImage} className='header-img'></img>
          <div className='header-text'>
            <h1 className='header-title'>WE ARE CREATIVES</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
