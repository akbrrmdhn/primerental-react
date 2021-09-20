import React, { Component } from "react";
import { ListGroup, Container, Row, Col, Image } from "react-bootstrap";
import { Helmet } from "react-helmet";
//import samantha from "../assets/images/samantha.png"
import Footer from "../components/Footer";
import Header from "../components/Header";
import samantha from "../assets/images/samantha.png";

export default class Chat extends Component {
  render() {
    return (
      <div className="chat-page">
        <Helmet>
          <title>Prime Rental - Chat</title>
        </Helmet>
        <Header isAuthenticated={this.props.isAuthenticated} />
        <main>
          <section className="chat-section">
            <Container>
              <div className="chat-utils">
                <input
                  type="text"
                  className="search-chat"
                  placeholder="Search Chat"
                />
                <select className="sort-chat" defaultValue="sort-by">
                  <option value="sort-by" hidden>
                    Sort By
                  </option>
                  <option value="read-date">Read Date</option>
                  <option value="date-added">Date Added</option>
                  <option value="name">Name</option>
                </select>
              </div>
              <div className="chat-list">
                <ListGroup variant="flush">
                  <ListGroup.Item className="chat-listgroup-item">
                    <Row>
                      <Col md={2}>
                        <Image
                          className="user-img-chat"
                          src={samantha}
                          roundedCircle
                        />
                      </Col>
                      <Col md={8}>
                        <p className="chat-user-name">User 1</p>
                        <p className="chat-user-message">Hey, is the vespa still available?</p>
                      </Col>
                      <Col md={2}>
                        <p className="chat-user-date">Yesterday</p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item className="chat-listgroup-item">
                    <Row>
                      <Col md={2}>
                        <Image
                          className="user-img-chat"
                          src={samantha}
                          roundedCircle
                        />
                      </Col>
                      <Col md={8}>
                        <p className="chat-user-name">User 2</p>
                        <p className="chat-user-message">Thank you.</p>
                      </Col>
                      <Col md={2}>
                        <p className="chat-user-date">Yesterday</p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item className="chat-listgroup-item">
                    <Row>
                      <Col md={2}>
                        <Image
                          className="user-img-chat"
                          src={samantha}
                          roundedCircle
                        />
                      </Col>
                      <Col md={8}>
                        <p className="chat-user-name">User 1</p>
                        <p className="chat-user-message">Hey, is the vespa still available?</p>
                      </Col>
                      <Col md={2}>
                        <p className="chat-user-date">Yesterday</p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item className="chat-listgroup-item">
                    <Row>
                      <Col md={2}>
                        <Image
                          className="user-img-chat"
                          src={samantha}
                          roundedCircle
                        />
                      </Col>
                      <Col md={8}>
                        <p className="chat-user-name">User 2</p>
                        <p className="chat-user-message">Thank you.</p>
                      </Col>
                      <Col md={2}>
                        <p className="chat-user-date">Yesterday</p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
