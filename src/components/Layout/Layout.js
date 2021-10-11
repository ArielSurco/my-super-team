import { useContext, Fragment } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Alert } from '../Alert/Alert';
import { TeamContext } from '../../context/TeamContext';
import './Layout.css';

const Layout = ( props ) => {
    const { alerts, removeAlert } = useContext(TeamContext);
    console.log(alerts);
    return (
    <Fragment>
        <Navbar />
        {props.children}
        {alerts.length !== 0 && alerts.map((alert) => (
            <Alert key={alert.message} message={alert.message} type={alert.type} removeAlert={removeAlert}/>
        ))}
    </Fragment>
    )
}

export { Layout };