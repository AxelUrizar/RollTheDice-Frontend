import { ADD_USER, FETCH_USERS } from "../actions/users";

const reducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload;

        case ADD_USER:
            return [
                ...state,
                {
                    name: action.payload.name,
                    alias: action.payload.alias,
                    email: action.payload.email
                }
            ];

        default:
            return state
    }
}

export default reducer