import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ path, exact, component: Component, isAuthenticated, ...rest}) {
    return (<Route path={path} exact={exact || false} render={props => (
        isAuthenticated ?
        <Component {...props} {...rest} />
        : <Redirect to="login" />
    )}
    />);
}

export default PrivateRoute;
