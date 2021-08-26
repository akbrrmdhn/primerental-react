import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Login from './Login';
import Profile from './Profile';
import Signup from './Signup';
import Forgot_Password from './Forgot_Password';
import Chat from './Chat';
import Vehicle_Type from './Vehicle_Type';
import Reservation from './Reservation';
import History from './History';
import View_More from './View_More';
import Payment from './Payment';
function AppWithRouter() {
    
    
    // const isLogin = {
    //     status: true,
    // }
    return (
        <Router>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/forgot_password" component={Forgot_Password}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/chat" component={Chat}/>
            <Route path="/vehicle_type" component={Vehicle_Type}/>
            <Route path="/view_more" component={View_More}/>
            <Route path="/reservation" component={Reservation}/>
            <Route path="/history" component={History}/>
            <Route path="/payment" component={Payment}/>
        </Router>
    )
}

export default AppWithRouter;
