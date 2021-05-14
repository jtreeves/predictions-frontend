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

    const handleAbandonDelete = (e) => {
        e.preventDefault()
        setDeleteClicked(false)
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
                alert('Your account was not deleted')
                setDeleteClicked(false)
                console.log(error)
            }
        }
    }

    if (!deleteClicked) {
        return (
            <button 
                onClick={handleDeleteClicked}
            >
                Delete Account
            </button>
        )
    } else if (!confirmClicked) {
        return (
            <div>
                <p>
                    Are you sure you want to delete your account?
                </p>

                <button 
                    onClick={handleConfirmClicked}
                >
                    Yes, Delete My Account
                </button>

                <button 
                    onClick={handleAbandonDelete}
                >
                    No, Keep Account
                </button>
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