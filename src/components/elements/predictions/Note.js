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
                <form onSubmit={handleChanging}>
                    <button type="submit">Add Note</button>
                </form>
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
                <div>
                    <p><em><strong>Note</strong></em> {comment}</p>
                    <form onSubmit={handleChanging}>
                        <button type="submit">Update Note</button>
                    </form>
                </div>
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