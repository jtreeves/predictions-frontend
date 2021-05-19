import FormItem from '../main/FormItem'
import FormButton from '../../buttons/main/FormButton'
import UpdateNote from '../../../actions/predictions/UpdateNote'

function NoteOnModels(props) {
    const source = props.source
    const note = props.note
    const setNote = props.setNote

    const handleNote = (e) => {
        setNote(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (source) {
            try {
                await UpdateNote(source, note)
                alert('Your note was saved!')
            } catch (error) {
                alert('Your note was not saved')
                console.log(error)
            }
        }
    }

    return (
        <form className="analysis">
            <h3>Note</h3>

            <FormItem 
                type="textarea"
                label="note"
                value={note}
                display="Add your thoughts about this data set"
                tooltip="Is there anything you want to highlight for later use?"
                onChange={handleNote}
            />

            <FormButton 
                text="Save Note"
                onClick={handleSubmit}
                id="save-note-button"
                display="block"
            />
        </form>
    )
}

export default NoteOnModels