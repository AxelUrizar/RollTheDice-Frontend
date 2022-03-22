const playerCalls = require('../../axios/playerCalls')

export const PLAYER_LOGIN = 'PLAYER_LOGIN';
export const PLAYER_LOGOUT = 'PLAYER_LOGOUT';

export const playerLogin = () => {
    return (dispatch) => {
        playerCalls.login()
        .then(res => {
            localStorage.setItem('user', res.data.token)
            dispatch(playerLoginSuccess(res.data.user))
        })
        .catch(err => new Error(err))
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
            .catch(err => new Error(err))
    }
}
            const playerLogoutSuccess = () => {
                return {
                    type: PLAYER_LOGOUT
                }
            }
