import React from 'react';
import { HeroCard } from '../../components/HeroCard/HeroCard';
import { TeamInfo } from '../../components/TeamInfo/TeamInfo';
import { TeamContext } from '../../context/TeamContext';
import './Home.css';

const Home = () => {
    const isXSViewport = window.innerWidth < 576;
    const { team } = React.useContext(TeamContext); 
    return (
        <div className="container-fluid home">
            <TeamInfo />
            <div className={`row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-${isXSViewport ? "center" : "start"}`}>
                {team.map( hero => (
                    <HeroCard heroInfo={hero} key={hero.name} />
                ))}
            </div>
        </div>
    )
}

export { Home };