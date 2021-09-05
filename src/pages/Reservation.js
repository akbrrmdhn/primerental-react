import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import fixie from "../assets/images/fixie.jpg";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Reservation extends Component {
  render() {
    return (
      <div className="reservation-page">
        <Header />
        <main>
          <section className="reservation-heading"></section>
          <section className="reservation-content">
            <div className="row">
              <div className="col-7 reservation-img">
                <Image className="reserve-img" src={fixie} />
              </div>
              <div className="col-5">
                <p className="vehicle-reserve-title">Fixie - Gray Only</p>
                <p className="vehicle-reserve-location">Yogyakarta</p>
                <p className="vehicle-reserve-status">No Prepayment</p>
                <div className="row add-vehicle-nominal">
                  <button className="btn minus-button">-</button>
                  <p className="vehicle-qty">2</p>
                  <button className="btn plus-button">+</button>
                </div>
                <p className="reservation-date-heading">Reservation Date: </p>
                <input type="date" className="reserve-date-input"></input>
                <select className="rent-duration" placeholder="Day">
                  <option>1 Day</option>
                  <option>2 Days</option>
                  <option>3 Days</option>
                  <option>4 Days</option>
                  <option>5 Days</option>
                </select>
              </div>
            </div>
            <div className="row">
                <Link to="/payment">
                  <button className="btn pay-now-button">Pay Now: Rp178.000</button>
                </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
