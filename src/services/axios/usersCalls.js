import axios from "axios";
import authHeader from './auth-header'

const API_URL = process.env.API_URL + 'users/';

export const newUser = (name, alias, email, password) => {
    return axios.post(API_URL + 'newUser', {name, alias, email, password})
}

 
