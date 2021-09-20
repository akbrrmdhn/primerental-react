import React from 'react'
import { Redirect, Route } from 'react-router'
import { useSelector } from 'react-redux';

function PublicRoute({component: Component, restricted, ...rest}) {
    const authState = useSelector(reduxState => reduxState.auth);
    return (
        <Route {...rest} render={props => (
            authState.isLogin && restricted ?
                <Redirect to="/" />
                : <Component {...props} />
        )}/>
    )
}

export default PublicRoute;
