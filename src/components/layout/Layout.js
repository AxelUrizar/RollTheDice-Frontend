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
                                        <li className="d-flex align-items-center justify-content-center me-5 textHover">
                                            <Link to='game'>Jugar</Link>
                                        </li>
                                        <li className="nav-item textHover me-5">
                                            <Link to='ranking'>Ránking</Link>
                                        </li>
                                        <li className="nav-item textHover me-3">
                                            <Link to={`historial/${player._id}`}>Historial</Link>
                                        </li>
                                        <li className="ms-4">
                                            <p className="fw-bold m-0 d-flex align-items-center justify-content-center">
                                                {points} 
                                                <span className="text-info mb-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-1 bi bi-capslock" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5 8 1.731 1.654 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1h2.846zm-9.846 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1zm6 0h-5v1h5v-1z"/>
                                                    </svg>
                                                </span>
                                            </p>
                                        </li>
                                        <li className="ms-4">
                                            <p className="fw-bold m-0 d-flex align-items-center justify-content-center">
                                                {coins} 
                                                <span className="text-warning mb-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-1 bi bi-coin" viewBox="0 0 16 16">
                                                        <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/>
                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                        <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                                                    </svg>
                                                </span>
                                            </p>
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