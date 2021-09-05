import React, { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import fixie from "../assets/images/fixie.jpg";

export default class Payment extends Component {
  render() {
    return (
      <div className="payment-page">
        <Header />
        <main>
          <section className="payment-section">
            <Container className="payment-container">
              <Row>
                <Col xs={12} md={4}>
                  <Image className="payment-img" src={fixie} />
                </Col>
                <Col xs={12} md={8}>
                  <p className="payment-item-name">Fixie - Gray Only</p>
                  <p className="payment-item-location">Yogyakarta</p>
                  <p className="payment-item-status">No Prepayment</p>
                  <p className="payment-item-code">#FG1209878YZS</p>
                  <button className="btn copy-booking-code">
                    Copy booking code
                  </button>
                </Col>
              </Row>
              <Row className="payment-informations">
                <Col xs={12} md={4}>
                  <div className="payment-qty-box">
                    <p className="payment-qty">Quantity: 2 Bikes</p>
                  </div>
                  <div className="payment-order-details-box">
                    <div className="payment-order-details-contents">
                      <p className="payment-order-details">Order details:</p>
                      <p className="payment-order-qty">
                        1 bike: Rp78.000
                        <br />1 bike: Rp78.000
                      </p>
                      <p className="payment-order-sum">Total: Rp178.000</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={8}>
                  <div className="payment-reservation-date-box">
                    <div className="payment-reservation-wrapper">
                      <p className="reserve-date-title">Reservation Date:</p>
                      <p className="reserve-date-content"> Jan 18 - 20 2021</p>
                    </div>
                  </div>
                  <div className="payment-identity-box">
                    <div className="payment-identity-wrapper">
                      <p className="payment-identity-title">Identity:</p>
                      <p className="payment-identity-contents">
                        Samantha Doe(+6290987682)
                        <br />
                        samanthadoe@gmail.com
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <div className="proceed-to-payment">
                  <p className="payment-code-title">Payment Code:</p>
                  <div className="payment-serial-code-wrapper">
                  <p className="payment-serial-code">#FG1209878YZS</p>
                  <button className="btn copy-payment-code">Copy</button>
                  </div>
                  <select
                    className="payment-method"
                    defaultValue="select-payment-method"
                  >
                    <option value="select-payment-method" disabled>
                      Select Payment Method
                    </option>

                    <option value="cash">Cash</option>
                    <option value="transfer">Transfer</option>
                  </select>
                </div>
              </Row>
              <Row>
                <button className="btn finish-payment-button">
                  Finish Payment
                </button>
              </Row>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
