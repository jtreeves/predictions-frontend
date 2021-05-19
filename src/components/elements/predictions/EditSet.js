import FormItem from '../main/FormItem'
import FormButton from '../../buttons/main/FormButton'

function EditSet(props) {
    const title = <FormItem
        type="text"
        label="title"
        value={props.title}
        display="Title"
        tooltip="What do you want to call this data set?"
        onChange={props.handleTitle}
    />

    const independent = <FormItem
        type="text"
        label="independent"
        value={props.independent}
        display="Independent"
        tooltip="What is the input variable?"
        onChange={props.handleIndependent}
    />

    const dependent = <FormItem
        type="text"
        label="dependent"
        value={props.dependent}
        display="Dependent"
        tooltip="What is the output variable"
        onChange={props.handleDependent}
    />

    const precision = <FormItem
        type="number"
        label="precision"
        value={props.precision}
        display="Precision"
        tooltip="When it comes to rounding, how many decimal places do you want to use?"
        onChange={props.handlePrecision}
    />

    const dataSet = <FormItem
        type="textarea"
        label="dataSet"
        value={props.dataSet}
        display="Data Set"
        tooltip="What is the complete data set?"
        onChange={props.handleDataSet}
    />

    const submitButton = <FormButton 
        text={props.submitText}
        onClick={props.handleSubmit}
        id="submit-button"
        display="block"
    />
    
    const deleteButton = <FormButton 
        text="Delete Set"
        onClick={props.handleDelete}
        id="delete-button"
        display="block"
    />
    
    const hiddenDeleteButton = <FormButton 
        text="Delete Set"
        onClick={props.handleDelete}
        id="delete-button"
        display="none"
    />

    const undoSubmitButton = <FormButton 
        text="Abandon All Changes"
        onClick={props.handleUndoSubmit}
        id="undo-submit-button"
        display="none"
    />
    
    const undoDeleteButton = <FormButton 
        text="No, I Want to Keep the Data Set"
        onClick={props.handleUndoDelete}
        id="undo-delete-button"
        display="none"
    />

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

    if (!props.initiated || !props.stored) {
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
                {hiddenDeleteButton}
                {undoDeleteButton}
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

export default EditSet