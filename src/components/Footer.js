import React from "react";
import Logo from "./Logo";
function Footer() {
  return (
    <div className="main-footer">
      <div className="container-footer">
        <div className="row">
          {/** Column 1 */}
          <div className="col-md-3 col-sm-6">
            <Logo />
            <p>
              Plan and book your perfect trip with expert advice, travel tips
              for vehicle information from us.
            </p><br /><br />
            <p>©2021 Prime Rental. All rights reserved</p>
          </div>
          {/** Column 2 */}
          <div className="col-md-3 col-sm-6">
            <h4>Destinations</h4>
            <ul className="list-unstyled">
              <li>Bali</li>
              <li>Yogyakarta</li>
              <li>Jakarta</li>
              <li>Kalimantan</li>
              <li>Malang</li>
            </ul>
          </div>
          {/** Column 3 */}
          <div className="col-md-3 col-sm-6">
            <h4>Vehicles</h4>
            <ul className="list-unstyled">
              <li>Bike</li>
              <li>Cars</li>
              <li>Motorbikes</li>
              <li>Return Times</li>
              <li>FAQs</li>
            </ul>
          </div>
          {/** Column 4 */}
          <div className="col-md-3 col-sm-6">
            <h4>Interests</h4>
            <ul className="list-unstyled">
              <li>Adventure Travel</li>
              <li>Art and Culture</li>
              <li>Wildlife and Nature</li>
              <li>Family Holidays</li>
              <li>Culinary Trip</li>
            </ul>
          </div>
        </div>
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
