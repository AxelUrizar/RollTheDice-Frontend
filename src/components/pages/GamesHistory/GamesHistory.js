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
                        return (
                            <Link to={`game/${game._id}`} className='textHover' key={i}>
                                <li key={i} className="row my-3 rankingList">
                                    <h3 className="col">{game.playerCounter} - {game.botCounter}</h3>
                                    <h3 className={checkResult(game.finalResult, 'col')}>{game.finalResult}</h3>
                                    <div className='col row d-flex align-items-center ms-2'>
                                        <h3 className={checkResult(game.finalResult, 'col text-end')}>{pointsSymbol(game.finalResult)}{game.points}</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="col justify-self-start p-0 text-info bi bi-capslock" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5 8 1.731 1.654 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1h2.846zm-9.846 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1zm6 0h-5v1h5v-1z"/>
                                        </svg>
                                    </div>
                                    <h3 className="col ms-1">{game.gameDate}</h3>
                                </li>
                            </ Link>    
                        )
                    })
                }
                {userHistory < 1 && <h3 className="mt-5">No hay partidas registradas</h3>}
            </ul>
        </div>
    )
}

export default GamesHistory