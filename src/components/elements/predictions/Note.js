import { useState } from 'react'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Note(props) {
    const source = props.source
    const [note, setNote] = useState(props.note)
    const [changing, setChanging] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    const handleNote = (e) => {
        setNote(e.target.value)
    }

    const handleChanging = (e) => {
        e.preventDefault()
        setChanging(true)
    }

    const handleSubmitting = async (e) => {
        e.preventDefault()
        try {
            await axios.put(REACT_APP_SERVER_URL + 'predictions/' + source + '/note', {note: note})
            setSubmitting(true)
        } catch(error) {
            alert(error.response.data.msg)
            console.log(`NOTE ERROR: ${error}`)
        }
    }

    if (note === '') {
        if (!changing) {
            return (
                <button onClick={handleChanging}>Add Note</button>
            )
        } else {
            return (
                <form onSubmit={handleSubmitting}>
                    <label for="note">Provide some details:</label>
                    <input type="text" id="note" name="note" value={note} onChange={handleNote} />
                    <button type="submit">Save Note</button>
                </form>
            )
        }
    } else {
        if (!changing) {
            return (
                <section>
                    <p><mark>Note</mark> {note}</p>
                    <button onClick={handleChanging}>Update Note</button>
                </section>
            )
        } else if (!submitting) {
            return (
                <form onSubmit={handleSubmitting}>
                    <label for="note">Provide more details:</label>
                    <input type="text" id="note" name="note" value={note} onChange={handleNote} />
                    <button type="submit">Save Note</button>
                </form>
            )
        } else {
            setChanging(false)
            setSubmitting(false)
        }
    }
}

export default Note