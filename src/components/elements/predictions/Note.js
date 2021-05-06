import { useState } from 'react'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Note(props) {
    const source = props.source
    const [comment, setComment] = useState(props.comment)
    const [changing, setChanging] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    const handleComment = (e) => {
        setComment(e.target.value)
    }

    const handleChanging = (e) => {
        e.preventDefault()
        setChanging(true)
    }

    const handleSubmitting = async (e) => {
        e.preventDefault()
        try {
            await axios.put(REACT_APP_SERVER_URL + 'predictions/' + source + '/note', {note: comment})
            setSubmitting(true)
        } catch(error) {
            alert(error.response.data.msg)
            console.log(`NOTE ERROR: ${error}`)
        }
    }

    if (comment === '') {
        if (!changing) {
            return (
                <button onClick={handleChanging}>Add Note</button>
            )
        } else {
            return (
                <form onSubmit={handleSubmitting}>
                    <label for="comment">Provide some details:</label>
                    <input type="text" id="comment" name="comment" value={comment} onChange={handleComment} />
                    <button type="submit">Save Note</button>
                </form>
            )
        }
    } else {
        if (!changing) {
            return (
                <section>
                    <p><mark>Note</mark> {comment}</p>
                    <button onClick={handleChanging}>Update Note</button>
                </section>
            )
        } else if (!submitting) {
            return (
                <form onSubmit={handleSubmitting}>
                    <label for="comment">Provide more details:</label>
                    <input type="text" id="comment" name="comment" value={comment} onChange={handleComment} />
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