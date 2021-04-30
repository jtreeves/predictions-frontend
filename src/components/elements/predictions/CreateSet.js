// Import internal component
import FormGroup from '../main/FormGroup'

// Create function
function CreateSet(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <form onSubmit={props.handleSubmit}>
                <FormGroup
                    type="text"
                    label="title"
                    value={props.title}
                    display="Title"
                    onChange={props.handleTitle}
                />
                <FormGroup
                    type="text"
                    label="independent"
                    value={props.independent}
                    display="Independent"
                    onChange={props.handleIndependent}
                />
                <FormGroup
                    type="text"
                    label="dependent"
                    value={props.dependent}
                    display="Dependent"
                    onChange={props.handleDependent}
                />
                <FormGroup
                    type="text"
                    label="precision"
                    value={props.precision}
                    display="Precision"
                    onChange={props.handlePrecision}
                />
                <FormGroup
                    type="text"
                    label="dataSet"
                    value={props.dataSet}
                    display="Data Set"
                    onChange={props.handleDataSet}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

// Export function
export default CreateSet