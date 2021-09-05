import React, { Component } from "react";
import Footer from "../components/Footer";
import { Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  submitLogin = () => {
    const email = this.state.email;
    const password = this.state.password;

    const data = {
      email,
      password,
    };

    const url = "http://localhost:8000/auth/login";
    Axios.post(url, data)
      .then((res) => {
        // console.log(res.data)
        localStorage.setItem("userToken", String(res.data.result.token));
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </Col>
                <div className="col-md login-form">
                  <form>
                    <input
                      type="email"
                      className="login-form"
                      placeholder="Email"
                      onChange={(e) => this.setState({
                        email: e.target.value
                      })}
                    ></input>
                    <input
                      type="password"
                      className="login-form"
                      placeholder="Password"
                      onChange={(e) => this.setState({
                        password: e.target.value
                      })}
                    ></input>
                  </form>
                  <Link to="/forgotpassword">
                    <p>Forgot Password?</p>
                  </Link>
                  <Button
                    variant="primary"
                    className="form-btn login-btn"
                    size="lg"
                    onClick={this.submitLogin}
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
