import React from "react";
import { Nav, Navbar, Button, Image, NavDropdown } from "react-bootstrap";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import email from "../assets/images/email.png";
import person_img from '../assets/images/person-icon.png';
import { loggedInAction, logoutAction } from "../redux/actionCreators/auth";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
const Header = props => {
  const logoutHandler = () => {
    const userToken = localStorage.getItem("token");
    console.log("token: ", userToken);
    props.signOut(userToken);
    props.history.push("/login");
  }
  const authState = useSelector(reduxState => reduxState.auth)
  const url = process.env.REACT_APP_BASE_URL;
  return (
    <header>
      <Navbar
        className="navbar-class"
        bg="light"
        sticky="top"
        expand="lg"
        collapseOnSelect
      >
        <Link to="/" className="logo-header">
          <Logo />
        </Link>

        <Navbar.Toggle />
        <Navbar.Collapse className="nav-collapse">
          <Nav className="nav-links ms-auto">
            <Nav.Link className="navlink">
              <Link to="/" className="nav-link-to">
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
          {authState.isLogin ? (
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
          {authState.isLogin ? (
            <NavDropdown className="btn-profile-nav-icon" title={
              <div>
                <Image className="btn-profile-nav-icon" src={`${authState.authInfo.image}` ? `${url}${authState.authInfo.image}` : person_img} roundedCircle />
              </div>
            }>
              <NavDropdown.Item>
                <Link to="/profile">
                <button className="btn">Edit Profile</button>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/">
                  <button className="btn">Help</button>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <button className="btn" onClick={logoutHandler}>Logout</button>
              </NavDropdown.Item>
            </NavDropdown>
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

const mapStateToProps = ({auth}) => {
  return {
    auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signedIn: () => {
      dispatch(loggedInAction());
    },
    signOut: (token) => {
      dispatch(logoutAction(token));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
