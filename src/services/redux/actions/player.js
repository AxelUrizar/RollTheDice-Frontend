const playerCalls = require('../../axios/playerCalls')

export const GET_PLAYER = 'GET_PLAYER';
export const PLAYER_LOGIN = 'PLAYER_LOGIN';
export const PLAYER_LOGOUT = 'PLAYER_LOGOUT';

export const getPlayer = () => {
    return (dispatch) => {
        playerCalls.profile()
            .then(res => {
                console.log(res.data)
                dispatch(getPlayerSuccess(res.data))
            })
            .catch(err => console.log(err))
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
            .catch(err => console.log(err))
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
            })
            .catch(err => console.log(err))
    }
}
            const playerLogoutSuccess = () => {
                return {
                    type: PLAYER_LOGOUT
                }
            }
