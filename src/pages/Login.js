import React, { Component } from "react";
import Footer from "../components/Footer";
import { Button, Col, Row, Container } from "react-bootstrap";
//import Axios from "axios";
class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  // email = this.state.email;
  // submitLogin = () => {
  //   const url = "localhost:8000/auth/login";
  //   const data = {
  //     email: email,
  //     password: password,
  //   };
  //   Axios.post(url, data)
  //   .then(result)
  //   .catch()
  // }
  render() {
    return (
      <div className="login-page">
        <main>
          <section className="hero-section-login">
            <Container className="hero-container">
              <Row className="hero-login">
                <Col className="col-md login-logo">
                  <div className="explore">
                    <p>
                      Let's Explore
                      <br /> The World
                    </p>
                  </div>
                  <p>Don't have an account?</p>
                  <Button
                    variant="primary"
                    className="form-btn signup-btn"
                    size="lg"
                  >
                    Sign Up
                  </Button>
                </Col>
                <div className="col-md login-form">
                  <p>asdfd</p>
                  <form>
                    <input
                      type="email"
                      className="login-form"
                      placeholder="Email"
                    ></input>
                    <input
                      type="password"
                      className="login-form"
                      placeholder="Password"
                    ></input>
                  </form>
                  <Button
                    variant="primary"
                    className="form-btn login-btn"
                    size="lg"
                  >
                    Login
                  </Button>
                  <Button
                    variant="primary"
                    className="form-btn login-google-btn"
                    size="lg"
                  >
                    Login with Google
                  </Button>
                </div>
              </Row>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Login;
