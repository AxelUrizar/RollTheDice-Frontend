import { Link, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

export const Layout = () => {
    const player = useSelector(state => state.player)
    
    return (
        <div className="vw-100 d-flex justify-content-center align-items-center">
            <div className="vw-100">
                <nav className="navbar navbar-expand-lg navbar-dark mx-5" aria-label="Fifth navbar example">
                    <div className="container-fluid p-0 d-flex justify-content-between align-items-center">
                        <Link to='/'><h1 className="pt-1 textHover">Roll The Dice</h1></Link>
                        {player._id && 
                            <div>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarsExample05">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end align-items-center">
                                        <li className="nav-item textHover me-4">
                                            <Link to='/'>Home</Link>
                                        </li>
                                        <li className="nav-item textHover me-3">
                                            <Link to='perfil'>Perfil</Link>
                                        </li>
                                        <li className="nav-item textHover">
                                            <Link to='ranking'>Ránking</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            {player.rol === 'admin' && 
                                                <div className="dropdown ms-5 pb-1">
                                                    <button className="btn backgroundButton rounded-pill dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Vista Admin
                                                    </button>
                                                    <ul className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton1">
                                                        <li className="text-center"><Link to='admin/usuariosAdmin'><p className="dropdownAdmin text-light">Usuarios</p></Link></li>
                                                        <li className="text-center"><Link to='admin/prestamosAdmin'><p className="dropdownAdmin text-light">Pedidos</p></Link></li>
                                                    </ul>
                                                </div>  
                                            }  
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
                <div className="content outletBody  m-auto">
                    <div className="py-5">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}