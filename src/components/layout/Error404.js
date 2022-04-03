import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <div>
            <h2 className="shadowText mb-2">ERROR 404</h2>
            <p className="mb-1">Parece que lo que buscas no se encuentra aquí...</p>
            <h2>😢</h2>
            <Link to='/'><p className="textHover btn rounded-pill py-2 px-3 mt-4">Volver a Home</p></Link>
        </div>
    )
}

export default Error404