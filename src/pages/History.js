import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Col, Container, Row, ListGroup, Image, Card } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Fixie from "../assets/images/fixie.jpg";
import merapi from "../assets/images/merapi.jpg";
import telukbogam from "../assets/images/teluk-bogam.jpg";

export default class History extends Component {
  render() {
    return (
      <div className="history-page">
        <Helmet>
          <title>Prime Rental - Order Histories</title>
        </Helmet>
        <Header isAuthenticated={this.props.isAuthenticated} />
        <main>
          <section className="history-content">
            <Container>
              <Row>
                <Col xs={12} md={8}>
                  <Row>
                    <div className="history-input-forms d-flex w-100">
                      <div className="history-input-wrapper">
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
                            <i className="fas fa-search"></i>
                          </button>
                        </form>
                      </div>
                      <select
                        className="history-search-filter"
                        defaultValue="filter"
                      >
                        <option value="filter" disabled>
                          Filter
                        </option>
                        <option value="type">Type</option>
                        <option value="date-added">Date Added</option>
                        <option value="name">Name</option>
                        <option value="favourite-product">
                          Favourite Product
                        </option>
                      </select>
                    </div>
                  </Row>
                  <div className="history-notifications">
                    <p>Today</p>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="history-today-notifications">
                        <Row>
                          <Col md={10}>
                            <p>Please Finish Your Payment</p>
                          </Col>
                          <Col md={1}>
                            <div>{">"}</div>
                          </Col>
                          <Col md={1}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item className="history-today-notifications">
                        <div>Your Payment Has Been Confirmed!</div>
                        <div>{">"}</div>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                  <Row className="vehicle-histories">
                    <p>A Week Ago</p>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="vehicle-history-details">
                        <Row>
                          <Col md={4}>
                            <Image
                              className="vehicle-history-img"
                              src={Fixie}
                            ></Image>
                          </Col>
                          <Col md={7}>
                            <p className="history-vehicle-name">Fixie</p>
                            <p className="history-vehicle-rent-date">
                              Jan 18 to 21 2021
                            </p>
                            <p className="history-vehicle-price">
                              Prepayment: Rp245.000
                            </p>
                            <p className="history-vehicle-status">
                              Has been Returned
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
                  </Row>
                </Col>
                <Col xs={12} md={4}>
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
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
