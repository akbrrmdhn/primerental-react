import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
//import { Button } from "react-bootstrap";
import Footer from "../components/Footer";
import { forgotPassword } from "../utils/https/users";
import { withRouter } from "react-router";

class Forgot_Password extends Component {
  state = {
    email: '',
  }
  codeClick = () => {
    const email = this.state.email
    const body = {email}
    forgotPassword(body)
    .then((result) => {this.props.history.push('/codeinput', { email })})
    .catch((error) => console.log(error))
  }
  render() {
    return (
      <div className="forgot-password-page">
        <Helmet>
          <title>Prime Rental - Forgot Password</title>
        </Helmet>
        <main>
          <section className="hero-section-password">
            <div className="back-button-pass">
              
              <Link to="/login" style={{textDecoration: "none"}}>
              <p className="forgot-pass-heading"> {"<"} Back </p>
              </Link>
            </div>
            <div className="hero-container-password">
              <div>
                <p className="donot-worry-heading">Don't Worry, We Got Your Back!</p>
              </div>
              <div>
                <input type="email" className="forgot-password-form" placeholder="Enter your registered email..." onChange={(e) => this.setState({ email: e.target.value })} style={{width: "28em"}}>

                </input>
              </div>
              <div className="resend-password-link">
                <button className="btn resend-password-button" onClick={this.codeClick}>
                  Send Code
                </button>
              </div>
              <div>
                <p className="resend-password-detail">
                  You will receive a code to reset your password. <br />
                  If you haven't received any code, click <u>Resend Code</u>
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Forgot_Password);