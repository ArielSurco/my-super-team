import axios from 'axios';
import { useLocalStorage } from './useLocalStorage';
import { TeamContext } from '../context/TeamContext';
import { useContext } from 'react';

const useUserState = () => {
    const { addAlert } = useContext(TeamContext);
    const LSsession = localStorage.getItem('session')
    const initialSession = LSsession ? JSON.parse(LSsession) : {token: '', isAuth: false};
    const [session, saveSession] = useLocalStorage('session', initialSession);

    const baseURL = process.env.REACT_APP_BASE_URL;
    const login = async (loginData) => {
        try {
            const response = await axios.post(baseURL, loginData)
            .then( res => res.data );
            if(!response.error)
            {
                addAlert("Successful login", 'success')
                saveSession({
                    token: response.token,
                    isAuth: true
                });
                window.location.pathname="/"
            }
        } catch(error) {
            addAlert("Wrong email or password", 'error');
        }
    }

    const logout = () => {
        saveSession({token:'', isAuth: false});
    }

    return {session, login, logout};
}

export { useUserState };