import UpdateSet from './UpdateSet'
import DeleteSet from './DeleteSet'
import NewSet from './NewSet'
import SaveSet from './SaveSet'

function ExecutiveLevel(props) {
    if (!props.stored) {
        return (
            <article 
                className="analysis"
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
            </article>
        )
    } else {
        return (
            <article 
                className="analysis"
                id="executive-level"
            >
                <UpdateSet />

                <DeleteSet />

                <NewSet />
            </article>
        )
    }
}

export default ExecutiveLevel