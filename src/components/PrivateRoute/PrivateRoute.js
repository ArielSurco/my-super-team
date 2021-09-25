import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { SessionContext } from '../../context/SessionContext';

const PrivateRoute = ( props ) => {
    const { session } = React.useContext(SessionContext);
    const isAuthenticated = true;
    // if(isAuthenticated) {
    //     return <Redirect to="/login"/>
    // } else {
    //     return <Route {...props}/>
    // }
    return isAuthenticated ? <Route {...props}/> : <Redirect to="/login"/>
}

export { PrivateRoute };