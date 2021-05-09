// Import internal component
import FormGroup from '../main/FormGroup'

// Create function
function CreateSet(props) {
    const title = <FormGroup
        type="text"
        label="title"
        value={props.title}
        display="Title"
        tooltip="What do you want to call this data set?"
        onChange={props.handleTitle}
    />

    const independent = <FormGroup
        type="text"
        label="independent"
        value={props.independent}
        display="Independent"
        tooltip="What is the input variable?"
        onChange={props.handleIndependent}
    />

    const dependent = <FormGroup
        type="text"
        label="dependent"
        value={props.dependent}
        display="Dependent"
        tooltip="What is the output variable"
        onChange={props.handleDependent}
    />

    const precision = <FormGroup
        type="number"
        label="precision"
        value={props.precision}
        display="Precision"
        tooltip="When it comes to rounding, how many decimal places do you want to use?"
        onChange={props.handlePrecision}
    />

    const dataSet = <FormGroup
        type="textarea"
        label="dataSet"
        value={props.dataSet}
        display="Data Set"
        tooltip="What is the complete data set?"
        onChange={props.handleDataSet}
    />

    const submitButton = <button 
        className="submission"
        id="submit-button"
        onClick={props.handleSubmit}
    >
        {props.button}
    </button>
    
    const deleteButton = <button 
        className="submission"
        id="delete-button"
        onClick={props.handleDelete}
    >
        Delete Set
    </button>

    if (!props.stored) {
        return (
            <form id="raw-data-form">
                {title}
                {independent}
                {dependent}
                {precision}
                {dataSet}
                {submitButton}
            </form>
        )
    } else {
        return (
            <form id="raw-data-form">
                {title}
                {independent}
                {dependent}
                {precision}
                {dataSet}
                {submitButton}
                {deleteButton}
            </form>
        )
    }
}

// Export function
export default CreateSet