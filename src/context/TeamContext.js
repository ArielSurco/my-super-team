import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TeamContext = React.createContext();

const initialTeam = [
    {"response":"success","id":"1","name":"A-Bomb","powerstats":{"intelligence":"38","strength":"100","speed":"17","durability":"80","power":"24","combat":"64"},"biography":{"full-name":"Richard Milhouse Jones","alter-egos":"No alter egos found.","aliases":["Rick Jones"],"place-of-birth":"Scarsdale, Arizona","first-appearance":"Hulk Vol 2 #2 (April, 2008) (as A-Bomb)","publisher":"Marvel Comics","alignment":"good"},"appearance":{"gender":"Male","race":"Human","height":["6'8","203 cm"],"weight":["980 lb","441 kg"],"eye-color":"Yellow","hair-color":"No Hair"},"work":{"occupation":"Musician, adventurer, author; formerly talk show host","base":"-"},"connections":{"group-affiliation":"Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom","relatives":"Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"},"image":{"url":"https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg"}},
    {"response":"success","id":"480","name":"Mystique","powerstats":{"intelligence":"75","strength":"12","speed":"23","durability":"64","power":"64","combat":"74"},"biography":{"full-name":"Raven Darkholme","alter-egos":"No alter egos found.","aliases":["Mallory Brickman"],"place-of-birth":"-","first-appearance":"(as Raven Darkholme) MS. MARVEL #16, (as Mystique) MS. MARVEL #18","publisher":"Marvel Comics","alignment":"bad"},"appearance":{"gender":"Female","race":"Mutant","height":["5'10","178 cm"],"weight":["120 lb","54 kg"],"eye-color":"Yellow (without irises)","hair-color":"Red / Orange"},"work":{"occupation":"Special operative for Germany and the United States governments, (former) German Freedom Fighter, special operative in the Weapon X Project Team","base":"Arlington, Virginia"},"connections":{"group-affiliation":"Founder and leader of the third Brotherhood of Evil Mutants, now known as Freedom Force; X-Factor, X-Men","relatives":"Rogue (unofficial foster daughter), Ralph Brickman (husband), Gloria Brickman (daughter), Graydon Creed (son, deceased)"},"image":{"url":"https://www.superherodb.com/pictures2/portraits/10/100/817.jpg"}}
]

const TeamProvider = ( {children} ) => {
    const [team, setTeam] = useLocalStorage('team', initialTeam)
    const [errors, setErrors] = React.useState(['The team is full']);
    const canBeAdded = (teamWithNewHero) => {
        const goodAlignment = teamWithNewHero.filter((hero) => hero.biography.alignment === 'good');
        const badAlignment = teamWithNewHero.filter((hero) => hero.biography.alignment === 'bad');
        const heroCanBeAdded = teamWithNewHero.length <= 6 && goodAlignment.length <= 3 && badAlignment.length <= 3;
        if(teamWithNewHero.length > 6) {
            errors.push( new Error('The team is full'));
        } else if(goodAlignment.length > 3){
            errors.push( new Error('Limit of heroes with good orientation reached'))
        } else if(badAlignment.length > 3) {
            errors.push( new Error('Limit of heroes with bad orientation reached'))
        }
        return heroCanBeAdded;
    }
    const removeError = message => {
        const newErrors = errors.filter(errMsg => message !== errMsg);
        setErrors(newErrors);
    }

    const addHero = (hero) => {
        const newTeam = [...team];
        newTeam.push(hero);
        if(canBeAdded(newTeam, hero))
            setTeam(newTeam);
        console.log(team)
        console.log(errors)
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
            errors,
            removeError
        }}>
            {children}
        </TeamContext.Provider>
    )
}

export { TeamContext, TeamProvider };