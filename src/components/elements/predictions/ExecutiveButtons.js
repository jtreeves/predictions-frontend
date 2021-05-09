import Favorite from './Favorite'
import NewSet from './NewSet'
import Note from './Note'
import SaveSet from './SaveSet'
import UpdateButton from './UpdateButton'
import DeleteButton from './DeleteButton'

function ExecutiveButtons(props) {
    if (!props.stored) {
        return (
            <div>
                <SaveSet 
                    user={props.user}
                    source={props.source}
                />

                <UpdateButton />

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

                <UpdateButton />

                <DeleteButton />
            </div>
        )
    }
}

export default ExecutiveButtons