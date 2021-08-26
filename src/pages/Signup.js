import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default class Signup extends Component {
  render() {
    return (
      <div className="signup">
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
                  <p>Already have an account?</p>
                  <Button
                    variant="primary"
                    className="form-btn signup-btn"
                    size="lg"
                  >
                    <Link to="/login">
                    Login
                    </Link>
                  </Button>
                </Col>
                <div className="col-md login-form">
                  <form>
                  <input
                      type="name"
                      className="login-form"
                      placeholder="Name"
                    ></input>
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
                    Sign Up
                  </Button>
                  <Button
                    variant="primary"
                    className="form-btn login-google-btn"
                    size="lg"
                  >
                    Sign Up with Google
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
