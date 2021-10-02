import React from 'react';
import { HeroSearch } from '../../components/HeroSearch/HeroSearch';
import axios from 'axios';
import { HeroCard } from '../../components/HeroCard/HeroCard';
import './Search.css';

const searchHero = async (valueSearched) => {
    try {
        const response = await axios.get(`https://www.superheroapi.com/api.php/1972691609555893/search/${valueSearched}`)
            .then(res => res.data);
        return response
    } catch(error) {
        console.error(new Error(error))
    }
}

const Search = () => {
    const [heroes, setHeroes] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);
    const isXSViewport = window.innerWidth < 576
    React.useEffect(() => {
        const loadHeroes = async () => {
            try {
                const response = await searchHero('bat');
                setHeroes(response.results);
                setIsLoading(false);
            } catch(error) {
                console.error(new Error(error));
            }
        }
        loadHeroes();
    }, [])

    return (
        <div className="container search-route">
            <HeroSearch searchHero={searchHero} />
            <div className={`mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-${isXSViewport ? "center" : "start"}`}>
                {isLoading ? null : heroes.map(hero => (
                    <HeroCard
                    heroInfo={hero}
                    key={hero.id}
                    />
                ))}
            </div>
        </div>
    )
}

export { Search };