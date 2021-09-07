import React from "react";
import Logo from "./Logo";
import { Col, Row } from "react-bootstrap";
function Footer() {
  return (
    <div className="main-footer">
      <div className="container-footer">
        <Row>
          {/** Column 1 */}
          <Col md={3}>
            <Logo />
            <p>
              Plan and book your perfect trip with
              <br /> expert advice, travel tips for vehicle
              <br /> information from us.
            </p>
            <br />
            <br />
            <p>©2021 Prime Rental. All rights reserved</p>
          </Col>
          {/** Column 2 */}
          <Col md={3}>
            <h4>Destinations</h4>
            <ul className="list-unstyled">
              <li>Bali</li>
              <li>Yogyakarta</li>
              <li>Jakarta</li>
              <li>Kalimantan</li>
              <li>Malang</li>
            </ul>
          </Col>
          {/** Column 3 */}
          <Col md={3}>
            <h4>Vehicles</h4>
            <ul className="list-unstyled">
              <li>Bike</li>
              <li>Cars</li>
              <li>Motorbikes</li>
              <li>Return Times</li>
              <li>FAQs</li>
            </ul>
          </Col>
          {/** Column 4 */}
          <Col md={3}>
            <h4>Interests</h4>
            <ul className="list-unstyled">
              <li>Adventure Travel</li>
              <li>Art and Culture</li>
              <li>Wildlife and Nature</li>
              <li>Family Holidays</li>
              <li>Culinary Trip</li>
            </ul>
          </Col>
        </Row>
        <hr></hr>
        <div className="footer-bottom">
          <div className="social-links">
            <span className="fab fa-twitter"></span>
            <span className="fab fa-facebook-f"></span>
            <span className="fab fa-instagram"></span>
            <span className="fab fa-linkedin-in"></span>
            <span className="fab fa-youtube"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
