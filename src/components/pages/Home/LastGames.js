import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const LastGames = () => {
    const gamesHistory = useSelector(state => state.gamesHistory)
    const users = useSelector(state => state.users)

    const getUser = (userId) => {
        const filtered = users.filter(user => user._id === userId)

        if(filtered.length > 0) {
            return filtered[0].alias
        } else {
            return ''
        }
    }

    const checkResult = (result, restClassName) => {
        switch (result) {
            case 'Win':
                return `${restClassName} text-success`
            
            case 'Tie':
                return `${restClassName}`

            case 'Lose':
                return `${restClassName} text-danger`
        
            default:
                return `${restClassName}`
        }
    }

    const pointsSymbol = (result) => {
        switch (result) {
            case 'Win':
                return '+'
            
            case 'Tie':
                return '±'
        
            case 'Lose':
                break

            default:
                break;
        }
    }

    return (
        <div>
            <h2>Últimas Partidas </h2>
            <div className="mt-5 mx-auto container">
                <div className="row px-4">
                    <h3 className="col">Marcador</h3>
                    <h3 className="col">Resultado</h3>
                    <h3 className="col">Puntos</h3>
                    <h3 className="col">Jugador</h3>
                </div>
            </div>
            <hr className="container" />
            <ul className="container">
                {gamesHistory.length > 0 && 
                    gamesHistory.map((game, i) => {
                        if(i < 5) {
                            
                            return (
                                <Link to={`/gameDetails/${game._id}`} className='textHover' key={i}>
                                    <li key={i} className="row my-3 rankingList">
                                        <h3 className="col">{game.playerCounter} - {game.botCounter}</h3>
                                        <h3 className={checkResult(game.finalResult, 'col')}>{game.finalResult}</h3>
                                        <div className='col'>
                                            <h3 className={checkResult(game.finalResult, 'ms-4')}>{pointsSymbol(game.finalResult)}{game.points} 🎲</h3>
                                        </div>
                                        <h3 className="col ms-1">{getUser(game.userId)}</h3>
                                    </li>
                                </ Link>    
                            )
                        }
                        
                    })
                }
                {gamesHistory < 1 && <h3 className="mt-5">Cargando...</h3>}
            </ul>
        </div>
    )
}

export default LastGames