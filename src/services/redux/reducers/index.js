import { combineReducers } from "redux";

import usersReducer from './users'
import playerReducer from './player'

export default combineReducers({
    users: usersReducer,
    player: playerReducer
})