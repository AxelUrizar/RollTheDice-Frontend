import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const UsuariosAdmin = () => {
    const users = useSelector(state => state.users.list)
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
            <h3 className="me-2 mb-3">Listado Usuarios</h3>
            <p>(Orden Alfabético)</p>
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
                                <h4>{user.points} 🎲</h4>
                                <h4>{user.coins} 💸</h4>
                            </div>

                        </li>
                    </ Link>    
                )}
            </ul>
        </div>
    )
}

export default UsuariosAdmin