import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TopPlayers = () =>{
    const users = useSelector(state => state.users)
    const player = useSelector(state => state.player)

    const highlightPlayer = (id) => {
        if (id === player._id) {
            return 'row my-3 playerRanking defaultShadow'
        } else {
            return 'row my-3 rankingList'
        }
    }

    const position = (position, rest) => {
        switch (position) {
            case 1:
                return `gold ${rest}`
            
            case 2: 
                return `silver ${rest}`

            case 3:
                return `bronze ${rest}`

            default:
                return `${rest}`;
        }
    }
    const positionColor = (position, rest) => {
        switch (position) {
            case 1:
                return `gold ${rest}`
            
            case 2: 
                return `silver ${rest}`

            case 3:
                return `bronze ${rest}`

            default:
                return `${rest}`;
        }
    }

    const positionEmoji = (position) => {
        switch (position) {
            case 1:
                return `🥇`
            
            case 2: 
                return `🥈`

            case 3:
                return `🥉`

            default:
                return ``;
        }
    }

    return (
        <div>
            <h3>Top Players 🏆</h3>
            <div className="pt-1">
                <ul className="mt-5 px-5 mx-auto container row">
                    <li className="col-4 ps-4 text-start">
                        <h3>Posición</h3>
                    </li>
                    <li className="col-4">
                        <h3>Alias</h3>
                    </li>
                    <li className="col-4 text-end">
                        <h3>Puntos</h3>
                    </li>
                </ul>
                <hr className="container" />
                <ul className="container">
                    {users.sort((a, b) => a.points > b.points ? -1 : 1).map((user, i) => {
                        if (i < 5) {
                            return(
                                <Link to={`/perfil/${user._id}`} className='textHover' key={i}>
                                    <li className={highlightPlayer(user._id)}>
                                        <h3 className={position(i + 1, 'col-4 text-start ps-5')}>{i + 1} {positionEmoji(i + 1)}</h3>
                                        <h3 className={position(i + 1, "col-4")}>{user.alias}</h3>
                                        <h3 className={position(i + 1, "col-4 text-end")}>{user.points} 🎲</h3>
                                    </li>
                                </ Link>
                            )
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TopPlayers