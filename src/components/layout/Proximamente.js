import { Link } from "react-router-dom"

const Proximamente = () => {
    return (
        <div>
            <h2 className="shadowText">Esta feature aún no está lista,<br/> vuelve más tarde!</h2>
            <h2 className="mt-2">😀</h2>
            <Link to='/'><p className="textHover btn rounded-pill py-2 mt-5 px-3">Volver a Home</p></Link>
        </div>
    )
}

export default Proximamente