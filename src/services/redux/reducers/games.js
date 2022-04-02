import { GET_PLAYER_HISTORY, NEW_GAME } from "../actions/games";

const reducer = (state = [], action) => {
    switch (action.type) {
        case GET_PLAYER_HISTORY:
            return action.payload

        case NEW_GAME:
            return [
                action.payload,
                ...state
            ]
    
        default:
            return state
    }
}

export default reducer