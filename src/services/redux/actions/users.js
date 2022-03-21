const usersCalls = require('../../axios/usersCalls')

export const ADD_USERS = 'ADD_USERS';
export const USER_PROFILE = 'USER_PROFILE';

export const addUser = (name, alias, email, password) => {
    return (dispatch) => {
        usersCalls.newUser(name, alias, email, password)
            .then(res => {
                const user = res.data
                dispatch(addUserSuccess(user.name, user.alias, user.email))
            })
            .catch(err => new Error(err))
    }
}
            const addUserSuccess = (name, alias, email) => {
                return {
                    type: ADD_USERS,
                    payload: {
                        name: name,
                        alias: alias,
                        email: email,
                    }
                }
            }

