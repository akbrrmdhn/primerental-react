import Axios from "axios";
import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CardComponent from "../components/CardComponent";

export default class ViewMore extends Component {
  state = {
    vehicles: [],
  };
  componentDidMount() {
    Axios.get("http://localhost:8000/vehicles", {
      params: { order_by: "score", sort: "DESC" },
    })
      .then(({ data }) => {
        this.setState({ vehicles: data.result });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const vehicleData = this.state.vehicles;
    return (
      <div className="viewmore-page">
        <Header />
        <main>
          <section className="viewmore-heading">
            <p>Popular in Town</p>
          </section>
          <section className="viewmore-cards">
            <div>
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
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
