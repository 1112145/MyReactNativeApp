import { callAPI, httpMethod } from './httpServiceCore';

export const login = (data) => callAPI(`user/login`, httpMethod.POST, data);

export const register = (data) => callAPI(`user/register`, httpMethod.POST, data);
