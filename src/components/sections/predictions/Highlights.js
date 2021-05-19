import BestFit from '../../elements/predictions/BestFit'
import FavoriteModel from '../../elements/predictions/FavoriteModel'
import NoteOnModels from '../../elements/predictions/NoteOnModels'

function Highlights(props) {
    return (
        <section 
            id="highlights"
        >
            <h2>Highlights</h2>

            <div>
                <aside>
                    <BestFit 
                        bestFit={props.bestFit}
                        correlation={props.correlation}
                        precision={props.precision}
                    />

                    <FavoriteModel 
                        favorite={props.favorite}
                        setFavorite={props.setFavorite}
                        source={props.source}
                    />
                </aside>

                <NoteOnModels 
                    note={props.note}
                    setNote={props.setNote}
                    source={props.source}
                />
            </div>
        </section>
    )
}

export default Highlights