import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { updatePlayerAliasAdmin } from "../../../services/redux/actions/admin"
import { updatePlayerAlias } from "../../../services/redux/actions/player"

export const EditarPerfil = () => {
    const {id} = useParams()
    // console.log(id)
    const player = useSelector(state => state.player)
    const users = useSelector(state => state.users.list)
    const usersFilter = users.filter(user => user._id === id)
    const user = usersFilter[0]

    const [editAlias, setEditAlias] = useState(false)
    const [alias, setAlias] = useState(user.alias)
    // console.log(nombre, email)

    const dispatch = useDispatch()

    const toggleEditAlias = () => {
        if (!editAlias) {
            setEditAlias(true)
        } else {
            setEditAlias(false)
        }
    }

    const handleChangeAlias = (e) => {
        setAlias(e.target.value)
    }

    const handleSubmitAlias = (e) => {
        e.preventDefault()

        if (user._id === player._id){
            if (alias === '') {

                dispatch(updatePlayerAlias(user.alias))
        
                toggleEditAlias()  
            } else {
                dispatch(updatePlayerAlias(alias))
        
                toggleEditAlias()            
            }
        } else if (player.rol === 'admin') {
            dispatch(updatePlayerAliasAdmin(alias, id))

            toggleEditAlias()
        }

    }

    return (
        <div>
            <h2 className="shadowText">Edita tu Perfil</h2>
            <div className="w-100 container d-flex row align-items-center justify-content-center m-auto">
                {!editAlias && 
                    <div className="col-12 row d-flex align-items-center justify-content-center mt-5">
                        <h4 className="col-2 m-0 p-0 text-end">Nombre:</h4>
                        <p className="col-3 text-light m-0 p-0">{alias}</p>
                        <div className="col-2 m-0 p-0">
                            <button className="btn rounded-pill" onClick={toggleEditAlias}>Editar Nombre</button>
                        </div>
                    </div>
                }
                {editAlias && 
                    <form className="col-12 row d-flex align-items-center justify-content-center mt-5"  onSubmit={handleSubmitAlias}>
                        <h4 className="col-2 m-0 p-0 text-end">Nombre:</h4>
                        <div className='col-3 pe-0'><input type='text' placeholder={alias} onChange={handleChangeAlias} className='text-center fw-bold rounded-pill py-1' /></div>
                        <div className="col-2 m-0 p-0">
                            <button className="btn rounded-pill" type="submit">Confirmar</button>
                        </div>                    
                    </form>
                }
            </div>
            <Link to={`/perfil/${id}`}><button className="btn rounded-pill my-5">Volver</button></Link>
        </div>

    )
}

