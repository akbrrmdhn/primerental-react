import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
//import samantha from "../assets/images/samantha.png"
import Footer from "../components/Footer";
import Navi from "../components/Navi";

export default class Chat extends Component {
  render() {
    return (
      <div className="chat-page">
        <Navi />
        <main>
        <section className="chat-utils"></section>
        <section className="chat-list">
          <ListGroup>
            <ListGroup.Item>Hey, is the vespa still available?</ListGroup.Item>
            <ListGroup.Item>Thank you.</ListGroup.Item>
            <ListGroup.Item>Hey, is the vespa still available?</ListGroup.Item>
            <ListGroup.Item>Thank you.</ListGroup.Item>
          </ListGroup>
        </section>
        </main>
        <Footer />
      </div>
    );
  }
}
