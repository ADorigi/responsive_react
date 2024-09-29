// 

import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" /> 
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default Navbar;