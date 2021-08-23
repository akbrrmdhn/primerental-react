import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";

function Navi() {
  return (
    <header>
      <Navbar bg="myRed" variant="dark" sticky="top" expand="lg" collapseOnSelect>
          <Navbar.Brand>
            Logo
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="vehicles">Vehicle Type</Nav.Link>
              <Nav.Link href="histories">History</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
            </Nav>
            <Button variant="outline-warning">Login</Button>
            <Button variant="warning">Register</Button>
          </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Navi;
