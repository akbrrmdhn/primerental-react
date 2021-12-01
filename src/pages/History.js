import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Col, Row, ListGroup, Image, Card } from "react-bootstrap";
import { Helmet } from "react-helmet";
import merapi from "../assets/images/merapi.jpg";
import telukbogam from "../assets/images/teluk-bogam.jpg";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router";
const url = process.env.REACT_APP_BASE_URL;

class History extends Component {
  state = {
    vehicles: [],
  }
  componentDidMount() {
    const user_id = this.props.auth.authInfo.user_id;
    const roleLevel = this.props.auth.authInfo.roleLevel;
    if(roleLevel === 1){
      axios.get(`${url}/histories`).then(({data}) => this.setState({vehicles: data.result.data})).catch((error) => console.log(error))
    }
    if(roleLevel === 2){
      axios.get(`${url}/histories`, {
        params: {owner_id: user_id}
      }).then(({data}) => this.setState({vehicles: data.result.data})).catch((error) => console.log(error))
    }
    if(roleLevel === 3){
      axios.get(`${url}/histories`, {
        params: {user_id: user_id}
      }).then(({data}) => this.setState({vehicles: data.result.data})).catch((error) => console.log(error))
    }
  }
  render() {
    const vehicleData = this.state.vehicles;
    return (
      <div className="history-page">
        <Helmet>
          <title>Prime Rental - Order Histories</title>
        </Helmet>
        <Header isAuthenticated={this.props.isAuthenticated} />
        <main>
          <section className="history-content">
          <Row>
              <Col xs={12} md={8}>
                <Row>
                  <Col md={10}>
                    <form>
                      <input
                        type="text"
                        placeholder="Search history"
                        className="history-search-field"
                      ></input>
                      <button
                        className="btn history-search-submit"
                        type="submit"
                      >
                        {/* <i className="fas fa-search"></i> */}
                      </button>
                    </form>
                  </Col>
                  <Col md={1}>
                    <div></div>
                  </Col>
                  <Col md={1}>
                    <p>Select</p>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <select
                      className="history-search-filter"
                      defaultValue="filter"
                    >
                      <option value="filter" hidden>
                        Filter
                      </option>
                      <option value="type">Type</option>
                      <option value="date-added">Date Added</option>
                      <option value="name">Name</option>
                      <option value="favourite-product">
                        Favourite Product
                      </option>
                    </select>
                  </Col>
                </Row>
                {/* <div className="history-notifications">
                  <p className="heading-history">Today</p>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="history-today-notifications">
                      <Row>
                        <Col md={10}>
                          <p className="today-payment-history">
                            Please Finish Your Payment
                          </p>
                        </Col>
                        <Col md={1}>
                          <div>{">"}</div>
                        </Col>
                        <Col md={1}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                          />
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item className="history-today-notifications">
                      <Row>
                        <Col md={10}>
                          <p className="today-payment-history">
                            Your payment has been confirmed!
                          </p>
                        </Col>
                        <Col md={1}>
                          <div>{">"}</div>
                        </Col>
                        <Col md={1}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                          />
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                </div> */}
                <Row className="vehicle-histories">
                  {/* <p className="heading-history">A Week Ago</p> */}
                  {vehicleData.map((data) => {
                  return (
                  <ListGroup variant="flush">
                    <ListGroup.Item className="vehicle-history-details">
                      <Row>
                        <Col md={4}>
                          <Image
                            className="vehicle-history-img"
                            src={`${url}${data.image}`}
                            onClick={() => this.props.history.push('/payment', {history_id: data.transaction_id})}
                          ></Image>
                        </Col>
                        <Col md={7}>
                          <p className="history-vehicle-name">{data.vehicle_name}</p>
                          <p className="history-vehicle-rent-date">
                            Start: {new Date(data.rent_date).toLocaleDateString("en-CA")}
                          </p>
                          <p className="history-vehicle-rent-date">
                            End: {new Date(data.return_date).toLocaleDateString("en-CA")}
                          </p>
                          <p className="history-vehicle-price">
                            Prepayment: Rp{data.total_price}
                          </p>
                          <p className="history-vehicle-status">
                            {data.payment_status}
                          </p>
                        </Col>
                        <Col md={1}>
                          <input
                            className="form-check-input history-check"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                    )
                  })}
                </Row>
              </Col>
              <Col md={1}></Col>
              <Col xs={12} md={3}>
                <div className="new-arrival-wrapper">
                  <div className="new-arrival-content">
                    <p className="new-arrival-heading">New Arrival</p>
                    <div>
                      <Card className="popular-card" style={{ width: "18rem" }}>
                        <Card.Img
                          className="popular-card-img"
                          variant="top"
                          src={merapi}
                        />
                        <Card.Body className="card-body">
                          <Card.Title>Merapi</Card.Title>
                          <Card.Text>Yogyakarta</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    <div>
                      <Card className="popular-card" style={{ width: "18rem" }}>
                        <Card.Img
                          className="popular-card-img"
                          variant="top"
                          src={telukbogam}
                        />
                        <Card.Body className="card-body">
                          <Card.Title>Teluk Bogam</Card.Title>
                          <Card.Text>Kalimantan</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
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
  }
}
const HOC1 = withRouter(History)
export default connect(mapStateToProps)(HOC1);