import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";
export default function navbar() {
  return (
    <Navbar
      className='test'
      style={{ backgroundColor: "#3ebfff" }}
      variant='dark'
      expand='lg'
    >
      <Container>
        <Navbar.Brand href='#home'>Sunny Side</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='navbar-left'>
            <Nav.Link href='#home' className='me-3'>
              About
            </Nav.Link>
            <Nav.Link href='#link' className='me-3'>
              Services
            </Nav.Link>
            <Nav.Link href='#link' className='me-3'>
              Projects
            </Nav.Link>
            <Nav.Link
              href='#link'
              style={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "20px",
                padding: "0 .8rem ",
                alignItems: "center",
                display: "flex",
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
