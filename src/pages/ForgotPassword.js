import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
//import { Button } from "react-bootstrap";
import Footer from "../components/Footer";

export default class Forgot_Password extends Component {
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
                <input type="email" className="forgot-password-form" placeholder="Enter your registered email..." style={{width: "28em"}}>

                </input>
              </div>
              <div className="resend-password-link">
                <button className="btn resend-password-button">
                  Send Link
                </button>
              </div>
              <div>
                <p className="resend-password-detail">
                  You will receive a link to reset your password. <br />
                  If you haven't received any link, click <u>Resend Link</u>
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
