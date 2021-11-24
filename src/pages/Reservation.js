import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Axios from "axios";
import ButtonComponent from "../components/ButtonComponent";
import { countUpAction, countDownAction } from "../redux/actionCreators/count";
import { connect } from "react-redux";
class Reservation extends Component {
  state = {
    image: "",
  };
  componentDidMount() {
    
    const { id } = this.props.match.params;
    const url = `http://localhost:8000/vehicles/${id}`;
    Axios.get(url, {
      params: { id: String(id) },
    })
      .then(({ data }) => {
        const vehicleData = data.result[0];
        this.setState({
          id: vehicleData.id,
          name: vehicleData.name,
          category: vehicleData.category,
          stock: vehicleData.stock,
          description: vehicleData.description,
          location: vehicleData.location,
          image: vehicleData.image,
          price: vehicleData.price,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { count, countUp, countDown } = this.props;
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
                <p>{this.state.description}</p>
                <p className="vehicle-reserve-location">{this.state.location}</p>
                <p className="vehicle-reserve-status">No Prepayment</p>
                <ButtonComponent 
                    decreaseNum={countDown}
                    value={count.number}
                    increaseNum={countUp}
                    />
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

const mapStateToProps = ({ count }) => {
  return{
    count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    countUp: () => {
      dispatch(countUpAction());
    },
    countDown: () => {
      dispatch(countDownAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);