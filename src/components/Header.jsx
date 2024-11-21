import React from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "./image";

import "../styles.css";

const Head = () => {
  return (
    <header>
      <Navbar>
        <NavbarBrand>
          <Image src={"images/apple-touch-icon.png"} />
        </NavbarBrand>
        <Container className="position-absolute top-50 end-0 translate-middle-y">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nlink" href="/">
                Accueil
              </Nav.Link>
              <Nav.Link className="nlink" href="/service">
                Services
              </Nav.Link>
              <Nav.Link className="nlink" href="/realisation">
                Réalisations
              </Nav.Link>
              <Nav.Link className="nlink" href="/blog">
                Blog
              </Nav.Link>
              <Nav.Link className="nlink" href="/contact">
                Contact
              </Nav.Link>
              <Nav.Link className="nlink" href="/mention">
                Mentions légales
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Head;
