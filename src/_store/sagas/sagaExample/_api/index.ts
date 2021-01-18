import axios from 'axios';

export const fetchSagaExampleApi = () => {
    return axios({
        url: 'https://reqres.in/api/unknown',
        method: 'get'
    });
};