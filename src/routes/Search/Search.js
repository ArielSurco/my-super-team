import React from 'react';
import { HeroSearch } from '../../components/HeroSearch/HeroSearch';
import { HeroCard } from '../../components/HeroCard/HeroCard';
import { getData } from '../../helpers/getData';
import './Search.css';

// const searchHero = async (valueSearched) => {
//     try {
//         const response = await axios.get(`https://www.superheroapi.com/api.php/1972691609555893/search/${valueSearched}`)
//             .then(res => res.data);
//         return response
//     } catch(error) {
//         console.error(new Error(error))
//     }
// }

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
    // const [heroes, setHeroes] = React.useState({});
    // const [isLoading, setIsLoading] = React.useState(true);
    // React.useEffect(() => {
    //     const loadHeroes = async () => {
    //         try {
    //             const response = await searchHero('bat');
    //             setHeroes(response.results);
    //             setIsLoading(false);
    //         } catch(error) {
    //             console.error(new Error(error));
    //         }
    //     }
    //     loadHeroes();
    // }, [])
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