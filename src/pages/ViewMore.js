import Axios from "axios";
import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CardComponent from "../components/CardComponent";
const url = process.env.REACT_APP_BASE_URL;

export default class ViewMore extends Component {
  state = {
    vehicles: [],
  };
  componentDidMount() {

    Axios.get(`${url}/vehicles`, {
      params: { order_by: "score", sort: "DESC", limit: 12 },
    })
      .then(({ data }) => {
        this.setState({ vehicles: data.result.data });
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
            <div className="popular-cards">
              {vehicleData.map((data) => {
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
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
