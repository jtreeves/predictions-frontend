// Import external dependencies
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

// Create shortcut for environmental variable
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function DeleteAccount(props) {
    const [deleteClicked, setDeleteClicked] = useState(false)
    const [confirmClicked, setConfirmClicked] = useState(false)

    const handleDeleteClicked = (e) => {
        e.preventDefault()
        setDeleteClicked(true)
    }

    const handleConfirmClicked = async (e) => {
        try {
            e.preventDefault()
            await axios.delete(REACT_APP_SERVER_URL + 'users/' + props.user.id)
            setConfirmClicked(true)
        } catch(error) {
            alert(error.response.data.msg)
            console.log(`DELETING ERROR: ${error}`)
        }
    }

    if (!deleteClicked && !confirmClicked) {
        return (
            <div>
                <form onSubmit={handleDeleteClicked}>
                    <button type="submit">Delete Account</button>
                </form>
            </div>
        )
    } else if (deleteClicked && !confirmClicked) {
        return (
            <div>
                <form onSubmit={handleConfirmClicked}>
                    <button type="submit">Yes, Delete My Account</button>
                </form>
            </div>
        )
    } else {
        props.handleLogout()
        return (
            <Redirect to="/signup"/>
        )
    }
}

export default DeleteAccount