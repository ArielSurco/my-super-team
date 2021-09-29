import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TeamContext = React.createContext();

const initialTeam = [
    {"response":"success","id":"1","name":"A-Bomb","powerstats":{"intelligence":"38","strength":"100","speed":"17","durability":"80","power":"24","combat":"64"},"biography":{"full-name":"Richard Milhouse Jones","alter-egos":"No alter egos found.","aliases":["Rick Jones"],"place-of-birth":"Scarsdale, Arizona","first-appearance":"Hulk Vol 2 #2 (April, 2008) (as A-Bomb)","publisher":"Marvel Comics","alignment":"good"},"appearance":{"gender":"Male","race":"Human","height":["6'8","203 cm"],"weight":["980 lb","441 kg"],"eye-color":"Yellow","hair-color":"No Hair"},"work":{"occupation":"Musician, adventurer, author; formerly talk show host","base":"-"},"connections":{"group-affiliation":"Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom","relatives":"Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"},"image":{"url":"https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg"}},
    {"response":"success","id":"480","name":"Mystique","powerstats":{"intelligence":"75","strength":"12","speed":"23","durability":"64","power":"64","combat":"74"},"biography":{"full-name":"Raven Darkholme","alter-egos":"No alter egos found.","aliases":["Mallory Brickman"],"place-of-birth":"-","first-appearance":"(as Raven Darkholme) MS. MARVEL #16, (as Mystique) MS. MARVEL #18","publisher":"Marvel Comics","alignment":"bad"},"appearance":{"gender":"Female","race":"Mutant","height":["5'10","178 cm"],"weight":["120 lb","54 kg"],"eye-color":"Yellow (without irises)","hair-color":"Red / Orange"},"work":{"occupation":"Special operative for Germany and the United States governments, (former) German Freedom Fighter, special operative in the Weapon X Project Team","base":"Arlington, Virginia"},"connections":{"group-affiliation":"Founder and leader of the third Brotherhood of Evil Mutants, now known as Freedom Force; X-Factor, X-Men","relatives":"Rogue (unofficial foster daughter), Ralph Brickman (husband), Gloria Brickman (daughter), Graydon Creed (son, deceased)"},"image":{"url":"https://www.superherodb.com/pictures2/portraits/10/100/817.jpg"}},
    {"response":"success","id":"394","name":"Kraven II","powerstats":{"intelligence":"50","strength":"34","speed":"23","durability":"28","power":"43","combat":"85"},"biography":{"full-name":"Alyosha Kravinoff","alter-egos":"No alter egos found.","aliases":["-"],"place-of-birth":"-","first-appearance":"Spectacular Spider-Man #243 (1997)","publisher":"Marvel Comics","alignment":"bad"},"appearance":{"gender":"Male","race":"Human","height":["6'3","191 cm"],"weight":["220 lb","99 kg"],"eye-color":"Brown","hair-color":"Black"},"work":{"occupation":"-","base":"-"},"connections":{"group-affiliation":"Formerly the Sinister Six","relatives":"Sergei Kravinoff (Kraven the Hunter, father, deceased), unidentified mother, Vladimir Kravinoff (Grim Hunter, half-brother, deceased), Nedrocci Tannengarden (half-brother, deceased), Dmitri Smerdyakov"},"image":{"url":"https://www.superherodb.com/pictures2/portraits/10/100/1034.jpg"}},
    {"response":"success","id":"13","name":"Ajax","powerstats":{"intelligence":"56","strength":"48","speed":"35","durability":"80","power":"34","combat":"55"},"biography":{"full-name":"Francis","alter-egos":"No alter egos found.","aliases":["Frankie","the A-Man","the Attending"],"place-of-birth":"-","first-appearance":"Deadpool #14 (March, 1998)","publisher":"Marvel Comics","alignment":"bad"},"appearance":{"gender":"Male","race":"Cyborg","height":["6'4","193 cm"],"weight":["200 lb","90 kg"],"eye-color":"Brown","hair-color":"Black"},"work":{"occupation":"-","base":"-"},"connections":{"group-affiliation":"Formerly Weapon X","relatives":"-"},"image":{"url":"https://www.superherodb.com/pictures2/portraits/10/100/10422.jpg"}},
    {"response":"success","id":"490","name":"Nightcrawler","powerstats":{"intelligence":"50","strength":"10","speed":"47","durability":"14","power":"76","combat":"80"},"biography":{"full-name":"Kurt Wagner","alter-egos":"No alter egos found.","aliases":["-"],"place-of-birth":"Somewhere in the Bavarian Alps","first-appearance":"GIANT-SIZE X-MEN #1","publisher":"Marvel Comics","alignment":"good"},"appearance":{"gender":"Male","race":"null","height":["5'9'","175 cm"],"weight":["195 lb","88 kg"],"eye-color":"Yellow","hair-color":"Indigo"},"work":{"occupation":"Adventurer, Teacher","base":"Xavier Institute for Higher Learning, Salem Center, Westchester County, New York (former) Muir Island, Scotland; Braddock Lighthouse"},"connections":{"group-affiliation":"X-Men, formerly Excalibur","relatives":"Eric Wagner (father, deceased), Margali Szardos (foster mother), Jimaine Szardos (Daytripper, alias Amanda Sefton, foster sister), Stefan Szardos (foster brother, deceased), Mystique (mother), Graydon Creed (half-brother, deceased)."},"image":{"url":"https://www.superherodb.com/pictures2/portraits/10/100/107.jpg"}},
    {"response":"success","id":"294","name":"Gorilla Grodd","powerstats":{"intelligence":"81","strength":"53","speed":"33","durability":"70","power":"100","combat":"65"},"biography":{"full-name":"Grodd","alter-egos":"No alter egos found.","aliases":["William Dawson","King Grodd","Gorilla Grodd","Grodd-Son"],"place-of-birth":"-","first-appearance":"Flash #106 (May, 1959)","publisher":"DC Comics","alignment":"bad"},"appearance":{"gender":"Male","race":"Gorilla","height":["6'6","198 cm"],"weight":["600 lb","270 kg"],"eye-color":"Yellow","hair-color":"Black"},"work":{"occupation":"-","base":"Gorilla City, Africa"},"connections":{"group-affiliation":"-","relatives":"Boka (wife, separated), Gorbzil Mammit (son), Sam Simeon (grandson)"},"image":{"url":"https://www.superherodb.com/pictures2/portraits/10/100/694.jpg"}}
]

const TeamProvider = ( {children} ) => {
    const [team, setTeam] = useLocalStorage('team', initialTeam)

    const validateHero = (heroName) => {
        const heroIndex = team.findIndex(hero => hero.name === heroName);
        return heroIndex !== -1
    }

    const addHero = (hero) => {
        const newTeam = [...team];
        newTeam.push(hero);
        setTeam(newTeam);
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
            validateHero,
            addHero,
            deleteHero
        }}>
            {children}
        </TeamContext.Provider>
    )
}

export { TeamContext, TeamProvider };