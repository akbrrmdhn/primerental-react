import React, { Component } from "react";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import CardComponent from "../components/CardComponent";
import Axios from "axios";
import { Helmet } from "react-helmet";

export default class VehicleType extends Component {
  constructor(props){
    super(props);
    this.state ={
      cars: [],
      motorbikes: [],
      bikes: [],
      score: [],
    }
  }
  
  componentDidMount() {
    const scoreUrl = "http://localhost:8000/vehicles/score";
    Axios.get(scoreUrl, {
      params: { limit: 4 },
    })
      .then(({ data }) => {
        this.setState({ score: data.result });
      })
      .catch((err) => {
        console.log(err);
      });
    const allUrl = "http://localhost:8000/vehicles"
    // Axios.get(typeUrl)
  }
  render() {
    const popularData = this.state.score;
    return (
      <div className="vehicletype">
        <Helmet>
          <title>Prime Rental - Browse Vehicles</title>
        </Helmet>
        <Header isAuthenticated={this.props.isAuthenticated} />
        <main>
          <section className="search-box">
            <Container>
            <form>
              <input className="search-vehicle-type"
                type="text"
                placeholder="Search vehicle (ex. cars, cars name)"
                name="search"
              ></input>
              {/* <button type="submit"></button> */}
            </form>
            </Container>
          </section>
          <section className="popular">
            <div className="popular-heading">Popular in Town</div>
            <div className="popular-cards">
            {popularData.map((data) => {
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
          </section>
          <section className="popular">
            <div className="popular-heading">Cars</div>
            <div className="popular-cards">
            {popularData.map((data) => {
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
          </section>
          <section className="popular">
            <div className="popular-heading">Motorbikes</div>
            <div className="popular-cards">
            {popularData.map((data) => {
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
          </section>
          <section className="popular">
            <div className="popular-heading">Bikes</div>
            <div className="popular-cards">
            {popularData.map((data) => {
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
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
