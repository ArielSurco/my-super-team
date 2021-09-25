import React from 'react';
import './HeroCard.css';

const HeroCard = () => {
    const imgStyles = {
        width: '90%',
        height: '220px',
        margin: '5% auto',
        objectFit: 'cover',
        objectPosition: 'center'
    }

    return (
        <div className="col hero-card">
            <div className="card w-100 mb-5">
                <img src="https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg" style={imgStyles} alt="" className="card-img-top mw-75" />
                <div className="card-body shadow p-3 bg-body rounded fs-4">
                    <h5 className="card-title fs-2">Nombre Personaje</h5>
                    <div className="card-header fw-bold bg-light">
                        PowerStats
                    </div>
                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item">Intelligence: 100</li>
                    </ul>
                    <div className="row d-flex justify-content-around mb-4">
                        <button className="btn btn-primary col-4 fs-4">See details</button>
                        <button className="btn btn-danger col-4 fs-4">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { HeroCard };