import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import Chat from "./Chat";
import VehicleType from "./VehicleType";
import Reservation from "./Reservation";
import History from "./History";
import ViewMore from "./ViewMore";
import Payment from "./Payment";
import VehicleDetail from "./VehicleDetail";

import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";
import AddNewVehicle from "./AddNewVehicle";

class AppWithRouter extends Component {
    constructor(){
      super();
      this.state = {
        token: "",
        isAuthenticated: false,
      }
    }
    componentDidMount(){
        const data = localStorage.getItem("userToken");
        if(data){
            this.setState({isAuthenticated: true});
        }
    }
    render() {
    return (
      <div>
        <Router>
          <Route exact path="/" render={(props) => (<Home isAuthenticated={this.state.isAuthenticated} {...props} />)} />
          {/* <PublicRoute exact path="/" restricted={false} component={Home} /> */}
          <PublicRoute exact path="/login" restricted={true} component={Login} isAuthenticated={this.state.isAuthenticated} />
          <PublicRoute exact path="/signup" restricted={true} component={Signup} isAuthenticated={this.state.isAuthenticated} />
          <PublicRoute exact path="/forgotpassword" restricted={true} component={ForgotPassword} isAuthenticated={this.state.isAuthenticated} />
          <PrivateRoute exact path="/profile" component={Profile} isAuthenticated={this.state.isAuthenticated} />
          <PrivateRoute exact path="/chat" component={Chat} isAuthenticated={this.state.isAuthenticated} />
          <PrivateRoute exact path="/vehicletype" component={VehicleType} isAuthenticated={this.state.isAuthenticated} />
          <PrivateRoute exact path="/viewmore" component={ViewMore} isAuthenticated={this.state.isAuthenticated} />
          <PrivateRoute exact path="/reservation/:id" component={Reservation} isAuthenticated={this.state.isAuthenticated} />
          <PrivateRoute exact path="/history" component={History} isAuthenticated={this.state.isAuthenticated} />
          <PrivateRoute exact path="/payment/:id" component={Payment} isAuthenticated={this.state.isAuthenticated} />
          <PrivateRoute exact path="/vehicledetail/:id" component={VehicleDetail} isAuthenticated={this.state.isAuthenticated} />
          <PrivateRoute exact path="/addVehicle" component={AddNewVehicle} isAuthenticated={this.state.isAuthenticated} />
          {/* <Route exact path="/profile" component={Profile} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/vehicletype" component={VehicleType} />
          <Route exact path="/viewmore" component={ViewMore} />
          <Route exact path="/reservation/:id" component={Reservation} />
          <Route exact path="/history" component={History} />
          <Route exact path="/payment/:id" component={Payment} />
          <Route exact path="/vehicledetail/:id" render={(props) => <VehicleDetail {...props} />} /> */}
        </Router>
      </div>
      
    );
  }
}

export default AppWithRouter;
