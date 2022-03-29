import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const Home = () => {
    const player = useSelector(state => state.player)
    
    return (
        <div>
            <h2 className="text-light">Home</h2>
            {player._id && <Link to='game' className="btn rounded-pill mt-5">Jugar!</Link>}
            {!player._id && <Link to='login' className="btn rounded-pill mt-5">Jugar!</Link>}

        </div>
    )
}