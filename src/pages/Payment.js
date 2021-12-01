import React, { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import Axios from "axios";
import { loggedInAction } from "../redux/actionCreators/auth";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import axios from "axios";
const url = process.env.REACT_APP_BASE_URL;
class Payment extends Component {
  state = {
    image: "",
    rent_date: new Date(),
    return_date: new Date(),
  };
  componentDidMount() {
    const history_id = this.props.location.state.history_id;
    Axios.get(`${url}/histories/${history_id}`)
    .then(({data}) => {
      const historyData = data.result[0];
      console.log(historyData);
      this.setState({name: historyData.rented_vehicle});
      this.setState({booking_code: historyData.booking_code});
      this.setState({payment_code: historyData.payment_code});
      this.setState({total_price: historyData.total_price});
      this.setState({image: historyData.image});
      this.setState({quantity: historyData.quantity});
      this.setState({patron: historyData.patron});
      this.setState({rent_date: historyData.rent_date});
      this.setState({return_date: historyData.return_date});
      this.setState({category: historyData.category});
      this.setState({location: historyData.location});
      this.setState({email: historyData.email});
      this.setState({phone: historyData.phone});
      
      }
    )
    .catch((error) => console.log(error))
  }
  finishPayment = () => {
    const history_id = this.props.location.state.history_id;
    const body = {status_id: 2}
    axios.patch(`${url}/histories/${history_id}`, body).then((result) => console.log('result', result)).catch((error) => console.log(error))
  }
  approvePayment = () => {
    const history_id = this.props.location.state.history_id;
    const body = {status_id: 3}
    axios.patch(`${url}/histories/${history_id}`, body).then((result) => console.log('result', result)).catch((error) => console.log(error))

  }
  render() {
    const { auth } = this.props;
    const rentDate = new Date(this.state.rent_date).getDate();
    const returnDate = new Date(this.state.return_date).getDate();
    const rentMonth = new Date(this.state.rent_date).getMonth();
    const returnMonth = new Date(this.state.return_date).getMonth();
    const rentYear = new Date(this.state.rent_date).getFullYear();
    const returnYear = new Date(this.state.return_date).getFullYear();
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
                  <Image className="payment-img" src={`${url}${this.state.image}`} />
                </Col>
                <Col xs={12} md={8}>
                  <p className="payment-item-name">{this.state.name}</p>
                  <p className="payment-item-location">{this.state.location}</p>
                  <p className="payment-item-status">No Prepayment</p>
                  <p className="payment-item-code">{this.state.booking_code}</p>
                  <button className="btn copy-booking-code">
                    Copy booking code
                  </button>
                </Col>
              </Row>
              <Row className="payment-informations">
                <Col xs={12} md={4}>
                  <div className="payment-qty-box">
                    <p className="payment-qty">Quantity: {this.state.quantity} {this.state.category}</p>
                  </div>
                  <div className="payment-order-details-box">
                    <div className="payment-order-details-contents">
                      <p className="payment-order-details">Order details:</p>
                      <p className="payment-order-qty">
                        {this.state.quantity} {this.state.category}: Rp{this.state.total_price}
                        <br />
                      </p>
                      <p className="payment-order-sum">Total: Rp{this.state.total_price}</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={8}>
                  <div className="payment-reservation-date-box">
                    <div className="payment-reservation-wrapper">
                      <p className="reserve-date-title">Reservation Date:</p>
                      <p className="reserve-date-content">{rentDate}/{rentMonth}/{rentYear} - {returnDate}/{returnMonth}/{returnYear}</p>
                    </div>
                  </div>
                  <div className="payment-identity-box">
                    <div className="payment-identity-wrapper">
                      <p className="payment-identity-title">Identity:</p>
                      <p className="payment-identity-contents">
                        {this.state.patron}({this.state.phone})
                        <br />
                        {this.state.email}
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <div className="proceed-to-payment">
                  <p className="payment-code-title">Payment Code:</p>
                  <div className="payment-serial-code-wrapper">
                  <p className="payment-serial-code">{this.state.payment_code}</p>
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
                {auth.authInfo.roleLevel === 2 ? <button className="btn finish-payment-button" onClick={this.approvePayment}>
                  Approve Payment
                </button> :
                <button className="btn finish-payment-button" onClick={this.finishPayment}>
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
const HOC1 = withRouter(Payment)
export default connect(mapStateToProps, mapDispatchToProps)(HOC1);
