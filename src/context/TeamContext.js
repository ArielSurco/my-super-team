import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Axios from 'axios';
import axios from 'axios';

const TeamContext = React.createContext();

const TeamProvider = ( {children} ) => {
    const [team, setTeam] = useLocalStorage('team', [])

    const searchHero = async (valueSearched) => {
        try {
            const response = await axios.get(`https://www.superheroapi.com/api.php/1972691609555893/search/${valueSearched}`)
                .then(res => res.json())
        } catch(error) {
            console.error(new Error(error))
        }
    }

    const addHero = (hero) => {
        const newTeam = [...team];
        newTeam.push(hero);
        setTeam(newTeam);
    }

    const deleteHero = (hero) => {
        const heroIndex = team.findIndex(currentHero => currentHero.id === hero.id);
        const newTeam = [...team];
        newTeam.splice(heroIndex, 1);
        setTeam(newTeam);
    }

    return (
        <TeamContext.Provider value={{
            team,
            addHero,
            deleteHero
        }}>
            {children}
        </TeamContext.Provider>
    )
}

export { TeamContext, TeamProvider };