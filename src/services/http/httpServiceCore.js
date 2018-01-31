import axios from 'axios';
import Config from '../../../environmentControl';

export const httpMethod = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

export const get = (endpoint) => {
    return axios.get(`${Config.API_URL}/${endpoint}`);
}

export const post = (endpoint, data) => {
    return axios.post(`${Config.API_URL}/${endpoint}`, data);
}

export const callAPI = (endpoint, method, data = {}) => {
    switch (method) {
        case httpMethod.GET:
            return get(endpoint);
        case httpMethod.POST:
            return post(endpoint, data);
    }
}


