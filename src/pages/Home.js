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
import { withRouter } from "react-router";

class Home extends React.Component {

  state = {
    popular: [],
    location_id: '',
    category_id: '',
  };
  componentDidMount() {
    const url = process.env.REACT_APP_BASE_URL;
    Axios.get(`${url}/vehicles`, {
      params: { limit: 4, order_by: 'v.score', sort: 'DESC' },
    })
      .then(({ data }) => {
        this.setState({ popular: data.result.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  searchHandler = () => {
    let searchQuery = '/search?';
    if (this.state.location_id) {
      searchQuery += `location_id=${this.state.location_id}&`;
    }
    if (this.state.category_id) {
      searchQuery += `category_id=${this.state.category_id}&`;
    }
    this.props.history.push(`${searchQuery.slice(0, -1)}`);
  }
  render() {
    const url = process.env.REACT_APP_BASE_URL;
    const { auth } = this.props;
    const vehicleData = this.state.popular;
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
                    <select className="finder-btn finder-location" defaultValue="Location" onChange={(e) => this.setState({ location_id: e.target.value})}>
                      <option value="Location" disabled>Location</option>
                      <option value="1">Jakarta</option>
                      <option value="2">Yogyakarta</option>
                      <option value="3">Malang</option>
                      <option value="4">Banjarmasin</option>
                    </select>
                  </div>
                  <div className="column">
                    <select className="finder-btn finder-type" defaultValue="Type" onChange={(e) => this.setState({ category_id: e.target.value})}>
                      <option value="Type" disabled>Type</option>
                      <option value="1">Cars</option>
                      <option value="2">Motorbikes</option>
                      <option value="3">Bikes</option>
                    </select>
                  </div>
                </div>
                <div className="row-finder">
                  <div className="submit-finder">
                    <button className="btn btn-submit-finder" onClick={this.searchHandler}>Explore</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="popular">
            <div className="popular-title">
            <p className="popular-heading">Popular in Town</p>
            
            <button className="btn view-more" onClick={() => this.props.history.push('/viewmore', {type: 'Popular in Town'})}>View More {">"}</button>
            
            </div>
            <div className="popular-cards">
            {vehicleData.map((data) => {
                console.log(data);
                return (
                  <CardComponent
                    key={data.id}
                    link={`/vehicledetail/${data.id}`}
                    picture={`${url}${data.image}`}
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
const HOC1 = withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(HOC1);
