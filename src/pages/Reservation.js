import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Axios from "axios";

export default class Reservation extends Component {
  state = {
    image: "",
    stock: 0,
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    const url = `http://localhost:8000/vehicles/${id}`;
    Axios.get(url, {
      params: { id: String(id) },
    })
      .then(({ data }) => {
        const vehicleData = data.result[0];
        console.log(vehicleData);
        this.setState({
          stock: vehicleData.stock,
          id: vehicleData.id,
          location: vehicleData.location,
          name: vehicleData.name,
          image: vehicleData.image,
          price: vehicleData.price,
          category: vehicleData.category,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="reservation-page">
        <Helmet>
          <title>Prime Rental - Vehicle Reservation</title>
        </Helmet>
        <Header isAuthenticated={this.props.isAuthenticated} />
        <main>
          <section className="reservation-heading"></section>
          <section className="reservation-content">
            <div className="row">
              <div className="col-7 reservation-img">
                <Image className="reserve-img" src={this.state.image} />
              </div>
              <div className="col-5">
                <p className="vehicle-reserve-title">{this.state.name}</p>
                <p className="vehicle-reserve-location">{this.state.location}</p>
                <p className="vehicle-reserve-status">No Prepayment</p>
                <div className="row add-vehicle-nominal">
                  <button className="btn minus-button">-</button>
                  <p className="vehicle-qty">{this.state.stock}</p>
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
                <Link to={`/payment/${this.props.match.params.id}`}>
                  <button className="btn pay-now-button">Pay Now: Rp{this.state.price*this.state.stock}</button>
                </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
