import { Link, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

export const Layout = () => {
    const player = useSelector(state => state.player)
    
    return (
        <div className="vw-100 d-flex justify-content-center">
            <div className="vw-100">
                <nav className="navbar navbar-expand-lg navbar-dark mx-5" aria-label="Fifth navbar example">
                    <div className="container-fluid p-0 d-flex justify-content-between align-items-center">
                        <Link to='/'><h1 className="pt-1">Roll The Dice</h1></Link>
                        {player._id && 
                            <div>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarsExample05">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end align-items-center">
                                        <li className="nav-item me-4">
                                            <Link to='/'>Home</Link>
                                        </li>
                                        <li className="nav-item me-3">
                                            <Link to='perfil'>Perfil</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='ranking'>Ránking</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="dropdown05" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                                            <ul className="dropdown-menu" aria-labelledby="dropdown05">
                                                <li>Action</li>
                                                <li>Another action</li>
                                                <li>Something else</li>
                                            </ul>
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
                                        <li className="nav-item me-4">
                                            <Link to='signup'>Sign Up</Link>
                                        </li>
                                        <li className="nav-item me-3">
                                            <Link to='login'>Log In</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='ranking'>Ránking</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="dropdown05" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                                            <ul className="dropdown-menu" aria-labelledby="dropdown05">
                                                <li>Action</li>
                                                <li>Another action</li>
                                                <li>Something else</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>
                </nav>
                <div className="content m-auto">
                    <div className="container py-5">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}