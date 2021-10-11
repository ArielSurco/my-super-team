import React from 'react';
import { Link } from 'react-router-dom';
import { HeroCard } from '../../components/HeroCard/HeroCard';
import { TeamInfo } from '../../components/TeamInfo/TeamInfo';
import { TeamContext } from '../../context/TeamContext';
import './Home.css';

const Home = () => {
    const isXSViewport = window.innerWidth < 576;
    const { team, alerts, removeAlert } = React.useContext(TeamContext);
    React.useEffect(() => {
        alerts.forEach(alert => {
            removeAlert(alert.message);
        })
    })
    return (
        <div className="container-fluid home">
            <TeamInfo />
            {(team.length!==0 && team.length < 6) && <p className="fs-3 mt-3"><Link to="/search" className="text-decoration-none">Search</Link> more heroes to add</p>}
            {team.length !== 0 ? (
            <div className={`mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-${isXSViewport ? "center" : "start"}`}>            
                {team.map( hero => (
                    <HeroCard heroInfo={hero} key={hero.name} />
                ))}
            </div>)
            : <p className="fs-3 mt-3">Your team is empty, <Link to="/search" className="text-decoration-none">search</Link> a hero to add</p> }
        </div>
    )
}

export { Home };