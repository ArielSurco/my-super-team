import React from 'react';
import './HeroSearch.css';

const HeroSearch = () => {
    return (
        <form action="">
            <div className="form-group d-flex justify-content-center">
                <input 
                type="text" 
                className="search-input d-inline-block form-control fs-2" 
                id="search"
                name="search"
                placeholder="Search"/>
                <button 
                type="submit"
                className="btn btn-primary search-button">
                    <i className="search-icon"></i>
                </button>
            </div>
        </form>
    )
}

export { HeroSearch };