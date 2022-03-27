import { GET_PLAYER, PLAYER_LOGIN, PLAYER_LOGOUT } from "../actions/player";

const reducer = (state = [], action) => {
    switch (action.type) {
        case GET_PLAYER:
            return action.payload

        case PLAYER_LOGIN:
            return action.payload

        case PLAYER_LOGOUT:
            return []
    
        default:
            return state
    }
}

export default reducer