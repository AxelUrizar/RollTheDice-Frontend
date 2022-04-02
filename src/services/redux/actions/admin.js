import toast from 'react-hot-toast'

const adminCalls = require('../../axios/adminCalls')

export const UPDATE_PLAYER_ALIAS_ADMIN = 'UPDATE_PLAYER_ALIAS_ADMIN'

export const updatePlayerAliasAdmin = (alias, id) => {
    return (dispatch) => {
        adminCalls.editAliasAdmin(alias, id)
            .then(res => {
                dispatch(updatePlayerAliasAdminSuccess(res.data))
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
const updatePlayerAliasAdminSuccess = (alias) => {
    return {
        type: UPDATE_PLAYER_ALIAS_ADMIN,
        payload: alias
    }
}

