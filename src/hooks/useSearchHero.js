import React from 'react';
import axios from 'axios';

const useSearchHero = searchValue => {
    const [heroes, setHeroes] = React.useState('');

    const searchHero = async (valueSearched) => {
        try {
            const response = await axios.get(`https://www.superheroapi.com/api.php/1972691609555893/search/${valueSearched}`)
                .then(res => res.json());
            setHeroes(response);
        } catch(error) {
            console.error(new Error(error))
        }
    }

    return [heroes, searchHero];
}

export { useSearchHero }