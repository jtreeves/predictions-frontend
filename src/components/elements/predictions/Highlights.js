import BestFit from './BestFit'
import Favorite from './Favorite'
import FavoriteModel from './FavoriteModel'
import Note from './Note'

function Highlights(props) {
    return (
        <div>
            <BestFit 
                bestFit={props.bestFit}
            />
            <Favorite 
                favorite={props.favorite}
                source={props.source}
            />
            <Note 
                note={props.note}
                source={props.source}
            />
        </div>
    )
}

export default Highlights