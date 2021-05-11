import { useState } from 'react'
import axios from 'axios'
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
            await axios.put(
                REACT_APP_SERVER_URL + 'predictions/' + source + '/note', 
                {note: note}
            )
            setSubmitting(true)
        } catch(error) {
            alert(error.response.data.msg)
        }
    }

    if (!submitting) {
        return (
            <article 
                className="analysis"
                id="note"
            >
                <mark>Note</mark>

                <form>
                    <textarea
                        value={note}
                        onChange={handleNote}
                    />

                    <button onClick={handleSubmitting}>
                        Save Note
                    </button>
                </form>
            </article>
        )
    } else {
        alert('Your note was saved!')
        setSubmitting(false)
    }
}

export default Note