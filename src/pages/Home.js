import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, Col, Container, Row } from "react-bootstrap";
import edward from "../assets/images/edward.png";
//import { Link } from 'react-router-dom';
import Axios from "axios";
import CardComponent from "../components/CardComponent";

class Home extends React.Component {

  state = {
    score: [],
  };
  componentDidMount() {
    Axios.get("http://localhost:8000/vehicles", {
      params: { order_by: "v.score", sort: "DESC" },
    })
      .then(({ data }) => {
        this.setState({ score: data.result });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const data = this.state.score;
    return (
      
      <div className="home-page">
        <Header isAuthenticated={this.props.isAuthenticated} />
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
              <div className="vf-border">
              </div>
              <div className="column-finder">
                <div className="row-finder">
                  <div className="column">
                    <select className="finder-btn finder-location" defaultValue="Location">
                      <option value="Location" disabled>Location</option>
                      <option value="Bali">Bali</option>
                      <option value="Yogyakarta">Yogyakarta</option>
                      <option value="Jakarta">Jakarta</option>
                      <option value="Kalimantan">Kalimantan</option>
                      <option value="Malang">Malang</option>
                    </select>
                  </div>
                  <div className="column">
                    <select className="finder-btn finder-type" defaultValue="Type">
                      <option value="Type" disabled>Type</option>
                      <option value="Bikes">Bikes</option>
                      <option value="Cars">Cars</option>
                      <option value="Motorbikes">Motorbikes</option>
                    </select>
                  </div>
                </div>
                <div className="row-finder">
                  <div className="column">
                    <select className="finder-btn finder-payment" defaultValue="Payment">
                      <option value="Payment" disabled> Payment</option>
                      <option value="Succeed">Succeed</option>
                      <option value="Finished">Finished</option>
                      <option value="Waiting">Waiting</option>
                      <option value="Declined">Declined</option>
                    </select>
                  </div>
                  <div className="column">
                    <input className="finder-btn finder-date" type="date" placeholder="Date" />
                  </div>
                </div>
                <div className="row-finder">
                  <div className="submit-finder">
                    <button className="btn btn-submit-finder">Explore</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="popular">
            <h1 className="popular-heading">Popular in Town</h1>
            <div className="popular-cards">
            {data.map((data) => {
                return (
                  <CardComponent
                    key={data.id}
                    // link={`/detail/${data.id}`}
                    picture={data.image}
                    title={data.name}
                    subtitle={data.location}
                  />
                );
              })}
            </div>
          </section>
          <h1 className="testimonials-heading">Testimonials</h1>
          <section className="testimonials">
            <Container>
              <Row className="row row-testimonials">
                <Col className="col-md stars-test">
                  <div className="stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                  <div className="what-they-say">
                    <p>
                      ”It was the right decision to rent vehicle
                      <br /> here, I spent less money and enjoy the
                      <br /> trip. It was an amazing experience to
                      <br /> have a ride for wildlife trip!”
                    </p>
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
                      <Card.Text> </Card.Text>
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
