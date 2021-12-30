import React from "react";
import { Navbar, Container, Nav, NavDropdown, Stack } from "react-bootstrap";


export default function TopNav() {
  return (
    <Navbar
      className="shadow mb-4"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">Smart Eco Mode</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Download" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Datasheet</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Manual</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Brochure</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">PT MAP</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
