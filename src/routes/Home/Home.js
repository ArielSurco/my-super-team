import React from 'react';
import { HeroCard } from '../../components/HeroCard/HeroCard';
import { TeamInfo } from '../../components/TeamInfo/TeamInfo';
import './Home.css';

const Home = () => {
    const isXSViewport = window.innerWidth < 576
    return (
        <div className="container-fluid home">
            <TeamInfo />
            <div className={`hero-list row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-${isXSViewport ? "center" : "start"}`}>
                <HeroCard/>
                <HeroCard/>
                <HeroCard/>
                <HeroCard/>
                <HeroCard/>
            </div>
        </div>
    )
}

export { Home };