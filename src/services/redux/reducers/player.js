import { GET_PLAYER, PLAYER_LOGIN, PLAYER_LOGOUT, UPDATE_COINS_AND_POINTS, UPDATE_PLAYER_ALIAS } from "../actions/player";

const reducer = (state = {}, action) => {
    switch (action.type) {
        case GET_PLAYER:
            return action.payload

        case PLAYER_LOGIN:
            return action.payload

        case PLAYER_LOGOUT:
            return {}
        
        case UPDATE_COINS_AND_POINTS:
            return {
                _id: state._id,
                name: state.name,
                alias: state.alias,
                email: state.email,
                password: state.password,
                rol: state.rol,
                points: action.payload.points,
                coins: action.payload.coins,
                selectedSkin: state.selectedSkin,
                skins: state.skins
            }
        
        case UPDATE_PLAYER_ALIAS:
            return action.payload
    
        default:
            return state
    }
}

export default reducer