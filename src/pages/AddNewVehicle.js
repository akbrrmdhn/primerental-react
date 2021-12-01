import React, { Component, createRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Col, Row, Image, Container } from "react-bootstrap";
import addImage from "../assets/images/add-image.png";
import { Helmet } from "react-helmet";
import ButtonComponent from "../components/ButtonComponent";
import { countUpAction, countDownAction } from "../redux/actionCreators/count";
import { connect } from "react-redux";
// import { addNewVehicle } from "../utils/https/vehicles";

class AddNewVehicle extends Component {
  state = {
    upload: '',
    name: '',
    stock: 0,
    booking_status_id: '',
    category_id: '',
    location_id: '',
    description: '',
    price: '',
    
  }
  constructor (props){
    super(props);
    this.fileRef = createRef();
  }
  triggerClick = () => {
    this.setState({ upload: this.fileRef.current.click() })
  }
  submitVehicle = () => {
    // const token = localStorage.getItem('token');
    const queries = new FormData();
    queries.append('name', this.state.name);
    queries.append('description', this.state.description);
    queries.append('price', this.state.price);
    queries.append('category_id', this.state.category_id);
    queries.append('location_id', this.state.location_id);
    queries.append('stock', this.state.stock);
    queries.append('booking_status_id', this.state.booking_status_id);
  }
  render() {
    const { countUp, countDown } = this.props;
    return (
      <div className="add-vehicle-page">
        <Helmet>
          <title>Add New Vehicle</title>
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
                  <div>

                  </div>
                </Col>
                <Col md={5} className="add-additional-vehicle-details">
                  <Row>
                  <input
                    type="text"
                    className="input-vehicle-name"
                    placeholder="Name (max. 20 words)"
                    onChange={(e) => this.setState({name: e.target.value})}
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
                    onChange={(e) => this.setState({description: e.target.value})}
                  />
                  </Row>
                  <Row>
                  <label className="price-label">Price:</label>
                  <input type="number" min="0" className="input-price" placeholder="Type price..." onChange={(e) => this.setState({price: e.target.value})} />
                  </Row>
                  <Row>
                  <label className="status-label">Status:</label>
                  <select className="pick-status" defaultValue="default-status">
                    <option value="default-status" hidden>Select Status</option>
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
                <select className="add-item-to" defaultValue="addItemTo" style={{width:"25vw"}}>
                  <option value="addItemTo" hidden>Add Item To</option>
                  <option value="1">Car</option>
                  <option value="2">Motorbike</option>
                  <option value="3">Bike</option>
                </select>
                <button className="btn save-new-vehicle" style={{width:"35vw"}}>Save Item</button>
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
  return{
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

export default connect(mapStateToProps, mapDispatchToProps)(AddNewVehicle);