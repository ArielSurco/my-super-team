import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserState } from '../../hooks/useUserState';

const PrivateRoute = ( props ) => {
    const { session } = useUserState();

    return session.isAuth ? <Route {...props}/> : <Redirect to="/login"/>
}

export { PrivateRoute };