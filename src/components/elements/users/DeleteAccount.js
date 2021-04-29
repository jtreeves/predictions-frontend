// Import external dependencies
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

// Create shortcut for environmental variable
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function DeleteAccount(props) {
    const [deleted, setDeleted] = useState(false)

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            await axios.delete(REACT_APP_SERVER_URL + 'users/' + props.user.id)
            setDeleted(true)
            props.handleLogout()
        } catch(error) {
            alert(error.response.data.msg)
            console.log(`DELETING ERROR: ${error}`)
        }
    }

    if (deleted) props.handleLogout()

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit">Delete Account</button>
            </form>
        </div>
    )
}

export default DeleteAccount