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
                <UpdateButton />

                <DeleteButton />

                <NewSet />
            </div>
        )
    }
}

export default ExecutiveButtons