import React, { Component } from "react";
import Footer from "../components/Footer";
import { Col, Container, Image, Row } from "react-bootstrap";
import samantha from "../assets/images/samantha.png";
import Header from "../components/Header";
import { Helmet } from "react-helmet";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-page">
        <Helmet>
          <title>Prime Rental - Profile</title>
        </Helmet>
        <Header isAuthenticated={this.props.isAuthenticated} />
        <main>
          <Container>
            <section className="profile-section">
              <h2 className="profile-title">Profile</h2>
              <div className="profile-data">
                <div className="profile-img">
                  <Image
                    className="samantha-profile"
                    src={samantha}
                    roundedCircle
                  ></Image>
                </div>
                <h2 className="user-name">Samantha Doe</h2>
                <p className="user-data user-email">samanthadoe@mail.com</p>
                <p className="user-data user-phone">+62833467823</p>
                <p className="user-data user-active-since">Has been active since 2013</p>
                <div className="profile-gender">
                  <div className="gender-male">
                    <input type="radio" value="MALE" className="gender male" />
                    <label className="gender-label">Male</label>
                  </div>
                  <div className="gender-female">
                    <input type="radio" value="FEMALE" className="gender female" />
                    <label className="gender-label">Female</label>
                  </div>
                </div>
              </div>
            </section>
            <section className="contacts">
              <h4 className="profile-headings">Contacts</h4>
              <label className="contacts-attribute" for="email">Email Address :</label>
              <input
                className="profile-email contacts-attribute"
                type="text"
                placeholder="Email address..."
              ></input>
              <label className="contacts-attribute" for="address">Address :</label>
              <input
                className="profile-address contacts-attribute"
                type="text"
                placeholder="Address..."
              ></input>
              <label className="contacts-attribute" for="mobile">Mobile Number :</label>
              <input
                className="profile-mobile contacts-attribute"
                type="text"
                placeholder="Mobile Number..."
              ></input>
            </section>
            <section className="identity">
              <h4 className="profile-headings">Identity</h4>
              <Row className="identity-row">
                <Col md={6}>
                  <label for="display-name">Display Name</label>
                  <input
                    className="profile-display-name"
                    type="text"
                    placeholder="Name..."
                  ></input>
                </Col>
                <Col md={6}>
                  <label for="dob">Date of Birth</label>
                  <input
                    className="profile-dob"
                    type="text"
                    placeholder="DD/MM/YY"
                  ></input>
                </Col>
              </Row>
            </section>
            <section className="submit-buttons">
              <button className="btn profile-save">Save Changes</button>
              <button className="btn profile-edit-password">
                Edit Password
              </button>
              <button className="btn profile-cancel">Cancel</button>
            </section>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }
}
