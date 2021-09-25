import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { SessionContext } from '../../context/SessionContext';

const PrivateRoute = ( props ) => {
    // const { session } = React.useContext(SessionContext);
    const isAuthenticated = true;

    return isAuthenticated ? <Route {...props}/> : <Redirect to="/login"/>
}

export { PrivateRoute };