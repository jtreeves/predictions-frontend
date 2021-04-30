import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function DeleteSet(props) {
    const [deleted, setDeleted] = useState(false)

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            await axios.delete(REACT_APP_SERVER_URL + 'predictions/' + props.source)
            setDeleted(true)
        } catch(error) {
            alert(error.response.data.msg)
            console.log(`DELETE PREDICTION ERROR: ${error}`)
        }
    }

    if (!deleted) {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <button type="submit">Delete</button>
                </form>
            </div>
        )
    } else {
        return <Redirect to="/profile" />
    }
}

export default DeleteSet