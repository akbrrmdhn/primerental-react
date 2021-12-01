import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Col, Row, Image, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import ButtonComponent from "../components/ButtonComponent";
import { countUpAction, countDownAction } from "../redux/actionCreators/count";
import { connect } from "react-redux";
import { getVehicleByID, editVehicle } from "../utils/https/vehicles";
import { withRouter } from "react-router";
import { toast } from "react-toastify";
const url = process.env.REACT_APP_BASE_URL;

class EditVehicle extends Component {
  state = {
    id: '',
    name: '',
    category_id: '',
    location_id: '',
    booking_status_id: '',
    price: '',
    stock: '',
    image: '',
    description: '',
  }
  componentDidMount() {
    console.log(this.props.location.state);
    getVehicleByID(this.props.location.state.id)
    .then((result) => {
      console.log(result.data.result[0]);
      const vehicleRes = result.data.result[0];
      this.setState({id: vehicleRes.id});
      this.setState({name: vehicleRes.name});
      this.setState({category_id: vehicleRes.category_id});
      this.setState({location_id: vehicleRes.location_id});
      this.setState({booking_status_id: vehicleRes.status_id});
      this.setState({price: vehicleRes.price});
      this.setState({stock: vehicleRes.stock});
      this.setState({image: vehicleRes.image});
      this.setState({description: vehicleRes.description});
    })
    .catch((error) => console.log(error))
  }

  submitEdit = () => {
    if (this.state.name.length < 1) {
      return toast.error('Vehicle name must not be empty!', {
        position: toast.POSITION.TOP_CENTER
      })
    }
    if (this.state.description.length < 1) {
      return toast.error('Description must not be empty!', {
        position: toast.POSITION.TOP_CENTER
      })
    }
    if (this.state.price < 1) {
      return toast.error('Price must not be empty!', {
        position: toast.POSITION.TOP_CENTER
      })
    }
    const id = this.state.id;
    const token = localStorage.getItem('token');
    const body = new FormData();
    body.append('name', this.state.name);
    body.append('description', this.state.description);
    body.append('price', this.state.price);
    body.append('category_id', this.state.category_id);
    body.append('location_id', this.state.location_id);
    body.append('stock', this.state.stock);
    body.append('booking_status_id', this.state.booking_status_id);
    editVehicle(id, body, token).then((result) => console.log(result)).catch((error) => console.log(error))
  }

  render() {
    const { countUp, countDown } = this.props;
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
                    <Image className="add-vehicle-img" src={`${url}${this.state.image}`} />
                  </div>
                  {/* <Row className="add-vehicle-img-etc">
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
                  </Row> */}
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
                      defaultValue={this.state.name}
                      onChange={(e) => this.setState({name: e.target.value})}
                    />
                  </Row>
                  <Row>
                  <select
                      className="pick-status"
                      value={this.state.location_id}
                    >
                      <option value="default-status" hidden>
                        Select Location
                      </option>
                      <option value="1">Jakarta</option>
                      <option value="2">Yogyakarta</option>
                      <option value="3">Malang</option>
                      <option value="4">Banjarmasin</option>
                    </select>
                  </Row>
                  <Row>
                    <input
                      type="text"
                      className="input-vehicle-description"
                      placeholder="Description (max. 150 words)"
                      defaultValue={this.state.description}
                      onChange={(e) => this.setState({description: e.target.value})}
                    />
                  </Row>
                  <Row>
                    <label className="price-label">Price:</label>
                    <input
                      type="number"
                      min="0"
                      className="input-price"
                      placeholder="Type price..."
                      defaultValue={this.state.price}
                      onChange={(e) => this.setState({price: e.target.value})}
                    />
                  </Row>
                  <Row>
                    <label className="status-label">Status:</label>
                    <select
                      className="pick-status"
                      value={this.state.booking_status_id}
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
                      value={this.state.stock}
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
                  <button className="btn save-new-vehicle" onClick={this.submitEdit}>Save Changes</button>
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

const HOC1 = withRouter(EditVehicle);
export default connect(mapStateToProps, mapDispatchToProps)(HOC1);
