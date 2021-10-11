import React from 'react';
import { Link } from 'react-router-dom';
import { useUserState } from '../../hooks/useUserState';
import './Navbar.css';

const Navbar = () => {
    const { session, logout} = useUserState();

    return (
    <nav className="navbar navbar-light navbar-expand-md bg-light fixed-top shadow p-3 mb-5 bg-white rounded">
        <div className="container-fluid">
            <Link className="navbar-brand logo" to="/">
                MST
            </Link>
            <ul className="navbar-nav ms-3">
                {session.isAuth && (
                    <li onClick={logout}>
                    <Link className="nav-link" to="/login">Log out</Link>
                </li>)}
            </ul>
        </div>
    </nav>
    )
}

export { Navbar };