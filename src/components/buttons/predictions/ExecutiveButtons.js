import UpdateSetButton from './UpdateSetButton'
import DeleteSetButton from './DeleteSetButton'
import NewSetButton from './NewSetButton'
import SaveSetButton from './SaveSetButton'

function ExecutiveButtons(props) {
    if (!props.stored) {
        return (
            <div 
                id="executive-level"
            >
                <SaveSetButton 
                    user={props.user}
                    source={props.source}
                    stored={props.stored}
                    setStored={props.setStored}
                />

                <UpdateSetButton />

                <NewSetButton />
            </div>
        )
    } else {
        return (
            <div 
                id="executive-level"
            >
                <UpdateSetButton />

                <DeleteSetButton />

                <NewSetButton />
            </div>
        )
    }
}

export default ExecutiveButtons