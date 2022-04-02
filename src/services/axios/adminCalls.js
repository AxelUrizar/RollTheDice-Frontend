import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'https://roll-the-dice---api.herokuapp.com/admin/'

export const editAliasAdmin = (alias, id) => {
    return axios.put(API_URL + 'edit', {
        alias: alias,
        id: id
    }, {headers: authHeader()})
}