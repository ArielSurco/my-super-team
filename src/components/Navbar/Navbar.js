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
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navMenu" id="navMenu">
                {/* <Link className="btn btn-outline-success login-btn" to="/login">
                    Logout
                </Link> */}
                <ul className="navbar-nav ms-3">
                    {session.isAuth ? (
                    <li className="nav-item" onClick={logout}>
                        <Link className="nav-link" to="/login">Logout</Link>
                    </li>) : null}
                </ul>
            </div>
        </div>
    </nav>
    )
}

export { Navbar };