import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const GameDetail = () => {
    const { gameId } = useParams()

    const player = useSelector(state => state.player)
    const gamesHistory = useSelector(state => state.gamesHistory)

    const gameFilter = gamesHistory.filter(gameFiltered => gameFiltered._id === gameId)
    const game = gameFilter[0]

    const winnerCheck = game.finalResult
    const playerCounter = game.playerCounter
    const botCounter = game.botCounter
    
    const imageRequire = (number) => require(`../../../img/skins/${player.selectedSkin.name}/${number}.png`)

    return (
        <div className="px-5 w-100 h-100">
            <h2>Detalles Partida</h2>
            <div className="d-flex align-items-center justify-content-center mt-4">
                <div className="w-50">
                    <h3>Tiradas</h3>
                    {game.games.map((roll, i) => {
                        return (
                            <div key={i} className="d-flex align-items-center justify-content-center mt-5">
                                <div className="d-flex align-items-center justify-content-end">
                                    <h3 className={roll[0] > roll[1] ? 'text-success' : roll[0] < roll[1] ? 'text-danger' : ''}>{player.alias}</h3>
                                    <img src={imageRequire(roll[0])} className="ms-5 dice rounded defaultShadow" />
                                </div>
                                <h3 className="mx-5">-</h3>
                                <div className="d-flex align-items-center justify-content-start">
                                    <img src={imageRequire(roll[1])} className="me-5 dice rounded defaultShadow" />
                                    <h3 className={roll[1] > roll[0] ? 'text-success' : roll[1] < roll[0] ? 'text-danger' : ''}>Bot</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="w-50 d-flex flex-column align-items-center justify-content-center">
                    <div className="ocuppy">
                        <h3>Marcador</h3>
                        <div className="d-flex align-items-center justify-content-center marcador my-5">
                            <div className="d-flex align-items-center justify-content-center">
                                <h3 className={winnerCheck === 'Win' ? 'text-success' : winnerCheck === 'Lose' ? 'text-danger' : ''}>{player.alias}</h3>
                                <h3 className="mx-4">{playerCounter}</h3>
                            </div>
                            <h3>-</h3>
                            <div className="d-flex align-items-center justify-content-center">
                                <h3 className="mx-4">{botCounter}</h3>
                                <h3 className={winnerCheck === 'Lose' ? 'text-success' : winnerCheck === 'Win' ? 'text-danger' : ''}>Bot</h3>
                            </div>
                        </div>
                        {winnerCheck === 'Win' && <h3 className="text-success">Has ganado!</h3>}
                        {winnerCheck === 'Lose' && <h3 className="text-danger">Has perdido!</h3>}
                        {winnerCheck === 'Tie' && <h3>Ha sido un empate!</h3>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameDetail