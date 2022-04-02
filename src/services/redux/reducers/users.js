import { UPDATE_PLAYER_ALIAS_ADMIN } from "../actions/admin";
import { UPDATE_COINS_AND_POINTS, UPDATE_PLAYER_ALIAS } from "../actions/player";
import { ADD_USER, FETCH_USERS } from "../actions/users";

const reducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload;

        case ADD_USER:
            return [
                ...state,
                action.payload
            ];
        
        case UPDATE_COINS_AND_POINTS:
            return state.map(user => {
                if (user._id === action.payload._id){
                    return {
                        _id: user._id,
                        name: user.name,
                        alias: user.alias,
                        email: user.email,
                        password: user.password,
                        rol: user.rol,
                        points: action.payload.points,
                        coins: action.payload.coins,
                        selectedSkin: user.selectedSkin,
                        skins: user.skins
                    }
                }
                return user
            })

        case UPDATE_PLAYER_ALIAS:
            return state.map(user => {
                if (user._id === action.payload._id){
                    return action.payload
                }
                return user
            })
        
        case UPDATE_PLAYER_ALIAS_ADMIN:
            return state.map(user => {
                if (user._id === action.payload._id){
                    return action.payload
                }
                return user
            })

        default:
            return state
    }
}

export default reducer