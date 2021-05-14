import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function DeleteAccount(props) {
    const [deleteClicked, setDeleteClicked] = useState(false)
    const [confirmClicked, setConfirmClicked] = useState(false)

    const handleDeleteClicked = (e) => {
        e.preventDefault()
        setDeleteClicked(true)
    }

    const handleConfirmClicked = async (e) => {
        e.preventDefault()
        if (props.user.id) {
            try {
                await axios.delete(
                    REACT_APP_SERVER_URL + 'users/' + props.user.id
                )
                setConfirmClicked(true)
            } catch (error) {
                alert(error.response.data.msg)
            }
        }
    }

    if (!deleteClicked && !confirmClicked) {
        return (
            <button 
                onClick={handleDeleteClicked}
            >
                Delete Account
            </button>
        )
    } else if (deleteClicked && !confirmClicked) {
        return (
            <button 
                onClick={handleConfirmClicked}
            >
                Yes, Delete My Account
            </button>
        )
    } else {
        props.handleLogout()
        return (
            <Redirect to="/signup"/>
        )
    }
}

export default DeleteAccount