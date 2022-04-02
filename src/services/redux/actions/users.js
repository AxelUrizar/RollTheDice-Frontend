import toast from 'react-hot-toast';

const usersCalls = require('../../axios/usersCalls')

export const ADD_USER = 'ADD_USER';
export const FETCH_USERS = 'FETCH_USERS';


export const fetchUsers = () => {
    return (dispatch) => {
        usersCalls.getUsers()
            .then(res => dispatch(fetchUsersSuccess(res.data)))
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
                dispatch(addUserSuccess(user))
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