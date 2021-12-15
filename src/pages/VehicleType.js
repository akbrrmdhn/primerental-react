import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CardComponent from "../components/CardComponent";
import Axios from "axios";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class VehicleType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      motorbikes: [],
      bikes: [],
      score: [],
    };
  }

  componentDidMount() {
    const url = process.env.REACT_APP_BASE_URL;
    Axios.get(`${url}/vehicles`, {
      params: { category_id: 1, limit: 4, order_by: "v.score", sort: "DESC" },
    })
      .then(({ data }) => {
        console.log("datanya ", data);
        this.setState({ cars: data.result.data });
      })
      .catch((err) => {
        console.log(err);
      });
    Axios.get(`${url}/vehicles`, {
      params: { category_id: 2, limit: 4, order_by: "v.score", sort: "DESC" },
    })
      .then(({ data }) => {
        console.log("datanya ", data);
        this.setState({ motorbikes: data.result.data });
      })
      .catch((err) => {
        console.log(err);
      });
    Axios.get(`${url}/vehicles`, {
      params: { category_id: 3, limit: 4, order_by: "v.score", sort: "DESC" },
    })
      .then(({ data }) => {
        console.log("datanya ", data);
        this.setState({ bikes: data.result.data });
      })
      .catch((err) => {
        console.log(err);
      });
    Axios.get(`${url}/vehicles`, {
      params: { limit: 4, order_by: "v.score", sort: "DESC" },
    })
      .then(({ data }) => {
        console.log("datanya ", data);
        this.setState({ score: data.result.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const popularData = this.state.score;
    const carsData = this.state.cars;
    const motorbikesData = this.state.motorbikes;
    const bikesData = this.state.bikes;
    const url = process.env.REACT_APP_BASE_URL;
    return (
      <div className="vehicletype">
        <Helmet>
          <title>Prime Rental - Browse Vehicles</title>
        </Helmet>
        <Header isAuthenticated={this.props.isAuthenticated} />
        <main>
          <section className="popular">
            <div className="popular-title">
              <p className="popular-heading">Popular in Town</p>
              <button className="btn view-more" onClick={() => this.props.history.push('/viewmore', {type: 'Popular in Town'})}>View More {">"}</button>
            </div>
            <div className="popular-cards">
              {popularData.map((data) => {
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
          <section className="popular">
            <div className="popular-title">
              <p className="popular-heading">Cars</p>
              <button className="btn view-more" onClick={() => this.props.history.push('/viewmore', {type: 'Cars'})}>View More {">"}</button>
            </div>
            <div className="popular-cards">
            {carsData.map((data) => {
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
          <section className="popular">
          <div className="popular-title">
              <p className="popular-heading">Motorbikes</p>
              <button className="btn view-more" onClick={() => this.props.history.push('/viewmore', {type: 'Motorbikes'})}>View More {">"}</button>
            </div>
            <div className="popular-cards">
            {motorbikesData.map((data) => {
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
          <section className="popular">
          <div className="popular-title">
              <p className="popular-heading">Bikes</p>
              <button className="btn view-more" onClick={() => this.props.history.push('/viewmore', {type: 'Bikes'})}>View More {">"}</button>
            </div>
            <div className="popular-cards">
            {bikesData.map((data) => {
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

const mapStateToProps = ({auth}) => {
  return {
    auth,
  }
}

const HOC1 = withRouter(VehicleType);
export default connect(mapStateToProps)(HOC1);