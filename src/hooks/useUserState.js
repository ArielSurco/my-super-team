import axios from 'axios';
import { useLocalStorage } from './useLocalStorage';

const useUserState = () => {
    const LSsession = localStorage.getItem('session')
    const initialSession = LSsession ? JSON.parse(LSsession) : {token: '', isAuth: false};
    const [session, saveSession] = useLocalStorage('session', initialSession);

    const baseURL = process.env.REACT_APP_BASE_URL;
    const login = async (loginData) => {
        try {
            const response = await axios.post(baseURL, loginData)
            .then( res => res.data.token );
            saveSession({
                token: response,
                isAuth: true
            });
            window.location.pathname="/"
        } catch(error) {
            console.error(error);
        }
    }

    const logout = () => {
        saveSession({token:'', isAuth: false});
    }

    return {session, login, logout};
}

export { useUserState };