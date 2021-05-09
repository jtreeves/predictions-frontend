import { useState } from 'react'
import axios from 'axios'
import FormGroup from '../main/FormGroup'
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
        try {
            await axios.put(REACT_APP_SERVER_URL + 'predictions/' + source + '/note', {note: note})
            setSubmitting(true)
        } catch(error) {
            alert(error.response.data.msg)
        }
    }

    if (!submitting) {
        return (
            <section>
                <mark>Note</mark>
                <form onSubmit={handleSubmitting}>
                    <FormGroup
                        type="textarea"
                        label="note"
                        value={note}
                        display="Provide some details:"
                        tooltip="Add a note to save your thoughts about this data set"
                        onChange={handleNote}
                    />
                    <button type="submit">Save Note</button>
                </form>
            </section>
        )
    } else {
        alert('Your note was saved!')
        setSubmitting(false)
    }
}

export default Note