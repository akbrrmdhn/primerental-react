import React, { Component } from "react";
import Footer from "../components/Footer";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { postLogin } from "../utils/https/auth";
// import { loginAction } from "../redux/actionCreators/auth";
// import { connect } from "react-redux";
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

    postLogin(data)
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
        <Helmet>
          <title>Prime Rental - Login</title>
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
                  <p className="donot-have-acc">Don't have an account?</p>
                  <Link to="/signup">
                  <button
                    className="form-btn signup-btn"
                    size="lg"
                  >
                    Sign Up
                  </button>
                  </Link>
                  
                </Col>
                <Col md={2}>
                  <div className="middle-border">

                  </div>
                </Col>
                <Col md={5} className="login-form">
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
                    <p className="forgot-password-link">Forgot Password?</p>
                  </Link>
                  <button
                    className="form-btn login-btn"
                    size="lg"
                    onClick={this.submitLogin}
                  >
                    Login
                  </button>
                  <button
                    className="form-btn login-google-btn"
                    size="lg"
                  >
                    Login with Google
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

// const mapStateToProps = ({ auth }) => {
//   return {
//     auth,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onLogin: (body) => {
//       dispatch(loginAction(body));
//     }
//   }
// }

export default Login;
