import UpdateButton from './UpdateButton'
import DeleteButton from './DeleteButton'
import NewSet from './NewSet'
import SaveSet from './SaveSet'

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