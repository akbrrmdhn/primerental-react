import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Axios from 'axios';


export default class Signup extends Component {
  state = {
    name:"",
    email:"",
    password:"",
  }
  submitSignup = () => {
    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;

    const data = {
      name, email, password,
    }

    const url = "http://localhost:8000/auth/register";
    Axios.post(url, data)
    .then((res) => {
      // console.log(res.data);
      this.props.history.push("/login");
    })
    .catch((error) => {
      console.log(error);
    });
  }
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
                      onChange={(e) => this.setState({name: e.target.value})}
                    ></input>
                    <input
                      type="email"
                      className="login-form"
                      placeholder="Email"
                      onChange={(e) => this.setState({email: e.target.value})}
                    ></input>
                    <input
                      type="password"
                      className="login-form"
                      placeholder="Password"
                      onChange={(e) => this.setState({password: e.target.value})}
                    ></input>
                  </form>
                  <Button
                    variant="primary"
                    className="form-btn login-btn"
                    size="lg"
                    onClick={this.submitSignup}
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
