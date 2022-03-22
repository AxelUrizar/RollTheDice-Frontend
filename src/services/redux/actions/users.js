const usersCalls = require('../../axios/usersCalls')

export const ADD_USER = 'ADD_USER';
export const FETCH_USERS = 'FETCH_USERS';


export const fetchUsers = () => {
    return (dispatch) => {
        usersCalls.getUsers()
            .then(res => {
                console.log('hola')
                dispatch(fetchUsersSuccess(res.data))
            })
            .catch(err => new Error(err))
    }
}
            const fetchUsersSuccess = (users) => {
                return {
                    type: FETCH_USERS,
                    payload: users
                }
            }

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
                    type: ADD_USER,
                    payload: {
                        name: name,
                        alias: alias,
                        email: email,
                    
                    }
                }
            }