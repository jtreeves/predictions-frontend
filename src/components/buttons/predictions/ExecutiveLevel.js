import UpdateSet from './UpdateSet'
import DeleteSet from './DeleteSet'
import NewSet from './NewSet'
import SaveSet from './SaveSet'

function ExecutiveLevel(props) {
    if (!props.stored) {
        return (
            <div 
                id="executive-level"
            >
                <SaveSet 
                    user={props.user}
                    source={props.source}
                    stored={props.stored}
                    setStored={props.setStored}
                />

                <UpdateSet />

                <NewSet />
            </div>
        )
    } else {
        return (
            <div 
                id="executive-level"
            >
                <UpdateSet />

                <DeleteSet />

                <NewSet />
            </div>
        )
    }
}

export default ExecutiveLevel