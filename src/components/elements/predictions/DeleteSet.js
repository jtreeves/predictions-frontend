import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function DeleteSet(props) {
    const [deleted, setDeleted] = useState(false)

    const handleDelete = async (e) => {
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
            <button onClick={handleDelete}>Delete</button>
        )
    } else {
        return <Redirect to="/datasets" />
    }
}

export default DeleteSet