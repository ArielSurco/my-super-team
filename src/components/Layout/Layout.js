import { useContext, Fragment, useLayoutEffect } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { Alert } from '../Alert/Alert';
import { TeamContext } from '../../context/TeamContext';
import './Layout.css';

const Layout = ( props ) => {
    const { alerts, addAlert, removeAlert } = useContext(TeamContext);
    useLayoutEffect(() => {
        addAlert("Algo esta mal", 'error')
        console.log(alerts)
    },[])
    return (
    <Fragment>
        <Navbar />
        {props.children}
        {/* <Footer /> */}
        {alerts.length !== 0 && alerts.map((alert) => (
            <Alert key={alert.message} message={alert.message} type={alert.type} removeAlert={removeAlert}/>
        ))}
    </Fragment>
    )
}

export { Layout };