import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Footer from "../components/Footer";

export default class Signup extends Component {
  render() {
    return (
      <div className="signup">
        <main>
          <section className="hero-section-login">
            <div className="hero-container">
              <div className="hero-login">
                <div className="login-logo">
                  <h1>Let's Explore The World</h1>
                  <p>Already have an account?</p>
                  <Button
                    variant="primary"
                    className="form-btn login-btn"
                    size="lg"
                  >
                    Login
                  </Button>
                </div>
                <div className="login-form">
                  <p>asdfd</p>
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
                  >
                    Login with Google
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
