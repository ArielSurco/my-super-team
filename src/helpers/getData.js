import Axios from 'axios';

const getData = async (url, valueSearched) => {
    try {
        const response = await Axios.get(`${url+valueSearched}`)
            .then(res => res);
        return response;
    } catch(error) {
        console.error(new Error(error))
    }
}

export {getData};