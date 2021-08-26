import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Navi() {
  //const isAuthenticated = false;
  return (
    <header>
      <Navbar
        className="navbar-class"
        bg="light"
        sticky="top"
        expand="lg"
        collapseOnSelect
      >
        <Logo />

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="nav-links ms-auto">
            <Nav.Link><Link to="/">
              Home</Link></Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/vehicle_type">Vehicle Type</Link>{" "}
            </Nav.Link>
            <Nav.Link href="histories">History</Nav.Link>
            <Nav.Link href="about">
              <Link to="/profile">
              About
              </Link>
            </Nav.Link>
          </Nav>
          <Button variant="outline-warning" className="navbutton btn-login-nav">
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="warning">
            <Link to="/signup" className="navbutton btn-signup-nav">
              Register
            </Link>
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Navi;
