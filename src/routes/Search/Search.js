import React from 'react';
import { HeroSearch } from '../../components/HeroSearch/HeroSearch';
import { useSearchHero } from '../../hooks/useSearchHero';
// import { HeroCard } from '../../components/HeroCard/HeroCard';

import './Search.css';

const Search = () => {
    const [heroes, searchHero] = useSearchHero('')
    
    const isXSViewport = window.innerWidth < 576

    return (
        <div className="container search-route">
            <HeroSearch/>
            <div className={`mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-${isXSViewport ? "center" : "start"}`}>
            </div>
        </div>
    )
}

export { Search };