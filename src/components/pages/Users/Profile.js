import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate, Outlet, useNavigate, useParams } from "react-router-dom"
import perfil from '../../../img/foto-perfil.jpg'
import { playerLogout } from "../../../services/redux/actions/player";
import GamesHistory from "../GamesHistory/GamesHistory";
import Pie from "./Pie";

const gameCalls = require('../../../services/axios/gameCalls')

export const Profile = () => {   
    const { id } = useParams()

    const [position, setPosition] = useState(0)
    const [logoutCheck, setLogoutCheck] = useState(false)
    const [toggleGamesHistory, setToggleGamesHistory] = useState(false)

    const [winRate, setWinRate] = useState(0)
    const [tieRate, setTieRate] = useState(0)
    const [loseRate, setLoseRate] = useState(0)

    const dispatch = useDispatch()

    const player = useSelector(state => state.player)
    const users = useSelector(state => state.users)
    const user = users.filter(user => user._id === id)  
    const gamesHistory = useSelector(state => state.gamesHistory)
    const userHistory = gamesHistory.filter((game => game.userId === id))    

    const logout = () => {
        toast((t) => (
            <span className='px-3'>
                <p className='mb-2 mx-2 fw-bold'>¿Cerrar sesión?</p>
                <div className='row gx-5'>
                    <p className="btn mx-2 rounded-pill  border-2 defaultShadow fw-bold col" onClick={() => {
                        dispatch(playerLogout())
                        setLogoutCheck(true)
                        toast.dismiss(t.id)
                    }}>
                        Si
                    </p>
                    <p className="btn mx-2 rounded-pill  border-2 defaultShadow fw-bold col" onClick={() => {
                        toast.dismiss(t.id)
                    }}>
                        No
                    </p>
                </div>
            </span>
        ))
    }

    const toggleHistory = () => {
        if (toggleGamesHistory === true) {
            return setToggleGamesHistory(false)
        } else if (toggleGamesHistory === false) {    
            return setToggleGamesHistory(true)
        }
    }

    const positionColor = (position, rest) => {
        switch (position) {
            case 1:
                return `gold ${rest}`
            
            case 2: 
                return `silver ${rest}`

            case 3:
                return `bronze ${rest}`

            default:
                return `${rest}`;
        }
    }

    const positionEmoji = (position) => {
        switch (position) {
            case 1:
                return `🥇`
            
            case 2: 
                return `🥈`

            case 3:
                return `🥉`

            default:
                return ``;
        }
    }
    
    useEffect(() => {   
        setToggleGamesHistory(false)
        
        users.sort((a, b) => a.points > b.points ? -1 : 1).map((userMap, i) => {
            if(user[0]._id === userMap._id){
                setPosition(i + 1)
            }
        })

        gameCalls.showAll()
            .then(res => {
                const playerHistory = res.data.filter(game => game.userId === user[0]._id)
                const games = playerHistory.length

                const wins = playerHistory.filter(game => game.finalResult === 'Win')
                const ties = playerHistory.filter(game => game.finalResult === 'Tie')
                const loses = playerHistory.filter(game => game.finalResult === 'Lose')

                const winRateCalc = parseFloat((wins.length * 100) / games).toFixed(2)
                const tieRateCalc = parseFloat((ties.length * 100) / games).toFixed(2)
                const loseRateCalc = parseFloat((loses.length * 100) / games).toFixed(2)

                setWinRate(parseFloat(winRateCalc) > 0 ? parseFloat(winRateCalc) : 0)
                setTieRate(parseFloat(tieRateCalc) > 0 ? parseFloat(tieRateCalc) : 0)
                setLoseRate(parseFloat(loseRateCalc) > 0 ? parseFloat(loseRateCalc) : 0)
            })
            .catch(err => console.log(err)) 
    },[id])

    return (
        <div className="w-100 h-100">
            <h2>Perfil</h2>
            <div className="row d-flex justify-content-center">
                <div className="row col-8">
                    <img src={perfil} alt='ImagenPerfil' className='rounded-circle col-4 shadow-sm'/>
                    <div className="col-6 d-flex flex-column align-items-start justify-content-center">
                        <div className="d-flex align-items-center justify-content-center my-2">
                            <h4 className="m-0 ms-5 me-3 textoPurpura">Alias:</h4>
                            <h4 className="text-light m-0">{user[0].alias}</h4>
                        </div>
                        <div className="d-flex align-items-center justify-content-start my-2">
                            <h4 className="m-0 ms-5 me-3 textoPurpura">Puntos:</h4>
                            <h4 className="text-light m-0 mt-1">{user[0].points} 🎲</h4>
                        </div>
                        {id === player._id && 
                            <div className="d-flex align-items-center justify-content-start my-2">
                                <h4 className="m-0 ms-5 me-3 textoPurpura">Dinero:</h4>
                                <h4 className="text-light m-0 mt-1">{user[0].coins} 💸</h4>
                            </div>
                        }
                        <div className="d-flex align-items-center justify-content-center my-2">
                            <h4 className="m-0 ms-5 me-3 textoPurpura">Posición Ránking:</h4>
                            <h4 className={positionColor(position, "m-0")}>{position} {positionEmoji(position)}</h4>
                        </div>
                        <div className="d-flex align-items-center justify-content-center my-2">
                            <h4 className="m-0 ms-5 me-3 textoPurpura">Partidas Jugadas:</h4>
                            <h4 className="text-light m-0">{userHistory.length}</h4>
                        </div>
                    </div>
                </div>
                {id === player._id && 
                    <div className="col-3 d-flex flex-column justify-content-center">
                        <div>
                            <Link to={`editar`} className="btn rounded-pill my-3" type="submit">Editar Perfil</Link>
                        </div>
                        <div>
                            <button onClick={logout} className="btn rounded-pill my-3">Log Out</button>
                        </div>
                    </div>
                }
                {player.rol === 'admin' &&
                    <div className="col-3 d-flex flex-column justify-content-center">
                        <div>
                            <Link to={`editar`} className="btn rounded-pill my-3" type="submit">Editar Perfil</Link>
                        </div>
                    </div>

                }
                <ul className="d-flex justify-content-center align-items-evenly mt-5">
                    <li className="d-flex align-items-center justify-content-center">
                        <h3>Win Rate</h3>
                        <div className="d-flex align-items-center justify-content-center">
                            <Pie percentage={winRate} colour='rgb(61, 37, 80)' />
                            <p className="pieText">{winRate} %</p>
                        </div>
                    </li>
                    <li className="d-flex align-items-center justify-content-center">
                        <h3>Tie Rate</h3>
                        <div className="d-flex align-items-center justify-content-center">
                            <Pie percentage={tieRate} colour='rgb(61, 37, 80)' />
                            <p className="pieText">{tieRate} %</p>
                        </div>
                    </li>
                    <li className="d-flex align-items-center justify-content-center">
                        <h3>Lose Rate</h3>
                        <div className="d-flex align-items-center justify-content-center">
                            <Pie percentage={loseRate} colour='rgb(61, 37, 80)' />
                            <p className="pieText">{loseRate} %</p>
                        </div>
                    </li>
                    
                </ul>
                {toggleGamesHistory === false && 
                    <div className="mt-3">
                        <button className="btn rounded-pill" onClick={toggleHistory}>Ver Historial</button>
                    </div>
                }
                {toggleGamesHistory === true && 
                    <div className="mt-3">
                        <button className="btn rounded-pill mb-5" onClick={toggleHistory}>Esconder Historial</button>
                        <GamesHistory />
                    </div>
                }
            </div>
            {logoutCheck === true && <Navigate to='/' />}
        </div>
    )
}