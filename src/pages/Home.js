import React from "react";
import Navi from "../components/Navi";
import Footer from "../components/Footer";
import { Card, Col, Container, Row } from "react-bootstrap";
import merapi from "../assets/images/merapi.jpg";
import telukbogam from "../assets/images/teluk-bogam.jpg";
import bromo from "../assets/images/bromo.jpg";
import malioboro from "../assets/images/malioboro.jpg";
import edward from "../assets/images/edward.png"
//import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <Navi />
        <main>
          <section className="hero-section-home">
            <div className="hero-container">
              <div className="explore">
                <p>
                  Explore and
                  <br />
                  Travel
                </p>
              </div>
              <div className="vehicle-finder">
                <p>Vehicle Finder</p>
              </div>
              <div className="row-finder">
                <form>
                  
                </form>
                <div className="column">
                <select name="location" placeholder="Location">
                    <option>Bali</option>
                    <option>Yogyakarta</option>
                    <option>Jakarta</option>
                    <option>Kalimantan</option>
                    <option>Malang</option>
                  </select>
                </div>
                <div className="column">
                <select name="type" placeholder="Type">
                    <option>Bikes</option>
                    <option>Cars</option>
                    <option>Motorbikes</option>
                  </select>
                </div>
              </div>
              <div className="row-finder">
                <div className="column">
                <select name="payment" placeholder="Payment">
                    <option>Succeed</option>
                    <option>Finished</option>
                    <option>Waiting</option>
                    <option>Declined</option>
                  </select>
                </div>
                <div className="column">
                <select name="date" placeholder="Date">
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                  </select>
                </div>
              </div>
            </div>
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
          <h1 className="testimonials-heading">Testimonials</h1>
          <section className="testimonials">
            <Container>
            <Row className="row row-testimonials">
              <Col className="col-md stars-test">
                <div className="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                </div>
                <div className="what-they-say">
                  <p>”It was the right decision to rent vehicle<br /> here, I spent less money and enjoy the<br /> trip. It was an amazing experience to<br /> have a ride for wildlife trip!”</p>
                </div>
                <div className="testi-name">
                  <p>Edward Newgate</p>
                  <p>Founder Circle</p>
                </div>
              </Col>
              <div className="col-md pic-test">
              <Card className="popular-card" style={{ width: "18rem" }}>
                <Card.Img
                  className="popular-card-img"
                  variant="top"
                  src={edward}
                />
                <Card.Body className="card-body">
                  <Card.Title></Card.Title>
                  <Card.Text>  </Card.Text>
                </Card.Body>
              </Card>
              </div>
            </Row>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
