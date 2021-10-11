import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TeamContext = React.createContext();

const TeamProvider = ( {children} ) => {
    const [team, setTeam] = useLocalStorage('team', [])
    const [alerts, setAlerts] = React.useState([]);
    
    const canBeAdded = (teamWithNewHero) => {
        const goodAlignment = teamWithNewHero.filter((hero) => hero.biography.alignment === 'good');
        const badAlignment = teamWithNewHero.filter((hero) => hero.biography.alignment === 'bad');
        const heroCanBeAdded = teamWithNewHero.length <= 6 && goodAlignment.length <= 3 && badAlignment.length <= 3;
        
        if(teamWithNewHero.length > 6) {
            addAlert('The team is full', 'error');
        } else if(goodAlignment.length > 3){
            addAlert('Limit of heroes with good orientation reached', 'error');
        } else if(badAlignment.length > 3) {
            addAlert('Limit of heroes with bad orientation reached', 'error');
        }
        return heroCanBeAdded;
    }

    const addAlert = (message, type) => {
        const newAlerts = [...alerts];
        newAlerts.push({
            message: message,
            type: type
        });
        setAlerts(newAlerts);
    }

    const removeAlert = message => {
        const newAlerts = alerts.filter(alert => alert.message !== message);
        setAlerts(newAlerts);
    }

    const addHero = (hero) => {
        const newTeam = [...team];
        newTeam.push(hero);
        if(canBeAdded(newTeam)){
            setTeam(newTeam)
            addAlert('Hero added successfully', 'success')
        }
    }

    const deleteHero = (heroID) => {
        const heroIndex = team.findIndex(currentHero => currentHero.id === heroID);
        const newTeam = [...team];
        newTeam.splice(heroIndex, 1);
        setTeam(newTeam);
    }

    return (
        <TeamContext.Provider value={{
            team,
            canBeAdded,
            addHero,
            deleteHero,
            alerts,
            addAlert,
            removeAlert
        }}>
            {children}
        </TeamContext.Provider>
    )
}

export { TeamContext, TeamProvider };