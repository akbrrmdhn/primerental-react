import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, Col, Container, Row } from "react-bootstrap";
import edward from "../assets/images/edward.png";
//import { Link } from 'react-router-dom';
import Axios from "axios";
import CardComponent from "../components/CardComponent";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { loggedInAction } from "../redux/actionCreators/auth";
import { connect } from "react-redux";

class Home extends React.Component {

  state = {
    score: [],
  };
  componentDidMount() {
    Axios.get("http://localhost:8000/vehicles/score", {
      params: { limit: 4 },
    })
      .then(({ data }) => {
        this.setState({ score: data.result });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { auth } = this.props;
    const vehicleData = this.state.score;
    return (
      
      <div className="home-page">
        <Helmet>
          <title>Prime Rental</title>
        </Helmet>
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
            <div className="popular-title">
            <p className="popular-heading">Popular in Town</p>
            <Link to="/viewmore">
            <p className="view-more-popular">View More {">"}</p>
            </Link>
            </div>
            <div className="popular-cards">
            {vehicleData.map((data) => {
                return (
                  <CardComponent
                    key={data.id}
                    link={`/vehicledetail/${data.id}`}
                    picture={data.image}
                    title={data.name}
                    subtitle={data.location}
                  />
                );
              })}
            </div>
            <Container>

            {auth.authInfo.roleLevel === 1 || auth.authInfo.roleLevel === 2 ? <Link to="/addVehicle">
            <button className="btn home-add-button">Add New Item</button>
            </Link> : ""}
            </Container>
          </section>
          <p className="testimonials-heading">Testimonials</p>
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
                    <p className="what-they-say-text">
                      ”It was the right decision to rent vehicle
                      <br /> here, I spent less money and enjoy the
                      <br /> trip. It was an amazing experience to
                      <br /> have a ride for wildlife trip!”
                    </p>
                  </div>
                  <div className="testi-name">
                    <p className="say-name">Edward Newgate</p>
                    <p className="say-origin">Founder Circle</p>
                  </div>
                </Col>
                <div className="col-md pic-test">
                  <Card className="testimonial-card" style={{ width: "18rem" }}>
                    <Card.Img
                      className="testimonial-card-img"
                      variant="top"
                      src={edward}
                    />
                    <Card.Body className="testimonial-body">
                      <div className="testimonial-buttons">
                      <button className="btn">
                        <div className="circle-prev">
                        {"<"}
                        </div>
                      </button>
                      <button className="btn">
                        <div className="circle-next">
                        {">"}
                        </div>
                      </button>
                      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
