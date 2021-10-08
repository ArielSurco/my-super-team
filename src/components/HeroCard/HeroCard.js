import React from 'react';
import { TeamContext } from '../../context/TeamContext';
import { StatsChart } from '../StatsChart/StatsChart';
import './HeroCard.css';

const HeroCard = props => {
    const { deleteHero } = React.useContext(TeamContext);
    const { id, name, powerstats, image } = props.heroInfo;
    const powerstatsNames = Object.keys(powerstats);
    const powerstatsValues = Object.values(powerstats);

    return (
        <div className="col hero-container">
            <div className="hero-card">
                <div className="flip-card w-100">
                    <div className="flip-card__front">
                        <img className="front__image" src={image.url} alt={name}/>
                        <h3 className="hero-name fw-normal">{name}</h3>
                    </div>
                    <div className="flip-card__back">
                        <StatsChart labels={powerstatsNames} values={powerstatsValues}/>    
                    </div>
                </div>
            </div>
        </div>
    )
}

// const HeroCard = ( props ) => {
//     const { deleteHero } = React.useContext(TeamContext); 
//     const {id, name, powerstats, image} = props.heroInfo;

//     const imgStyles = {
//         width: '90%',
//         height: '220px',
//         margin: '5% auto',
//         objectFit: 'cover',
//         objectPosition: 'center'
//     }

//     const powerstatsNames = Object.keys(powerstats);
//     const powerstatsValues = Object.values(powerstats); 

//     return (
//         <div className="col hero-container">
//             <div className="card hero-container__hero-card w-100 mb-5">
//                 <img src={image.url} style={imgStyles} alt="" className="card-img-top mw-75" />
//                 <div className="card-body shadow p-3 bg-body rounded fs-4">
//                     <h5 className="card-title mb-3 fs-2">{name}</h5>
//                     <div className="card-header fw-bold bg-light">
//                         PowerStats
//                     </div>
//                     <ul className="list-group list-group-flush mb-4">
//                         {
//                             powerstatsNames.map((powerstatName, i) => (
//                                 <li className="list-group-item hero-powerstat" key={powerstatName}>
//                                     <p className="d-inline-block col-10 m-0">{`${powerstatName}:`}</p>
//                                     <span className="">
//                                         {powerstatsValues[i]}
//                                     </span>
//                                 </li>
//                             ))
//                         }
//                     </ul>
//                     <div className="row d-flex justify-content-around mb-4">
//                         <button className="btn btn-primary col-4 fs-4">See details</button>
//                         <button className="btn btn-danger col-4 fs-4" onClick={() => deleteHero(id)}>Remove</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export { HeroCard };