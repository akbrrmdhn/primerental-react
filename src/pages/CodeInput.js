import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
//import { Button } from "react-bootstrap";
import Footer from "../components/Footer";
import { checkCode } from "../utils/https/users";
import { withRouter } from "react-router";


class CodeInput extends Component {
  state = {
    email: '',
    code: '',
  }
  codeClick = () => {
    const email = this.props.location.state.email;
    const code = this.state.code;
    const body = {email, code}
    checkCode(body).then((result) => this.props.history.push('/resetpassword', { email, code })).catch((error) => console.log(error))
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
                <p className="donot-worry-heading">Input Your Code!</p>
              </div>
              <div>
                <input type="text" className="forgot-password-form" placeholder="Enter your code..." onChange={(e) => this.setState({ code: e.target.value })} style={{width: "28em"}}>

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

export default withRouter(CodeInput);