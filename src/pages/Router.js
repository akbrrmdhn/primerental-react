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
import reduxStore from "../redux/store";
import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";
import AddNewVehicle from "./AddNewVehicle";
import { Provider } from "react-redux";
import EditVehicle from "./EditVehicle";

class AppWithRouter extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
      isAuthenticated: false,
    };
  }
  componentDidMount() {
    const data = localStorage.getItem("userToken");
    if (data) {
      this.setState({ isAuthenticated: true });
    }
  }
  render() {
    return (
      <div>
        <Provider store={reduxStore}>
          <Router>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home />
              )}
            />
            {/* <PublicRoute exact path="/" restricted={false} component={Home} /> */}
            <PublicRoute
              path="/login"
              restricted={true}
              component={Login}
              isAuthenticated={this.state.isAuthenticated}
            />
            <PublicRoute
              path="/signup"
              restricted={true}
              component={Signup}
              isAuthenticated={this.state.isAuthenticated}
            />
            <PublicRoute
              path="/forgotpassword"
              restricted={true}
              component={ForgotPassword}
              isAuthenticated={this.state.isAuthenticated}
            />
            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>
          <PrivateRoute path="/chat">
            <Chat />
          </PrivateRoute>
          <PrivateRoute path="/vehicletype">
            <VehicleType />
          </PrivateRoute>
          <PrivateRoute path="/viewmore">
            <ViewMore />
          </PrivateRoute>
          <PrivateRoute path="/reservation/:id" component={Reservation}/>
          <PrivateRoute path="/history">
            <History />
          </PrivateRoute>
          <PrivateRoute path="/payment/:id">
            <Payment />
          </PrivateRoute>
          <PrivateRoute path="/vehicledetail/:id">
            <VehicleDetail />
          </PrivateRoute>
          <PrivateRoute path="/addVehicle">
            <AddNewVehicle />
          </PrivateRoute>
          <PrivateRoute path="/editvehicle/:id">
            <EditVehicle />
          </PrivateRoute>
            {/* <Route path="/profile" component={Profile} />
            <Route path="/chat" component={Chat} />
            <Route path="/vehicletype" component={VehicleType} />
            <Route path="/viewmore" component={ViewMore} />
            <Route path="/reservation/:id" component={Reservation} />
            <Route path="/history" component={History} />
            <Route path="/payment/:id" component={Payment} />
            <Route
              path="/vehicledetail/:id"
              render={(props) => <VehicleDetail {...props} />}
            />
            <Route
              path="/addVehicle"
              component={AddNewVehicle}
              isAuthenticated={this.state.isAuthenticated}
            /> */}
            {/* <Route path="/editvehicle" component={EditVehicle} /> */}
          </Router>
        </Provider>
      </div>
    );
  }
}

export default AppWithRouter;
