import React from 'react';
import { HeroSearch } from '../../components/HeroSearch/HeroSearch';
import { HeroCard } from '../../components/HeroCard/HeroCard';
import { getData } from '../../helpers/getData';
import { TeamContext } from '../../context/TeamContext';
import './Search.css';

const Search = () => {
    const isXSViewport = window.innerWidth < 576;
    const [heroes, setHeroes] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [searchValue, setSearchValue] = React.useState(null);
    const { errors } = React.useContext(TeamContext);
    console.log(errors);

    const handleSubmit = value => {
        setSearchValue(value)
    };
    React.useEffect(() => {
        const loadHeroes = async () => {
            try {
                const res = await getData('https://www.superheroapi.com/api.php/1972691609555893/search/', searchValue);
                if(!res.data.error) {
                    setHeroes(res.data.results)
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
            <div className={`mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-${isXSViewport ? "center" : "start"}`}>
                {isLoading ? <p>Is loading</p> : heroes.map(hero => (
                    <HeroCard
                    isSearching
                    heroInfo={hero}
                    key={hero.id}
                    />
                ))}
            </div>
        </div>
    )
}

export { Search };