import React from 'react';
import { TeamContext } from '../../context/TeamContext';
import './TeamInfo.css';

const TeamInfo = () => {
    const getPropertiesOf = (objectList, property, cb = x => x) => objectList.map(object => cb(object[property]));
    const average = (list) => list.reduce((a,b) => a + b) / list.length;

    const { team } = React.useContext(TeamContext);
    const powerstatsList = getPropertiesOf(team, "powerstats")
    const powerstatsKeys = team.length!==0 ? Object.keys(powerstatsList[0]) : [];
    const totalPowerstats = powerstatsKeys.map(powerstatKey => {
        const tPowerstat = powerstatsList.map(powerstat => parseInt(powerstat[powerstatKey]))
        return tPowerstat.reduce((a, b) => a + b);
    });
    const maxIndex = totalPowerstats.findIndex(value => value === Math.max(...totalPowerstats));

    const getMeasure = (arr) => {
        const weight = arr.filter(value => value.includes("kg"));
        const height = arr.filter(value => value.includes("cm"));
        if(weight.length>0)
            return parseInt(weight);
        else if(height.length>0)
            return parseInt(height);
    }
    const weightList = getPropertiesOf(getPropertiesOf(team, "appearance"), "weight", getMeasure);
    const heightList = getPropertiesOf(getPropertiesOf(team, "appearance"), "height", getMeasure);

    return (
        <div className="team-info-container col-12 col-xl-10 col-xxl-9 accordion shadow mb-5 justify-self-center" id="teamInfoAccordion">
            <div className="accordion-item ">
                <header className="accordion-header" id="headerTeamInfo">
                    <button className="accordion-button collapsed fs-3 fw-bold fst-italic" data-bs-toggle="collapse" data-bs-target="#teamInfo" aria-expanded="false" aria-controls="teamInfo">
                        Team Information
                    </button>
                </header>
                <div className="accordion-collapse collapse" id="teamInfo" aria-labelledby="headerTeamInfo" data-bs-parent="#teamInfoAccordion">
                    <div className="accordion-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <p className="fs-3 fw-bold">Team Category:
                                    <span className="fw-normal text-capitalize">
                                         {` ${team.length!== 0 ? powerstatsKeys[maxIndex] : ''}`}
                                    </span>
                                </p>
                            </li>
                            <li className="list-group-item">
                                <header className="fs-3 fw-bold">Total Powerstats</header>
                                <div className="container-fluid d-flex justify-content-around my-3 row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                                    {powerstatsKeys.map((powerstatKey, i) => (
                                        <div className="info-value-item pt-3 px-4" key={powerstatKey} >
                                            <p className="fs-4"><span className="fw-bold">{powerstatKey}: </span>{totalPowerstats[i]}</p>
                                        </div>
                                    ))}
                                </div>
                            </li>
                            <li className="list-group-item">
                                <header className="fs-3 fw-bold">Averages</header>
                                <div className="container d-flex justify-content-around row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                                    <div className="info-value-item pt-3 px-4">
                                        <p className="fs-4"><span className="fw-bold">Weight: </span>{team.length!==0 ? average(weightList).toFixed() : 0}kg</p>
                                    </div>
                                    <div className="info-value-item pt-3 px-4">
                                        <p className="fs-4"><span className="fw-bold">Height: </span>{team.length!==0 ? average(heightList).toFixed() : 0}cm</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { TeamInfo };