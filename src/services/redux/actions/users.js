import toast from 'react-hot-toast';

const usersCalls = require('../../axios/usersCalls')

export const ADD_USER = 'ADD_USER';
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';


export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        usersCalls.getUsers()
            .then(res => {
                dispatch(fetchUsersSuccess(res.data))
            })
            .catch(err => {
                toast((t) => (
                    <span>
                        <p className='fw-bold'>Algo ha fallado!</p>
                    </span>
                ), {icon: '❌'})
                dispatch(fetchUsersFailure(err.message))
            })
    }
}
            const fetchUsersRequest = (users) => {
                return {
                    type: FETCH_USERS_REQUEST,
                    payload: []
                }
            }
            const fetchUsersSuccess = (users) => {
                return {
                    type: FETCH_USERS_SUCCESS,
                    payload: users
                }
            }
            const fetchUsersFailure = (error) => {
                return {
                    type: FETCH_USERS_FAILURE,
                    error: error
                }
            }

export const addUser = (name, alias, email, password) => {
    return (dispatch) => {
        usersCalls.newUser(name, alias, email, password)
            .then(res => {
                const user = res.data
                dispatch(addUserSuccess(user))
                toast((t) => (
                    <span>
                        <p className='fw-bold'>Usuario creado!</p>
                    </span>
                ), {icon: '✔'})
            })
            .catch(err => {
                console.log(err)
                toast((t) => (
                    <span>
                        <p className='fw-bold'>Algo ha fallado!</p>
                    </span>
                ), {icon: '❌'})
            })
    }
}
            const addUserSuccess = (user) => {
                return {
                    type: ADD_USER,
                    payload: user
                }
            }