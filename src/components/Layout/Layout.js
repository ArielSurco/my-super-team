import { useContext, Fragment, useLayoutEffect } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { Alert } from '../Alert/Alert';
import { TeamContext } from '../../context/TeamContext';
import './Layout.css';

const Layout = ( props ) => {
    const { errors, removeError } = useContext(TeamContext);

    return (
    <Fragment>
        <Navbar />
        {props.children}
        {/* <Footer /> */}
        {errors.length !== 0 && errors.map((error) => (
            <Alert key={error} message={error} type="error" removeError={removeError}/>
        ))}
    </Fragment>
    )
}

export { Layout };