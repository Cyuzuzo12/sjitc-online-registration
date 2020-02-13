import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from "../Auth";

const PrivateRoute = ({ component: Component,...rest}) => {
    return <Route
    {...rest}
    render={props =>
    Auth.getAuth() ? (
    <Component {...props} />
    ) : (
    <Redirect
    to="/sign-in"
    />
    )
    }
    />
}

export default PrivateRoute;