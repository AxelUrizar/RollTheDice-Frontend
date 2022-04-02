import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Ranking = () => {  
    const users = useSelector(state => state.users)
    const player = useSelector(state => state.player)

    const highlightPlayer = (id) => {
        if (id === player._id) {
            return 'row my-3 playerRanking defaultShadow'
        } else {
            return 'row my-3 rankingList'
        }
    }
    return (
        <div className="w-100 h-100">
            <h2>Ránking</h2>
            <ul className="mt-5 px-4 mx-auto container row">
                <li className="col-4 text-start">
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
                {users.sort((a, b) => a.points > b.points ? -1 : 1).map((user, i) => 
                    <Link to={`/perfil/${user._id}`} className='textHover' key={i}><li className={highlightPlayer(user._id)}>
                        <h3 className="col-4 text-start ps-5">{i + 1}</h3>
                        <h3 className="col-4">{user.alias}</h3>
                        <h3 className="col-4 text-end">{user.points} 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2 mb-1 text-info bi bi-capslock" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5 8 1.731 1.654 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1h2.846zm-9.846 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1zm6 0h-5v1h5v-1z"/>
                            </svg>
                        </h3>
                    </li></ Link>    
                )}
            </ul>
        </div>
    )
}