import { useState } from 'react'
import axios from 'axios'
import FormItem from '../main/FormItem'
import FormSubmit from '../../buttons/main/FormSubmit'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Note(props) {
    const source = props.source
    const [note, setNote] = useState(props.note)
    const [submitting, setSubmitting] = useState(false)

    const handleNote = (e) => {
        setNote(e.target.value)
    }

    const handleSubmitting = async (e) => {
        e.preventDefault()
        if (source) {
            try {
                await axios.put(
                    REACT_APP_SERVER_URL + 'predictions/' + source + '/note', 
                    {note: note}
                )
                setSubmitting(true)
            } catch(error) {
                alert(error.response.data.msg)
            }
        }
    }

    if (!submitting) {
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

                <FormSubmit 
                    text="Save Note"
                    onClick={handleSubmitting}
                    id="save-note-button"
                    display="block"
                />
            </form>
        )
    } else {
        alert('Your note was saved!')
        setSubmitting(false)
    }
}

export default Note