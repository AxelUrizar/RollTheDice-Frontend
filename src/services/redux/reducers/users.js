import { UPDATE_PLAYER_ALIAS_ADMIN } from "../actions/admin";
import { UPDATE_COINS_AND_POINTS, UPDATE_PLAYER_ALIAS } from "../actions/player";
import { ADD_USER, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "../actions/users";

const reducer = (state = {loading: true}, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                list: action.payload
            }
        
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                error: action.error
            }

        case ADD_USER:
            return {
                loading: false,
                list: [
                    ...state.list,
                    action.payload
                ]
            };
        
        case UPDATE_COINS_AND_POINTS:
            return {
                loading: false,
                list: state.list.map(user => {
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
            }

        case UPDATE_PLAYER_ALIAS:
            return {
                loading: false,
                list: state.list.map(user => {
                    if (user._id === action.payload._id){
                        return action.payload
                    }
                    return user
                })
            }
        
        case UPDATE_PLAYER_ALIAS_ADMIN:
            return {
                loading: false,
                list: state.list.map(user => {
                    if (user._id === action.payload._id){
                        return action.payload
                    }
                    return user
                })
            }

        default:
            return state
    }
}

export default reducer