import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const UsuariosAdmin = () => {
    const users = useSelector(state => state.users)
    const player = useSelector(state => state.player)

    const highlightPlayer = (id) => {
        if (id === player._id) {
            return 'row my-2 playerRanking defaultShadow'
        } else {
            return 'row my-2 rankingList'
        }
    }

    return(
        <div>
            <h3 className="mb-5 me-2">Listado Usuarios</h3>
            <ul className="mt-5 container m-auto row p-0 pe-2">
                <li className="col-4 text-start">
                    <h3 className="ms-2">Alias</h3>    
                </li>
                <li className="col-4">
                    <h3>Correo electrónico</h3>    
                </li>
                <li className="col-4 text-end">
                    <h3>Recursos</h3>    
                </li>
            </ul>
            <hr className="container" />
            <ul className="p-0 container">
                {users.sort(function(a, b){
                    if(a.alias < b.alias) { return -1; }
                    if(a.alias > b.alias) { return 1; }
                    return 0;
                }).map((user, i) => 
                    <Link to={`/perfil/${user._id}`} className='textHover' key={i}>
                        <li className={highlightPlayer(user._id)}>
                            <h3 className="col-4 text-start align-self-center">{user.alias}</h3>
                            <h3 className="col-4 align-self-center">{user.email}</h3>
                            <div className="col-4 text-end">
                                <h4>{user.points}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2 mb-1 text-info bi bi-capslock" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5 8 1.731 1.654 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1h2.846zm-9.846 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1zm6 0h-5v1h5v-1z"/>
                                    </svg>
                                </h4>
                                <h4>{user.coins}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-warning ms-2 mb-1 bi bi-coin" viewBox="0 0 16 16">
                                        <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/>
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                                    </svg>
                                </h4>
                            </div>

                        </li>
                    </ Link>    
                )}
            </ul>
        </div>
    )
}

export default UsuariosAdmin