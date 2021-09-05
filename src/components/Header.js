import React from "react";
import { Nav, Navbar, Button, Image } from "react-bootstrap";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import email from "../assets/images/email.png";
import samantha from "../assets/images/samantha.png";

function Header(props) {
  //const isAuthenticated = false;
  const token = localStorage.getItem("userToken");
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
        <Navbar.Collapse className="nav-collapse">
          <Nav className="nav-links ms-auto">
            <Nav.Link className="navlink">
              <Link to="/" className="nav-link-to" onClick={console.log(props.isAuthenticated)}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="navlink">
              <Link to="/vehicletype" className="nav-link-to">
                Vehicle Type
              </Link>{" "}
            </Nav.Link>
            <Nav.Link className="navlink">
              <Link to="/history" className="nav-link-to">
                History
              </Link>
            </Nav.Link>
            <Nav.Link className="navlink">
              <Link to="/profile" className="nav-link-to">
                About
              </Link>
            </Nav.Link>
          </Nav>
          {/* <Link to="/chat" className="navbutton btn-chat-nav">
            <Image className="btn-chat-nav-icon" src={email} />
          </Link>
          <Link to="/profile" className="navbutton btn-profile-nav">
            <Image
              className="btn-profile-nav-icon"
              src={samantha}
              roundedCircle
            />
          </Link> */}
          {token ? (
            <Link to="/chat" className="navbutton btn-chat-nav">
              <Image className="btn-chat-nav-icon" src={email} />
            </Link>
          ) : (
            <Link to="/login" className="navbutton btn-login-nav">
              <Button variant="outline-warning" className="btn-login-nav">
                Login
              </Button>
            </Link>
          )}
          {token ? (
            <Link to="/profile" className="navbutton btn-profile-nav">
              <Image
                className="btn-profile-nav-icon"
                src={samantha}
                roundedCircle
              />
            </Link>
          ) : (
            <Link to="/signup" className="navbutton btn-signup-nav">
              <Button variant="warning">Register</Button>
            </Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
