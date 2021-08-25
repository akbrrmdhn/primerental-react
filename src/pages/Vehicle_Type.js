import React, { Component } from "react";
import Navi from "../components/Navi";
import Footer from "../components/Footer";
import { Card } from "react-bootstrap";
import merapi from "../assets/images/merapi.jpg";
import telukbogam from "../assets/images/teluk-bogam.jpg";
import bromo from "../assets/images/bromo.jpg";
import malioboro from "../assets/images/malioboro.jpg";

export default class Vehicle_Type extends Component {
  render() {
    return (
      <div className="vehicle_type">
        <Navi />
        <main>
          <section className="search-box">
            <form>
              <input
                type="text"
                placeholder="Search vehicle (ex. cars, cars name)"
                name="search"
              ></input>
              <button type="submit"></button>
            </form>
          </section>
          <section className="popular">
            <div className="popular-heading"></div>
            <div className="popular-cards">
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
              <Card className="popular-card" style={{ width: "18rem" }}>
                <Card.Img
                  className="popular-card-img"
                  variant="top"
                  src={bromo}
                />
                <Card.Body className="card-body">
                  <Card.Title>Bromo</Card.Title>
                  <Card.Text>Malang</Card.Text>
                </Card.Body>
              </Card>
              <Card className="popular-card" style={{ width: "18rem" }}>
                <Card.Img
                  className="popular-card-img"
                  variant="top"
                  src={malioboro}
                />
                <Card.Body className="card-body">
                  <Card.Title>Malioboro</Card.Title>
                  <Card.Text>Yogyakarta</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </section>
          <section className="cars">
            <div className="popular-heading"></div>
            <div className="popular-cards">
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
              <Card className="popular-card" style={{ width: "18rem" }}>
                <Card.Img
                  className="popular-card-img"
                  variant="top"
                  src={bromo}
                />
                <Card.Body className="card-body">
                  <Card.Title>Bromo</Card.Title>
                  <Card.Text>Malang</Card.Text>
                </Card.Body>
              </Card>
              <Card className="popular-card" style={{ width: "18rem" }}>
                <Card.Img
                  className="popular-card-img"
                  variant="top"
                  src={malioboro}
                />
                <Card.Body className="card-body">
                  <Card.Title>Malioboro</Card.Title>
                  <Card.Text>Yogyakarta</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </section>
          <section className="motorbikes">
            <div className="popular-heading"></div>
            <div className="popular-cards">
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
              <Card className="popular-card" style={{ width: "18rem" }}>
                <Card.Img
                  className="popular-card-img"
                  variant="top"
                  src={bromo}
                />
                <Card.Body className="card-body">
                  <Card.Title>Bromo</Card.Title>
                  <Card.Text>Malang</Card.Text>
                </Card.Body>
              </Card>
              <Card className="popular-card" style={{ width: "18rem" }}>
                <Card.Img
                  className="popular-card-img"
                  variant="top"
                  src={malioboro}
                />
                <Card.Body className="card-body">
                  <Card.Title>Malioboro</Card.Title>
                  <Card.Text>Yogyakarta</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </section>
          <section className="bikes">
            <div className="popular-heading"></div>
            <div className="popular-cards">
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
              <Card className="popular-card" style={{ width: "18rem" }}>
                <Card.Img
                  className="popular-card-img"
                  variant="top"
                  src={bromo}
                />
                <Card.Body className="card-body">
                  <Card.Title>Bromo</Card.Title>
                  <Card.Text>Malang</Card.Text>
                </Card.Body>
              </Card>
              <Card className="popular-card" style={{ width: "18rem" }}>
                <Card.Img
                  className="popular-card-img"
                  variant="top"
                  src={malioboro}
                />
                <Card.Body className="card-body">
                  <Card.Title>Malioboro</Card.Title>
                  <Card.Text>Yogyakarta</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </section>
          
          <section className="cars"></section>
          <section className="motorbikes"></section>
          <section className="bikes"></section>
        </main>
        <Footer />
      </div>
    );
  }
}
