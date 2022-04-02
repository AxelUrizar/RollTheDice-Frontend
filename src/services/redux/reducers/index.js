import { combineReducers } from "redux";

import usersReducer from './users'
import playerReducer from './player'
import gamesReducer from './games'

export default combineReducers({
    users: usersReducer,
    player: playerReducer,
    gamesHistory: gamesReducer
})