import React, { Component } from "react";
//import { Button } from "react-bootstrap";
import Footer from "../components/Footer";

export default class Forgot_Password extends Component {
  render() {
    return (
      <div className="forgot-password-page">
        <main>
          <section className="hero-section-password">
            <div className="back-button-pass">
              <p> {"<"} back </p>
              
            </div>
            <div className="hero-container-password">
              <div>Don't Worry, We Got Your Back!</div>
              <div>
                <input>

                </input>
              </div>
              <div>
                <button>

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
