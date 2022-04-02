import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate } from "react-router-dom"
import { addUser } from "../../../services/redux/actions/users"

const SignUp = () => {
    const [name, setName] = useState('')
    const [alias, setAlias] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [validate, setValidate] = useState(true)
    const [submited, setSubmited] = useState(false)
    
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    const usuario = users.filter(user => user.alias === alias)
    useEffect(() => {
        if(usuario.length > 0) setSubmited(true)
    },[users])

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeAlias = (e) => {
        setAlias(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const userComprobation = users.filter(user => user.alias === alias || user.email === email)

        if(password !== confirmPassword || userComprobation.length > 0){
            console.log('Las contraseñas no coinciden')
            return (
                setValidate(false)
            )
        } else {
            dispatch(addUser(name, alias, email, password))
        }

    }
    
    return (
        <div className="d-flex container signup flex-column align-items-between justify-content-center outletComponents p-0">
            <h2 className="mb-5 shadowText">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="container d-flex flex-column align-items-between justify-content-center p-0" >
                    <label className="row m-2">
                        <p className="col-6 text-light text-end pe-5 pt-1">Nombre Completo:</p>
                        <input className="col-6 rounded-pill py-1" name="name" type='text' required onChange={handleChangeName} />
                    </label>
                    <label className="row m-2">
                        <p className="col-6 text-light text-end pe-5 pt-1">Alias:</p>
                        <input className="col-6 rounded-pill py-1" name="name" type='text' required onChange={handleChangeAlias} />
                    </label>
                    <label className="row m-2">
                        <p className="col-6 text-light text-end pe-5 pt-1">E-mail:</p>
                        <input className="col-6 rounded-pill py-1" name="email" type='email' required onChange={handleChangeEmail} />
                    </label>
                    <label className="row m-2">
                        <p className="col-6 text-light text-end pe-5 pt-1">Contraseña:</p>
                        <input className="col-6 rounded-pill py-1" name="password" type='password' required onChange={handleChangePassword} />
                    </label>
                    <label className="row m-2">
                        <p className="col-6 text-light text-end pe-5 pt-1">Confirmar Contraseña:</p>
                        <input className="col-6 rounded-pill py-1" name="confirmPassword" type='password' required onChange={handleChangeConfirmPassword} />
                    </label>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-evenly">
                    <button className="btn  rounded-pill mt-5" type="submit">Acceder</button>
                    <Link to='/logIn'><p className="mt-4 text-light linkLoginSignup">¿Ya tienes una cuenta?</p></Link>
                </div>
            </form>
            {validate === false && <p className="text-danger">Las contraseñas no coinciden.</p>}
            {submited && <Navigate to='/login'/>}
        </div>
    )
}

export default SignUp