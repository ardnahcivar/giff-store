import { getParams, handleErrors } from './../../utils'
import axios from 'axios';

const httpOptions = {
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: 'prZLU2797UYYFLpVZcdVQvocUzBkna8p'
    }
};

const httpInstance = axios.create(httpOptions);

const get = (url, config) => {

    console.log(getParams(config))
    return httpInstance.get(url, getParams(config))
    .then(response => response.data)
    .catch(error => handleErrors(error))
}


const http = {
    get 
}

export default http;
