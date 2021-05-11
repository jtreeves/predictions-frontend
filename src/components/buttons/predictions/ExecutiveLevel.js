import UpdateSet from './UpdateSet'
import DeleteSet from './DeleteSet'
import NewSet from './NewSet'
import SaveSet from './SaveSet'

function ExecutiveLevel(props) {
    if (!props.stored) {
        return (
            <section className="executive-buttons">
                <SaveSet 
                    user={props.user}
                    source={props.source}
                    stored={props.stored}
                    setStored={props.setStored}
                />

                <UpdateSet />

                <NewSet />
            </section>
        )
    } else {
        return (
            <section className="executive-buttons">
                <UpdateSet />

                <DeleteSet />

                <NewSet />
            </section>
        )
    }
}

export default ExecutiveLevel