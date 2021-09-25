import React from 'react';
import './TeamInfo.css';

const TeamInfo = () => {
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
                                <header className="fs-3 fw-bold">Total Powerstats</header>
                                <div className="container-fluid d-flex justify-content-around my-3 row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                                    <div className="info-value-item pt-3 px-4">
                                        <p className="fs-4"><span className="fw-bold">Intelligence: </span>1000</p>
                                    </div>
                                    <div className="info-value-item pt-3 px-4">
                                        <p className="fs-4"><span className="fw-bold">Intelligence: </span>1000</p>
                                    </div>
                                    <div className="info-value-item pt-3 px-4">
                                        <p className="fs-4"><span className="fw-bold">Intelligence: </span>1000</p>
                                    </div>
                                    <div className="info-value-item pt-3 px-4">
                                        <p className="fs-4"><span className="fw-bold">Intelligence: </span>1000</p>
                                    </div>
                                    <div className="info-value-item pt-3 px-4">
                                        <p className="fs-4"><span className="fw-bold">Intelligence: </span>1000</p>
                                    </div>
                                    <div className="info-value-item pt-3 px-4">
                                        <p className="fs-4"><span className="fw-bold">Intelligence: </span>1000</p>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <header className="fs-3 fw-bold">Averages</header>
                                <div className="container d-flex justify-content-around row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                                    <div className="info-value-item pt-3 px-4">
                                        <p className="fs-4"><span className="fw-bold">Intelligence: </span>1000</p>
                                    </div>
                                    <div className="info-value-item pt-3 px-4">
                                        <p className="fs-4"><span className="fw-bold">Intelligence: </span>1000</p>
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