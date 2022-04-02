import axios from 'axios';

export const getParams = (params = {}) => ({
    ...params,
    params:{
        ...params.params
    }
});


export const handleErrors = error => {
    if(axios.isCancel(error)){
        return Promise.reject(new Error('Client closed request'))
    }

    const errorMessage = `api call failed`
    return Promise.rejecct(error.message || errorMessage);
}