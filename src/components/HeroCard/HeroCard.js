import React from 'react';
import { TeamContext } from '../../context/TeamContext';
import { StatsChart } from '../StatsChart/StatsChart';
import './HeroCard.css';

const HeroCard = props => {
    const { deleteHero, addHero } = React.useContext(TeamContext);
    const { id, name, powerstats, image } = props.heroInfo;
    const powerstatsNames = Object.keys(powerstats);
    const powerstatsValues = Object.values(powerstats);

    return (
        <div className="col hero-container">
            <div className="hero-card shadow bg-light">
                <div className="flip-card w-100">
                    <div className="flip-card__front">
                        <img className="front__image" src={image.url} alt={name}/>
                        <h2 className="hero-name fw-normal">{name}</h2>
                    </div>
                    <div className="flip-card__back">
                        <h2 className="text-center mt-3" >{name}</h2>
                        <StatsChart className="mx-auto mt-5" width='95%' height='50%' labels={powerstatsNames} values={powerstatsValues}/>    
                        <div className="button-group row d-flex justify-content-around">
                            <a className="btn btn-primary col-4 fs-4">Details</a>
                            {props.isSearching ? 
                            <button className="btn btn-success col-4 fs-4" onClick={() => addHero(props.heroInfo)}>Add</button>
                            : <button className="btn btn-danger col-4 fs-4" onClick={() => deleteHero(id)}>Remove</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { HeroCard };