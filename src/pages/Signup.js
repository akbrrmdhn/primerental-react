import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { postRegister } from "../utils/https/auth";

export default class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  submitSignup = () => {
    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;

    const data = {
      name,
      email,
      password,
    };

    postRegister(data)
      .then((res) => {
        this.props.history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="signup">
        <Helmet>
          <title>Prime Rental - Signup</title>
        </Helmet>
        <main>
          <section className="hero-section-login">
            <Container className="hero-container">
              <Row className="hero-login">
                <Col md={5} className="login-logo">
                  <div className="explore">
                    <p>
                      Let's Explore
                      <br /> The World
                    </p>
                  </div>
                  <p className="donot-have-acc">Already have an account?</p>
                  <Link to="/login">
                    <button
                      className="form-btn signup-btn"
                      size="lg"
                    >Login</button>
                  </Link>
                </Col>
                <Col>
                  <div className="middle-border"></div>
                </Col>
                <Col md={5} className="login-form">
                  <form>
                    <input
                      type="name"
                      className="login-form"
                      placeholder="Name"
                      onChange={(e) => this.setState({ name: e.target.value })}
                    ></input>
                    <input
                      type="email"
                      className="login-form"
                      placeholder="Email"
                      onChange={(e) => this.setState({ email: e.target.value })}
                    ></input>
                    <input
                      type="password"
                      className="login-form"
                      placeholder="Password"
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                    ></input>
                  </form>
                  <button
                    
                    className="form-btn login-btn"
                    size="lg"
                    onClick={this.submitSignup}
                  >
                    Sign Up
                  </button>
                  <button
                    
                    className="form-btn login-google-btn"
                    size="lg"
                  >
                    Sign Up with Google
                  </button>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
