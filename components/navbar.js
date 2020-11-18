import React from "react";
import { Button, Navbar, Nav, Form, FormControl,NavDropdown } from "react-bootstrap";

function navbar() {
  return (
    <div>
      <Navbar>
        <Navbar.Brand href="#home">LOFOTO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="#features">HOME</Nav.Link>
            <NavDropdown title="IMAGE" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All picture</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Category</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Photo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Artwork</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="BLOG" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Picture / Photo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Design</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Photographer</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Alert</Nav.Link>
            <Nav.Link href="#deets">Contact</Nav.Link>
            <Nav.Link href="#deets">Sign-in</Nav.Link>
            <Nav.Link href="#memes">Log-in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default navbar;
