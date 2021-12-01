import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Image } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Axios from "axios";
import { countUpAction, countDownAction } from "../redux/actionCreators/count";
import { connect } from "react-redux";
import { addNewHistory } from "../utils/https/histories";
const url = process.env.REACT_APP_BASE_URL;
class Reservation extends Component {
  state = {
    id: "",
    image: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    maxStock: '',
    location: "",
    location_id: "",
    category: "",
    category_id: "",
    rent_date: new Date(),
    return_date: new Date(),
    days: 1,
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    const fetch = `${url}/vehicles/${id}`;
    Axios.get(fetch, {
      params: { id: String(id) },
    })
      .then(({ data }) => {
        const vehicleData = data.result[0];
        this.setState({
          id: vehicleData.id,
          name: vehicleData.name,
          category: vehicleData.category,
          stock: vehicleData.stock,
          maxStock: vehicleData.stock,
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

  reserveVehicle = () => {
    let card_id = '';
    const numbers = "1234567890";
    const numbersLength = numbers.length;
    for(let i = 0; i < 9; i++) {
      card_id += numbers.charAt(Math.floor(Math.random()
    * numbersLength));
    }
    const originalDate = new Date(`${this.state.rent_date}`);
    const duration = parseInt(this.state.days);
    const addedDate = new Date(originalDate);
    addedDate.setDate(addedDate.getDate() + duration);
    const body = new URLSearchParams();
    const totalPrice = this.state.price * duration * this.state.stock;
    console.log(totalPrice);
    body.append("user_id", this.props.auth.authInfo.user_id);
    body.append("vehicle_id", this.props.match.params.id);
    body.append("card_id", card_id);
    body.append("quantity", this.state.stock);
    body.append("total_price", this.state.price);
    body.append(
      "rent_date",
      originalDate.toISOString().substr(0, 19).replace("T", " ")
    );
    body.append(
      "return_date",
      addedDate.toISOString().substr(0, 19).replace("T", " ")
    );
    body.append("status_id", 1);
    addNewHistory(body).then((result) => setTimeout(() => this.props.history.push('/payment', {history_id: result.data.result}), 5000)).catch((error) => console.log(error));
  };
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
                <Image
                  className="reserve-img"
                  src={`${url}${this.state.image}`}
                />
              </div>
              <div className="col-5">
                <p className="vehicle-reserve-title">{this.state.name}</p>
                <p>{this.state.description}</p>
                <p className="vehicle-reserve-location">
                  {this.state.location}
                </p>
                <p className="vehicle-reserve-status">No Prepayment</p>
                <div className="stock-manager">
                  <button
                    className="btn minus-button"
                    onClick={() =>
                      this.state.stock > 1 &&
                      this.setState({ stock: this.state.stock - 1 })
                    }
                  >
                    -
                  </button>
                  <p className="vehicle-qty">{this.state.stock}</p>
                  <button
                    className="btn plus-button"
                    onClick={() =>
                      this.state.stock < this.state.maxStock &&
                      this.setState({ stock: this.state.stock + 1 })
                    }
                  >
                    +
                  </button>
                </div>
                <p className="reservation-date-heading">Reservation Date: </p>
                <input
                  type="date"
                  className="reserve-date-input"
                  onChange={(e) => this.setState({ rent_date: e.target.value })}
                ></input>
                <select
                  className="rent-duration"
                  placeholder="Day"
                  onChange={(e) => this.setState({ days: e.target.value })}
                >
                  <option value="1">1 Day</option>
                  <option value="2">2 Days</option>
                  <option value="3">3 Days</option>
                  <option value="4">4 Days</option>
                  <option value="5">5 Days</option>
                </select>
              </div>
            </div>
            <div className="row">
              <button
                className="btn pay-now-button"
                onClick={this.reserveVehicle}
              >
                Pay Now: Rp
                {this.state.price * this.state.stock * this.state.days}
              </button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ auth, count }) => {
  return {
    auth,
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
