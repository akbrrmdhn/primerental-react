import React, { Component } from "react";
import Footer from "../components/Footer";
import { Card } from "react-bootstrap";
import merapi from "../assets/images/merapi.jpg";
import telukbogam from "../assets/images/teluk-bogam.jpg";
import bromo from "../assets/images/bromo.jpg";
import malioboro from "../assets/images/malioboro.jpg";
import Header from "../components/Header";
import CardComponent from "../components/CardComponent";
import Axios from "axios";

export default class VehicleType extends Component {
  constructor(props){
    super(props);
    this.state ={
      score: [],
    }
  }
  
  componentDidMount() {
    const url = "http://localhost:8000/vehicles";
    Axios.get(url, {
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
      <div className="vehicletype">
        <Header />
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
        </main>
        <Footer />
      </div>
    );
  }
}
