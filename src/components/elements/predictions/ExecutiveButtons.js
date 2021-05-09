import EditSet from './EditSet'
import Favorite from './Favorite'
import DeleteSet from './DeleteSet'
import NewSet from './NewSet'
import Note from './Note'
import SaveSet from './SaveSet'
import UpdateSet from './UpdateSet'

function ExecutiveButtons(props) {
    if (!props.stored) {
        return (
            <div>
                <SaveSet 
                    user={props.user}
                    source={props.source}
                />
                <EditSet />
                <NewSet />
            </div>
        )
    } else {
        return (
            <div>
                <Favorite 
                    source={props.source}
                    favorite={props.favorite}
                />

                <Note 
                    note={props.note}
                    source={props.source}
                />

                <UpdateSet 
                    source={props.source} 
                    title={props.title}
                    independent={props.independent}
                    dependent={props.dependent}
                    precision={props.precision}
                    dataSet={props.points}
                    favorite={props.favorite}
                    note={props.note}
                    user={props.user}
                />
                
                <DeleteSet 
                    source={props.source}
                />
            </div>
        )
    }
}

export default ExecutiveButtons