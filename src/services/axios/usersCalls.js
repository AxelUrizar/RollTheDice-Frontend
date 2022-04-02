import axios from "axios";
// import env from "react-dotenv";

// const API_URL = env.API_URL_START + '/users';
const API_URL = 'https://roll-the-dice---api.herokuapp.com/users'
export const getUsers = () => {
    return axios.get(API_URL)
}

export const newUser = (name, alias, email, password) => {
    return axios.post(API_URL + '/newUser', {
        name: name, 
        alias: alias,
        email: email, 
        password: password
    })
}

 
