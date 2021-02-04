import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

const Navi = (pdf) => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">STEPHEN TYLER</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link
          href="#home"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Home
        </Nav.Link>
        <Nav.Link
          href="#skills-section"
          activeClass="active"
          to={"skills-section"}
          offset={-40}
          spy={true}
          smooth={true}
          duration={1000}
        >
          Skills
        </Nav.Link>
        <Nav.Link
          href="#projects-section"
          activeClass="active"
          to={"projects-section"}
          offset={-40}
          spy={true}
          smooth={true}
          duration={1000}
        >
          Projects
        </Nav.Link>
        <Nav.Link
          href="#about-section"
          activeClass="active"
          to={"about-section"}
          offset={-40}
          spy={true}
          smooth={true}
          duration={1000}
        >
          About
        </Nav.Link>
        <Nav.Link href={require("../../docs/Stephen_Tyler_Resume.PDF")}>
          Resume
        </Nav.Link>
        <Nav.Link
          href="https://github.com/leggosteveo"
          className="fa fa-github lh profile-Nav."
          target="_blank"
        ></Nav.Link>
        <Nav.Link
          href="https://www.linkedin.com/in/stephen-tyler-2674b745/"
          className="fa fa-linkedin lh profile-link"
          target="_blank"
        ></Nav.Link>
        <Nav.Link
          href="mailto:sjtyler2@mail.usf.edu"
          className="fa fa-envelope lh profile-link"
          target="_blank"
        ></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navi;
