import React, { Component } from "react";
import { Link } from "react-router-dom";
//import { Button } from "react-bootstrap";
import Footer from "../components/Footer";

export default class Forgot_Password extends Component {
  render() {
    return (
      <div className="forgot-password-page">
        <main>
          <section className="hero-section-password">
            <div className="back-button-pass">
              
              <Link to="/login">
              <p> {"<"} back </p>
              </Link>
            </div>
            <div className="hero-container-password">
              <div>Don't Worry, We Got Your Back!</div>
              <div>
                <input name="email" placeholder="Enter your registered email...">

                </input>
              </div>
              <div className="resend-password-link">
                <button>
                  Send Link
                </button>
              </div>

            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
