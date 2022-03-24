import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
    const players = 4

    return (
        <div className="vw-100 d-flex justify-content-center">
            <div className="vw-100">
                <nav class="navbar navbar-expand-lg navbar-dark mx-5" aria-label="Fifth navbar example">
                    <div class="container-fluid p-0 d-flex justify-content-between align-items-center">
                        <Link to='/'><h1 className="pt-1">Roll The Dice</h1></Link>
                        <div>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarsExample05">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end align-items-center">
                                    <li class="nav-item me-4">
                                        <Link to='home'>Home</Link>
                                    </li>
                                    <li class="nav-item me-3">
                                        <Link to='perfil'>Perfil</Link>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Ránking</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="dropdown05" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdown05">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="content m-auto">
                    <div className="container">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}