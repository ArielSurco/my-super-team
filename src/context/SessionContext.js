import React from 'react';
import axios from 'axios';
import { useLocalStorage } from '../hooks/useLocalStorage';

const SessionContext = React.createContext();

const SessionProvider = ( {children} ) => {
    const [session, saveSession] = useLocalStorage('session', {
        token: '',
        isAuthenticated: false
    });

    const login = async (loginData) => {
        try {
            const response = await axios.post("http://challenge-react.alkemy.org/", loginData)
            .then( res => res.data.token );
            saveSession({
                token: response,
                isAuthenticated: true
            })
        } catch(error) {
            console.error( new Error(error) );
        }
    }

    return (
        <SessionContext.Provider value={{
            session,
            login
        }}>
            {children}
        </SessionContext.Provider>
    )
}

export { SessionContext, SessionProvider };