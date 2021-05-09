import BestFit from './BestFit'
import FavoriteModel from './FavoriteModel'

function HighlightedModels(props) {
    console.log('IN HIGHLIGHTED MODELS')
    if (!props.favorite) {
        return (
            <div>
                <BestFit 
                    bestFit={props.bestFit}
                />
            </div>
        )
    } else {
        return (
            <div>
                <BestFit 
                    bestFit={props.bestFit}
                />
                <FavoriteModel 
                    favorite={props.favorite}
                />
            </div>
        )
    }
}

export default HighlightedModels