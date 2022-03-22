import axios from "axios";

const API_URL = 'http://localhost:2020/users/';

export const getUsers = () => {
    return axios.get(API_URL)
}

export const newUser = (name, alias, email, password) => {
    return axios.post(API_URL + 'newUser', {
        name: name, 
        alias: alias,
        email: email, 
        password: password
    })
}

 
