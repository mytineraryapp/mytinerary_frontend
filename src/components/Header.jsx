import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import "../App.css";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary navbar"
      fixed="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">MyTinerary</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/trips">
              Trips
            </Nav.Link>
            <NavDropdown title="More" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#">Explore</NavDropdown.Item>
              <NavDropdown.Item href="#">About Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/register">
              Sign Up
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
