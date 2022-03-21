import { ADD_USERS, USER_PROFILE } from "../actions/users";

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS:
            return [
                ...state,
                {
                    name: action.payload.name,
                    alias: action.payload.alias,
                    email: action.payload.email
                }
            ]
    
        case USER_PROFILE:


        default:
            return state
    }
}