import FormGroup from '../main/FormGroup'

function Save(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <FormGroup
                    type="hidden"
                    label="user"
                    value={props.user}
                />
                <FormGroup
                    type="hidden"
                    label="source"
                    value={props.source}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default Save