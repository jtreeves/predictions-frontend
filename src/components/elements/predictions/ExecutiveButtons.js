import UpdateButton from './UpdateButton'
import DeleteButton from './DeleteButton'
import NewSet from './NewSet'
import SaveSet from './SaveSet'

function ExecutiveButtons(props) {
    if (!props.stored) {
        return (
            <section className="executive-buttons">
                <SaveSet 
                    user={props.user}
                    source={props.source}
                />

                <UpdateButton />

                <NewSet />
            </section>
        )
    } else {
        return (
            <section className="executive-buttons">
                <UpdateButton />

                <DeleteButton />

                <NewSet />
            </section>
        )
    }
}

export default ExecutiveButtons