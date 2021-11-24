import React, { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import Axios from "axios";
import { loggedInAction } from "../redux/actionCreators/auth";
import { connect } from "react-redux";
class Payment extends Component {
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
    const { auth } = this.props;
    return (
      
      <div className="payment-page">
        <Helmet>
          <title>Prime Rental - Order Payment</title>
        </Helmet>
        <Header isAuthenticated={this.props.isAuthenticated} />
        <main>
          <section className="payment-section">
            <Container className="payment-container">
              <Row>
                <Col xs={12} md={4}>
                  <Image className="payment-img" src={this.state.image} />
                </Col>
                <Col xs={12} md={8}>
                  <p className="payment-item-name">{this.state.name}</p>
                  <p className="payment-item-location">{this.state.location}</p>
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
                    <p className="payment-qty">Quantity: {this.state.stock} {this.state.category}</p>
                  </div>
                  <div className="payment-order-details-box">
                    <div className="payment-order-details-contents">
                      <p className="payment-order-details">Order details:</p>
                      <p className="payment-order-qty">
                        {this.state.stock} {this.state.category}: Rp{this.state.price}
                        <br />
                      </p>
                      <p className="payment-order-sum">Total: Rp{this.state.price*this.state.stock}</p>
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
                {auth.authInfo.roleLevel === 2 ? <button className="btn finish-payment-button">
                  Approve Payment
                </button> :
                <button className="btn finish-payment-button">
                  Finish Payment
                </button>}
              </Row>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signedIn: () => {
      dispatch(loggedInAction);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
