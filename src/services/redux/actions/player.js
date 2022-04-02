import toast from 'react-hot-toast';

const playerCalls = require('../../axios/playerCalls')

export const GET_PLAYER = 'GET_PLAYER';
export const PLAYER_LOGIN = 'PLAYER_LOGIN';
export const PLAYER_LOGOUT = 'PLAYER_LOGOUT';
export const UPDATE_COINS_AND_POINTS = 'UPDATE_COINS_AND_POINTS'
export const UPDATE_PLAYER_ALIAS = 'UPDATE_PLAYER_ALIAS'

export const getPlayer = () => {
    return (dispatch) => {
        playerCalls.profile()
            .then(res => dispatch(getPlayerSuccess(res.data)))
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
            const getPlayerSuccess = (profile) => {
                return {
                    type: GET_PLAYER,
                    payload: profile
                }
            }

export const playerLogin = (alias, password) => {
    return (dispatch) => {
        playerCalls.login(alias, password)
            .then(res => {
                localStorage.setItem('user', res.data.token)
                dispatch(playerLoginSuccess(res.data.user))
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
            const playerLoginSuccess = (player) => {
                return {
                    type: PLAYER_LOGIN,
                    payload: player
                }
            }

export const playerLogout = () => {
    return (dispatch) => {
        playerCalls.logout()
            .then(res => {
                localStorage.removeItem('user');
                dispatch(playerLogoutSuccess())
                toast((t) => (
                    <span>
                        <p className='fw-bold'>Logout Comletado!</p>
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
            const playerLogoutSuccess = () => {
                return {
                    type: PLAYER_LOGOUT
                }
            }

export const updateCoinsAndPoints = (player) => {
    return {
        type: UPDATE_COINS_AND_POINTS,
        payload: player
    }
}

export const updatePlayerAlias = (alias) => {
    return (dispatch) => {
        playerCalls.updatePlayerAlias(alias)
            .then(res => {
                dispatch(updatePlayerAliasSuccess(res.data))
                toast((t) => (
                    <span>
                        <p className='fw-bold'>Editado con éxito!</p>
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
        const updatePlayerAliasSuccess = (alias) => {
            return {
                type: UPDATE_PLAYER_ALIAS,
                payload: alias
            }
        }