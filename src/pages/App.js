import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from './Login';
function AppWithRouter() {
    return (
        <Router>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
        </Router>
    )
}

export default AppWithRouter;
