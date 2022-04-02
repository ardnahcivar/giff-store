import axios from 'axios';

import { getParams, handleErrors } from './../../utils'
import { GIPHY_API_URL, GIPHY_API_KEY } from './../../constants';

const httpOptions = {
    baseURL: GIPHY_API_URL,
    params: {
        api_key: GIPHY_API_KEY
    }
};

const httpInstance = axios.create(httpOptions);

const get = (url, config) => {
    return httpInstance.get(url, getParams(config))
    .then(response => response.data)
    .catch(error => handleErrors(error))
}


const http = {
    get 
}

export default http;
