import BestFit from '../../elements/predictions/BestFit'
import Favorite from '../../elements/predictions/Favorite'
import Note from '../../elements/predictions/Note'

function Highlights(props) {
    return (
        <section 
            className="analysis"
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

                    <Favorite 
                        favorite={props.favorite}
                        source={props.source}
                    />
                </aside>

                <Note 
                    note={props.note}
                    source={props.source}
                />
            </div>
        </section>
    )
}

export default Highlights