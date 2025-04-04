import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom"; 
import { NavbarContainer } from "./styles";
import logo from "../../../assets/images/logo.png";

const SiteNavbar = () => {
  return (
    <NavbarContainer>
      <Navbar expand="lg">
        <Container className="container">
          <Navbar.Brand as={Link} to="/">  
            <img src={logo} alt="Site Logo" />
          </Navbar.Brand>
          <Navbar.Toggle className="navbar-toggle" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-content ms-auto">
              <NavLink exact to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink>
              <NavLink to="/contacts" className={({ isActive }) => isActive ? "active" : ""}>Contacts</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavbarContainer>
  );
};

export default SiteNavbar;
