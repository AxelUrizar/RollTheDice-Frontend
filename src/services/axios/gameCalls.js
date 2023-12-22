import axios from "axios";
import env from "react-dotenv";
import authHeader from './auth-header'

// Production API
// const API_URL = env.API_URL_START + '';
const API_URL = 'https://rtd-backend-wkka.onrender.com/gamesHistory/'

// Developement API
// const API_URL = 'localhost:2030/gamesHistory/'

export const showAll = () => {
    return axios.get(API_URL);
}

export const userHistory = () => {
    return axios.get(API_URL + 'userHistory', {headers: authHeader()})
}

export const newGame = (games, finalResult, playerCounter, botCounter) => {
    return axios.post(API_URL + 'newGame', {
        games: games,
        finalResult: finalResult,
        playerCounter: playerCounter,
        botCounter: botCounter
    }, {headers: authHeader()})
}
