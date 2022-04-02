import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate } from "react-router-dom"
import { playerLogin } from "../../../services/redux/actions/player"

const playerCalls = require('../../../services/axios/playerCalls')


const LogIn = () => {
    const [alias, setAlias] = useState('')
    const [password, setPassword] = useState('')
    const [submited, setSubmited] = useState(false)
    const [validCredentials, setValidCredentials] = useState(true)
    
    const player = useSelector(state => state.player)
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(player._id) setSubmited(true)
    })

    const handleChangeAlias = (e) => {
        setAlias(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const userComprobation = users.filter(user => user.alias === alias || user.password === password)
        userComprobation.length > 0 ? dispatch(playerLogin(alias, password)) :setValidCredentials(false)
    } 

    
    return (
        <div className="outletComponents container w-25 d-flex flex-column align-items-between justify-content-center">
            <div>
                <h2 className="mb-5 shadowText">Log In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="container d-flex flex-column align-items-between justify-content-center" >
                        <label className="row m-2">
                            <p className="col-6 text-light text-end pe-5 pt-1">Alias:</p>
                            <input className="col-6 rounded-pill py-1" name="alias" type='alias' required onChange={handleChangeAlias} />
                        </label>
                        <label className="row m-2">
                            <p className="col-6 text-light text-end pe-5 pt-1">Contraseña:</p>
                            <input className="col-6 rounded-pill py-1" name="password" type='password' required onChange={handleChangePassword} />
                        </label>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-evenly">
                        <button className="btn  rounded-pill mt-5" type="submit">Acceder</button>
                        <Link to='/signUp'><p className="mt-4 text-light linkLoginSignup">¿No tienes una cuenta?</p></Link>
                    </div>
                </form>
                {submited && <Navigate to='/' />}
                {validCredentials === false && <p className="text-danger mt-5">Credenciales no válidas.</p>}

            </div>
        </div>
    )
}

export default LogIn