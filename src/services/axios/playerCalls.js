import axios from "axios";
import authHeader from './auth-header'

// const API_URL = process.env.API_URL_START + 'users/';
const API_URL = 'http://localhost:2020/users/';

export const signup = (name, alias, email, password) => {
    return axios.post(API_URL + 'newUser', {
        name: name,
        alias: alias,
        email: email,
        password: password
    })
}

export const login = (alias, password) => {
    return axios.post(API_URL + 'login', {
        alias: alias,
        password: password
    })
}

export const profile = () => {
    return axios.get(API_URL + 'profile', {headers: authHeader()})
}

export const logout = () => {
    return axios.delete(API_URL + 'logout', {headers: authHeader()})
}

export const logoutAll = () => {
    return axios.delete(API_URL  + 'logoutAll', {headers: authHeader()})
}