import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import LastGames from "./LastGames"
import TopPlayers from "./TopPlayers"

export const Home = () => {
    const player = useSelector(state => state.player)
    
    return (
        <div>
            <div className="col mb-5">
                {player._id && <Link to='game' className="btn rounded-pill py-2 px-4 mt-5"><h4>Jugar ⚡</h4></Link>}
                {!player._id && <Link to='login' className="btn rounded-pill py-2 px-4 mt-5"><h4>Jugar ⚡</h4></Link>}
            </div>
            <div className="row m-auto w-75 ">
                <div className="col me-4 pt-5">
                    <TopPlayers />
                </div>
                <div className="col ms-4 pt-5">
                    <LastGames />
                </div>
            </div>
        </div>
    )
}