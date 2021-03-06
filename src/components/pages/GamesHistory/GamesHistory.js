import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"

const GamesHistory = () => {
    const {id} = useParams()

    const gamesHistory = useSelector(state => state.gamesHistory)
    const userHistory = gamesHistory.filter((game => game.userId === id))

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
            <h2>Historial</h2>
            <p className="mt-3">(Últimas 10 partidas)</p>
            <div className="mt-5 mx-auto container">
                <div className="row px-4">
                    <h3 className="col">Marcador</h3>
                    <h3 className="col">Resultado</h3>
                    <h3 className="col">Puntos</h3>
                    <h3 className="col">Fecha</h3>
                </div>
            </div>
            <hr className="container" />
            <ul className="container">
                {userHistory.length > 0 && 
                    userHistory.map((game, i) => {
                        if(i < 10) {
                            return (
                                <Link to={`/gameDetails/${game._id}`} className='textHover' key={i}>
                                    <li key={i} className="row my-3 rankingList">
                                        <h3 className="col">{game.playerCounter} - {game.botCounter}</h3>
                                        <h3 className={checkResult(game.finalResult, 'col')}>{game.finalResult}</h3>
                                        <div className='col'>
                                            <h3 className={checkResult(game.finalResult, 'ms-4')}>{pointsSymbol(game.finalResult)}{game.points} 🎲</h3>
                                        </div>
                                        <h3 className="col ms-1">{game.gameDate}</h3>
                                    </li>
                                </ Link>    
                            )
                        }
                        
                    })
                }
                {userHistory < 1 && <h3 className="mt-5">No hay partidas registradas</h3>}
            </ul>
        </div>
    )
}

export default GamesHistory