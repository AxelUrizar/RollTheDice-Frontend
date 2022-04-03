import { Link, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

import perfil from '../../img/foto-perfil.jpg'
import { useEffect, useState } from "react"

export const Layout = () => {
    const [points, setPoints] = useState(0)
    const [coins, setCoins] = useState(0)
    
    const player = useSelector(state => state.player)
    
    useEffect(() => {
        setCoins(player.coins)
        setPoints(player.points)
    }, [player])
    
    return (
        <div className="vw-100 d-flex justify-content-center align-items-center">
            <div className="vw-100">
                <nav className="navbar navbar-expand-lg navbar-dark mx-5" aria-label="Fifth navbar example">
                    <div className="container-fluid p-0 d-flex justify-content-between align-items-center">
                        <Link to='/'><h1 className="pt-1 textHover ms-4">Roll The Dice</h1></Link>
                        {player._id && 
                            <div>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarsExample05">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end align-items-center">
                                        <li className="nav-item textHover me-5">
                                            <Link to='game'>Jugar</Link>
                                        </li>
                                        <li className="nav-item textHover me-5">
                                            <Link to='tienda'>Tienda</Link>
                                        </li>
                                        <li className="nav-item textHover me-5">
                                            <Link to='ranking'>Ránking</Link>
                                        </li>
                                        <li className="nav-item textHover me-3">
                                            <Link to={`historial/${player._id}`}>Historial</Link>
                                        </li>
                                        <li className="ms-4">
                                            <span className=" text-light fw-bold m-0 d-flex align-items-center justify-content-center">
                                                {points} <h4 className="ms-2 mb-1">🎲</h4>
                                            </span>
                                        </li>
                                        <li className="ms-4">
                                            <span className="text-light fw-bold m-0 d-flex align-items-center justify-content-center">
                                                {coins} <h4 className="ms-2 mb-1">💸</h4>
                                            </span>
                                        </li>
                                        {player.rol === 'admin' && 
                                            <li className="nav-item dropdown">
                                                <div className="dropdown ms-4">
                                                    <button className="btn backgroundButton textHover rounded-pill dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Vista Admin
                                                    </button>
                                                    <ul className="dropdown-menu backgroundColor mt-2" aria-labelledby="dropdownMenuButton1">
                                                        <li className="text-center my-1"><Link to='admin/usuarios'><p className="dropdownAdmin text-light selectOptionAdmin defaultShadow mx-3  py-1">Usuarios</p></Link></li>
                                                    </ul>
                                                </div>  
                                            </li>
                                        }  
                                        <li className="me-3">
                                            <Link to={`perfil/${player._id}`} className="d-flex align-items-center justify-content-center textHover navBar-link ms-2 me-4 mb-0">
                                                <p className="m-0 ms-4 fw-bold">{player.alias}</p>
                                                <img src={perfil} className='rounded-circle fotoPerfilNavBar ms-2 mb-1'/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        }
                        {!player._id && 
                            <div>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarsExample05">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end align-items-center">
                                        <li className="nav-item textHover me-4">
                                            <Link to='signup'>Sign Up</Link>
                                        </li>
                                        <li className="nav-item textHover me-3">
                                            <Link to='login'>Log In</Link>
                                        </li>
                                        <li className="nav-item textHover">
                                            <Link to='ranking'>Ránking</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>
                </nav>
                <div className="content outletBody d-flex align-items-stretch justify-content-evenly flex-column  m-auto mt-2 mb-4 py-5">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}