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
                            <h4 className="text-light m-0 mt-1">{user[0].points}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-1 mb-1 text-info bi bi-capslock" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5 8 1.731 1.654 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1h2.846zm-9.846 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1zm6 0h-5v1h5v-1z"/>
                                </svg>
                            </h4>
                        </div>
                        {id === player._id && 
                            <div className="d-flex align-items-center justify-content-start my-2">
                                <h4 className="m-0 ms-5 me-3 textoPurpura">Monedas:</h4>
                                <h4 className="text-light m-0 mt-1">{user[0].coins}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-warning ms-1 mb-1 bi bi-coin" viewBox="0 0 16 16">
                                        <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/>
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                                    </svg>
                                </h4>
                            </div>
                        }
                        <div className="d-flex align-items-center justify-content-center my-2">
                            <h4 className="m-0 ms-5 me-3 textoPurpura">Posición:</h4>
                            <h4 className="text-light m-0">{position}</h4>
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