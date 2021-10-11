import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSearch } from '../../components/HeroSearch/HeroSearch';
import { HeroCard } from '../../components/HeroCard/HeroCard';
import { getData } from '../../helpers/getData';
import './Search.css';

const Search = () => {
    const isXSViewport = window.innerWidth < 576;
    const [heroes, setHeroes] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [searchValue, setSearchValue] = React.useState(null);

    const handleSubmit = value => {
        setSearchValue(value)
    };
    React.useEffect(() => {
        const loadHeroes = async () => {
            try {
                const res = await getData('https://www.superheroapi.com/api.php/1972691609555893/search/', searchValue)
                .then(response => response.data);
                if(!res.error) {
                    setHeroes(res.results);
                    setIsLoading(false);
                }
            } catch(error) {
                console.error(new Error(error))
            }
        }
        loadHeroes();
    }, [searchValue]);

    return (
        <div className="container search-route">
            <HeroSearch searchHero={handleSubmit}/>
            <Link to="/" className="btn btn-primary fs-2 mt-3">Check your team</Link>
            <div className={`mt-3 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-${isXSViewport ? "center" : "start"}`}>
                {!isLoading && (heroes.map(hero => (
                    <HeroCard
                    isSearching
                    heroInfo={hero}
                    key={hero.id}
                    />
                )))}
            </div>
        </div>
    )
}

export { Search };