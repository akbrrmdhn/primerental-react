import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Col, Container, Row, ListGroup } from "react-bootstrap";

export default class History extends Component {
  render() {
    return (
      <div className="history-page">
        <Header />
        <main>
          <section>
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
                      <button className="btn history-search-submit" type="submit"><i className="fas fa-search"></i></button>
                    </form>
                    </div>
                    <select className="history-search-filter" defaultValue="filter">
                      <option value="filter" disabled>Filter</option>
                      <option value="type">Type</option>
                      <option value="date-added">Date Added</option>
                      <option value="name">Name</option>
                      <option value="favourite-product">Favourite Product</option>
                    </select>
                    </div>
                  </Row>
                  <div className="history-notifications">
                      <p>Today</p>
                    <ListGroup>
                      <ListGroup.Item>
                        Please Finish your Payment
                      </ListGroup.Item>
                      <ListGroup.Item>Your Payment Has Been Confirmed!</ListGroup.Item>
                    </ListGroup>
                  </div>
                  <Row className="vehicle-histories">
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={4}>
                  <p>asd</p>
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
