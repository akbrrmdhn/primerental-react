import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

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

import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";

class AppWithRouter extends Component {
    state = {
        token: "",
        isAuthenticated: false,
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
          <PublicRoute exact path="/" restricted={false} component={Home} />
          <PublicRoute exact path="/login" restricted={true} component={Login} />
          <PublicRoute exact path="/signup" restricted={true} component={Signup} />
          <PublicRoute exact path="/forgotpassword" restricted={true} component={ForgotPassword} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/chat" component={Chat} />
          <PrivateRoute exact path="/vehicletype" component={VehicleType}/>
          <PrivateRoute exact path="/viewmore" component={ViewMore} />
          <PrivateRoute exact path="/reservation" component={Reservation} />
          <PrivateRoute exact path="/history" component={History} />
          <PrivateRoute exact path="/payment" component={Payment} />
        </Router>
      </div>
      
    );
  }
}

export default AppWithRouter;
