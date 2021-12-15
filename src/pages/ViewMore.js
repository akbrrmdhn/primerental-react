import Axios from "axios";
import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CardComponent from "../components/CardComponent";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
const url = process.env.REACT_APP_BASE_URL;

class ViewMore extends Component {
  state = {
    vehicles: [],
  };
  componentDidMount() {
    console.log(this.props.location.state.type);
    const param = this.props.location.state.type;
    if(param === 'Popular in Town'){
      Axios.get(`${url}/vehicles`, {
        params: { order_by: "score", sort: "DESC", limit: 16 },
      })
        .then(({ data }) => {
          this.setState({ vehicles: data.result.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if(param === 'Cars'){
      Axios.get(`${url}/vehicles`, {
        params: { category_id: 1, order_by: "score", sort: "DESC", limit: 16 },
      })
        .then(({ data }) => {
          this.setState({ vehicles: data.result.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if(param === 'Motorbikes'){
      Axios.get(`${url}/vehicles`, {
        params: { category_id: 2, order_by: "score", sort: "DESC", limit: 16 },
      })
        .then(({ data }) => {
          this.setState({ vehicles: data.result.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if(param === 'Bikes'){
      Axios.get(`${url}/vehicles`, {
        params: { category_id: 3, order_by: "score", sort: "DESC", limit: 16 },
      })
        .then(({ data }) => {
          this.setState({ vehicles: data.result.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }

  }
  render() {
    const vehicleData = this.state.vehicles;
    return (
      <div className="viewmore-page">
        <Header />
        <main>
          <section className="popular-title">
              <p className="popular-heading">{this.props.location.state.type}</p>
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

const mapStateToProps = ({auth}) => {
  return{
    auth,
  }
}

const HOC1 = withRouter(ViewMore);
export default connect(mapStateToProps)(HOC1);