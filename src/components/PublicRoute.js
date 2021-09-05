import React from 'react'
import { Redirect, Route } from 'react-router'

function PublicRoute({component: Component, restricted, ...rest}) {
    const token = localStorage.getItem("userToken"); 
    return (
        <Route {...rest} render={props => (
            token && restricted ?
                <Redirect to="/" />
                : <Component {...props} />
        )}/>
    )
}

export default PublicRoute
