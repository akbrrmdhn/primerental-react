import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Col, Row, Image, Container } from "react-bootstrap";
import addImage from "../assets/images/add-image.png";
import { Helmet } from "react-helmet";
import ButtonComponent from "../components/ButtonComponent";
import { countUpAction, countDownAction } from "../redux/actionCreators/count";
import { connect } from "react-redux";

class EditVehicle extends Component {
  render() {
    const { count, countUp, countDown } = this.props;
    return (
      <div className="add-vehicle-page">
        <Helmet>
          <title>Edit Vehicle</title>
        </Helmet>
        <Header />
        <main>
          <section className="add-vehicle-detail">
            <Container>
              <Row>
                <Col md={6} className="add-vehicle-image">
                  <div className="pic-border">
                    <Image className="add-vehicle-img" src={addImage} />
                  </div>
                  <Row className="add-vehicle-img-etc">
                    <Col md={6}>
                      <div className="pic-border">
                        <Image className="add-vehicle-img" src={addImage} />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="pic-border">
                        <Image className="add-vehicle-img" src={addImage} />
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={1}>
                  <div></div>
                </Col>
                <Col md={5} className="add-additional-vehicle-details">
                  <Row>
                    <input
                      type="text"
                      className="input-vehicle-name"
                      placeholder="Name (max. 20 words)"
                    />
                  </Row>
                  <Row>
                    <input
                      type="text"
                      className="input-vehicle-location"
                      placeholder="Location"
                    />
                  </Row>
                  <Row>
                    <input
                      type="text"
                      className="input-vehicle-description"
                      placeholder="Description (max. 150 words)"
                    />
                  </Row>
                  <Row>
                    <label className="price-label">Price:</label>
                    <input
                      type="number"
                      min="0"
                      className="input-price"
                      placeholder="Type price..."
                    />
                  </Row>
                  <Row>
                    <label className="status-label">Status:</label>
                    <select
                      className="pick-status"
                      defaultValue="default-status"
                    >
                      <option value="default-status" hidden>
                        Select Status
                      </option>
                      <option value="1">Available</option>
                      <option value="2">Full Booked</option>
                    </select>
                  </Row>
                  <Row>
                    <label className="stock-label">Stock:</label>
                    <ButtonComponent
                      decreaseNum={countDown}
                      value={count.number}
                      increaseNum={countUp}
                    />
                  </Row>
                </Col>
              </Row>
              <Row className="submit-add-vehicle">
                <div className="submit-add-vehicle-wrapper">
                  <select className="add-item-to" defaultValue="addItemTo">
                    <option value="addItemTo" hidden>
                      Add Item To
                    </option>
                    <option value="1">Car</option>
                    <option value="2">Motorbike</option>
                    <option value="3">Bike</option>
                  </select>
                  <button className="btn save-new-vehicle">Save Changes</button>
                  <button className="btn delete-vehicle">Delete</button>
                </div>
              </Row>
            </Container>
          </section>
          <section className="add-vehicle-buttons"></section>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ count }) => {
  return {
    count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    countUp: () => {
      dispatch(countUpAction());
    },
    countDown: () => {
      dispatch(countDownAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditVehicle);
