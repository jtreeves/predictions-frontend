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

    const undoSubmitButton = <button
        id="undo-submit-button"
        onClick={props.handleUndoSubmit}
        style={{ display: 'none' }}
    >
        Abandon All Changes
    </button>
    
    const undoDeleteButton = <button
        id="undo-delete-button"
        onClick={props.handleUndoDelete}
        style={{ display: 'none' }}
    >
        No, I Want to Keep the Data Set
    </button>

    const submitWarning = <p
        id="submit-warning"
        style={{ display: 'none' }}
    >
        Make any changes you want, then click the update button
    </p>
    
    const deleteWarning = <p
        id="delete-warning"
        style={{ display: 'none' }}
    >
        Are you sure you want to delete this set?
    </p>

    if (!props.stored) {
        return (
            <form>
                {title}
                {independent}
                {dependent}
                {precision}
                {dataSet}
                {submitWarning}
                {submitButton}
                {undoSubmitButton}
            </form>
        )
    } else {
        return (
            <form>
                {title}
                {independent}
                {dependent}
                {precision}
                {dataSet}
                {submitWarning}
                {submitButton}
                {undoSubmitButton}
                {deleteWarning}
                {deleteButton}
                {undoDeleteButton}
            </form>
        )
    }
}

// Export function
export default CreateSet