import toast from 'react-hot-toast'
import { updateCoinsAndPoints } from './player'

const gameCalls = require('../../axios/gameCalls')

export const GET_PLAYER_HISTORY = 'GET_PLAYER_HISTORY'
export const NEW_GAME = 'NEW_GAME'

export const getPlayerHistory = () => {
    return (dispatch) => {
        gameCalls.showAll()
            .then(res => dispatch(getPlayerHistorySuccess(res.data)))
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
        const getPlayerHistorySuccess = (games) => {
            return {
                type: GET_PLAYER_HISTORY,
                payload: games
            }
        }

export const newGame = (games, finalResult, playerCounter, botCounter) => {
    return (dispatch) => {
        gameCalls.newGame(games, finalResult, playerCounter, botCounter)
            .then(res => {
                dispatch(newGameSuccess(res.data.game))
                dispatch(updateCoinsAndPoints(res.data.player))
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
        const newGameSuccess = (game) => {            
            return {
                type: NEW_GAME,
                payload: game
            }
        }