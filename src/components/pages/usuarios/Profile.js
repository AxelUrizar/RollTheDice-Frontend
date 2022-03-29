import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import perfil from '../../../img/foto-perfil.jpg'
import { playerLogout } from "../../../services/redux/actions/player"

export const Profile = () => {   
    const dispatch = useDispatch()
    const player = useSelector(state => state.player)

    const logout = () => {
        dispatch(playerLogout())
    }

    return (
        <div className="w-100">
            <h2>Perfil</h2>
            <div className="container mt-5 d-flex flex-column justify-content-evenly">
                <div className="row d-flex justify-content-center">
                    <div className="row col-8">
                        <img src={perfil} alt='ImagenPerfil' className='rounded-circle col-4 shadow-sm'/>
                        <div className="col-6 d-flex flex-column align-items-start justify-content-center">
                            <div className="d-flex align-items-center justify-content-center my-2">
                                <h4 className="m-0 ms-5 me-3">Nombre:</h4>
                                <p className="text-light m-0">{player.name}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-start my-2">
                                <h4 className="m-0 ms-5 me-3">Email:</h4>
                                <p className="text-light m-0">{player.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 d-flex flex-column justify-content-center">
                        <Link to={`editarPerfil`}><button className="btn rounded-pill my-3" type="submit">Editar Perfil</button></Link>
                        <Link to='/' onClick={logout}><button className="btn rounded-pill my-3">Log Out</button></Link>
                    </div>
                </div>
                <p className="my-5 text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis ante ut posuere scelerisque. Ut id mi vel purus volutpat blandit. Vivamus et dui vel nulla accumsan laoreet in ut turpis. Ut quis sollicitudin mi, ac dapibus purus. Vestibulum aliquam aliquet mauris id efficitur. Curabitur a est efficitur, efficitur nisi sit amet, ornare ipsum. Sed ac cursus sapien, in dignissim nulla. Quisque non arcu erat. Donec tristique arcu sit amet accumsan volutpat. Sed vitae nunc ut magna placerat malesuada. Donec luctus, lacus non tincidunt tristique, nulla ante dapibus nisl, id pellentesque nisl arcu a eros. Suspendisse sit amet fringilla est, sed venenatis purus. Nunc mattis suscipit erat, eu mollis mi sagittis at.</p>
            </div>
        </div>
    )
}