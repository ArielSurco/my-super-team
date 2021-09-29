import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import './Layout.css';

const Layout = ( props ) => {
    return (
    <React.Fragment>
        <Navbar />
        {props.children}
        <Footer />
    </React.Fragment>
    )
}

export { Layout };