import React, { Component } from "react";
import { Row, Image, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import fixie from "../assets/images/fixie.jpg";
import { Link } from "react-router-dom";
import Axios from "axios";
import { loggedInAction } from "../redux/actionCreators/auth";
import { connect } from "react-redux";
class VehicleDetail extends Component {
  state = {
    image: "",
  };
  componentDidMount() {
    console.log(this.props.match.params);
    const { id } = this.props.match.params;
    const url = `http://localhost:8000/vehicles/${id}`;
    Axios.get(url, {
      params: { id: String(id) },
    })
      .then(({ data }) => {
        const vehicleData = data.result[0];
        this.setState({
          id: vehicleData.id,
          name: vehicleData.name,
          category: vehicleData.category,
          stock: vehicleData.stock,
          location: vehicleData.location,
          image: vehicleData.image,
          price: vehicleData.price,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="vehicle-detail">
        <Helmet>
          <title>Prime Rental - Vehicle Detail</title>
        </Helmet>
        <Header isAuthenticated={this.props.isAuthenticated} />
        <main>
          <section className="detail-heading"></section>
          <section className="detail-content">
            <div className="row">
              <Col md={7} className="detail-img">
                <Image className="det-img" src={this.state.image} />
                <Row className="detail-image-etc">
                  <Col md={2}>
                    <p className="prev-image-button">{"<"}</p>
                  </Col>
                  <Col md={4}>
                    <Image className="det-img" src={this.state.image} />
                  </Col>
                  <Col md={4}>
                    <Image className="det-img" src={this.state.image} />
                  </Col>
                  <Col md={2}>
                    <p className="next-image-button">{">"}</p>
                  </Col>
                </Row>
              </Col>
              <Col md={5} className="col-5">
                <p className="vehicle-detail-title">{this.state.name}</p>
                <p className="vehicle-detail-location">{this.state.location}</p>
                <p className="vehicle-detail-availability">Available</p>
                <p className="vehicle-detail-status">No Prepayment</p>
                <p className="vehicle-detail-specs">
                  Capacity: 1 Person
                  <br />
                  Type: {this.state.category}
                  <br />
                  Reservation before 2PM
                </p>
                <p className="vehicle-detail-price">Rp{this.state.price}/day</p>
                <div className="row add-vehicle-nominal detail-add-nominal">
                  <button className="btn minus-button">-</button>
                  <p className="vehicle-qty">{this.state.stock}</p>
                  <button className="btn plus-button">+</button>
                </div>
              </Col>
            </div>
          </section>
          <section className="detail-buttons">
            
                  {this.props.auth.authInfo.roleLevel === 1 || this.props.auth.authInfo.roleLevel === 2 
                  ? (<div>
                    <Link to="/"><button>Add to Home Page</button></Link>
                    <Link to="/editvehicle"><button>Edit Item</button></Link>
                  </div>) : (<div>
                    <Link to="/chat">
                    <button className="btn chat-admin-button">
                      Chat Admin
                    </button>
                  </Link>
                
                  <Link to={`/reservation/${this.props.match.params.id}`}>
                    <button className="btn reserve-now-button">
                      Reservation
                    </button>
                  </Link>
                
                  <Link to="/vehicledetail">
                    <button className="btn give-like-button">
                      Like
                    </button>
                  </Link>
                    </div>)}
                
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

export default connect(mapStateToProps, mapDispatchToProps)(VehicleDetail);