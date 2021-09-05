import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Header } from "../components/Header";

class Redux extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState,
    };
};

export default connect(mapStateToProps)(Redux);