import React, { Component } from "react";
import Footer from "../components/Footer";
import { Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
//import Axios from "axios";
class Login extends Component {
  // state  = {
  //   email:"",
  //   password: "",
  // }
  render() {
    // const email = this.state.email;
    // const password = this.state.password;
    // const submitLogin = () => {
    //   const form = new URLSearchParams();
    //   form.append("email", email);
    //   form.append("password", password);
    //   const url = "localhost:8000/auth/login";
    //   Axios.post(url, form)
    //   .then((res) => {
    //     localStorage.setItem("userToken", String(res.data.result.token));
    //     this.props.history.push("/");
    //   })
    //   .catch()
    // }
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
                    <Link to="/signup">
                    Sign Up
                    </Link>
                  </Button>
                </Col>
                <div className="col-md login-form">
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
                  <Link to="/forgot_password">
                  <p>Forgot Password?</p>
                  </Link>
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
                    // onSubmit={this.submitLogin()}
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
