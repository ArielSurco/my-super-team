import React from 'react';
import { Redirect } from 'react-router';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { useUserState } from '../../hooks/useUserState';

const Login = () => {
    const { session } = useUserState();
    return session.isAuth ? <Redirect to="/"/> : <LoginForm/>
}

export { Login };