import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { newGame } from "../../../services/redux/actions/games";

export const Game = () => {
    const [rolls, setRolls] = useState([]);
    const [playerCounter, setPlayerCounter] = useState(0);
    const [botCounter, setBotCounter] = useState(0);
    const [winnerCheck, setWinnerCheck] = useState();
    const [gameEnded, setGameEnded] = useState(false);
    const [counter, setCounter] = useState(0)

    const dispatch = useDispatch()
    const player = useSelector(state => state.player)
    const imageRequire = (number) => require(`../../../img/skins/${player.selectedSkin.name}/${number}.png`)

    const rollTheDice = () => {
        const randomGenerator = () => Math.floor(Math.random() * 6) + 1;
        const playerRoll = randomGenerator()
        const botRoll = randomGenerator()

        if (playerRoll > botRoll) {
            setPlayerCounter(playerCounter + 1)
        } else if (playerRoll < botRoll) {
            setBotCounter(botCounter + 1)
        } else {
            setPlayerCounter(playerCounter + 1)
            setBotCounter(botCounter + 1)
        }

        if(rolls.length === 0){
            setRolls([[playerRoll, botRoll]])
        } else {
            setRolls([...rolls, [playerRoll, botRoll]])
        }
    }

    const resetGame = () => {
        setRolls([]);
        setPlayerCounter(0);
        setBotCounter(0);
        setWinnerCheck(undefined);
        setGameEnded(false);
        setCounter(0)
    }
    
    
    useEffect(() => {
        if(playerCounter > 2 || botCounter > 2){
            setGameEnded(true)
            if (playerCounter > botCounter) {
                setWinnerCheck('Win')
            } else if (playerCounter < botCounter) {
                setWinnerCheck('Lose')
            } else {
                setWinnerCheck('Tie')
            }
        }     
        
        if (gameEnded === true && counter === 0) {
            dispatch(newGame(rolls, winnerCheck, playerCounter, botCounter))
            setCounter(1)
        }   
    })

    return (
        <div className="px-5 w-100 h-100">
            <div className="d-flex align-items-center justify-content-center">
                <div className="w-50 align-self-start">
                    <h3>Tiradas</h3>
                    {rolls.length > 0 && rolls.map((roll, i) => {
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
                        {gameEnded === false && <button className="btn rounded-pill buttonReact" onClick={rollTheDice}>Lanza los dados!</button>}
                        {winnerCheck === 'Win' && <h3 className="text-success">Has ganado!</h3>}
                        {winnerCheck === 'Lose' && <h3 className="text-danger">Has perdido!</h3>}
                        {winnerCheck === 'Tie' && <h3>Ha sido un empate!</h3>}
                    </div>
                    <ul className="mt-5 rounded bg-light p-4 text-start defaultShadow">
                        <li>
                            <h4 className="purpleText">- El primero en llegar a 3 puntos ganará.</h4>
                        </li>
                        <li>
                            <h4 className="purpleText">- Si ganas recibirás 15 puntos y 25 monedas.</h4>
                        </li>
                        <li>
                            <h4 className="purpleText">- Si pierdes perderás 10 puntos.</h4>
                        </li>
                        <li>
                            <h4 className="purpleText">- Si empatas no perderás puntos y ganarás 5 monedas.</h4>
                        </li>
                    </ul>
                    {gameEnded === true && <button className="btn rounded-pill mt-5" onClick={resetGame}>Volver a jugar!</button>}
                </div>
            </div>
        </div>
    )
}