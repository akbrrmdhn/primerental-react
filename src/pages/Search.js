import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { Container } from "react-bootstrap";
import { withRouter } from "react-router";
import CardComponent from "../components/CardComponent";
import axios from "axios";
const url = process.env.REACT_APP_BASE_URL;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: [],
      keyword: '',
      location_id: '',
      category_id: '',
    };
  }
  componentDidMount() {
    const queryList = this.props.location.search;
    let params = new URLSearchParams(this.props.location.search.substring(1));
    console.log("params ", params);
    let category_id = params.get("category_id");
    console.log("kategori: ", category_id);
    let location_id = params.get("location_id");
    console.log("lokasi: ", location_id);
    this.setState({
      category_id: category_id,
      location_id: location_id,
    });
    console.log("list: ", queryList);
    queryList && this.fetchVehicle(queryList);
  }
  fetchVehicle = (query) => {
    axios
      .get(`${url}/vehicles${query}&limit=15`)
      .then(({ data }) => this.setState({search: data.result.data}))
      .catch((error) => console.log(error));
  };
  searchHandler = () => {
    let query = "?";
    if (this.state.keyword) {
      query += `keyword=${this.state.keyword}&`;
    }
    if (this.state.category_id) {
      query += `category_id=${this.state.category_id}&`;
    }
    if (this.state.location_id) {
      query += `location_id=${this.state.location_id}&`;
    }
    this.props.history.push({pathname: '/search', search: `${query.slice(0, -1)}`});
    this.fetchVehicle(query);
  };
  render() {
    const url = process.env.REACT_APP_BASE_URL;
    const vehicleData = this.state.search;
    return (
      <div>
        <Header />
        <main>
          <section className="search-box">
            <div className="search-form">
                <input
                  className="search-vehicle-type"
                  type="text"
                  placeholder="Search vehicle (ex. cars, cars name)"
                  name="search"
                  onChange={(e) => this.setState({keyword: e.target.value})}
                ></input>
                <button className="btn btn-submit" onClick={this.searchHandler}>Search</button>
            </div>
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

export default withRouter(Search);
