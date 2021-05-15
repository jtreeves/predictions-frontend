import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function DeleteAccount(props) {
    const [redirecting, setRedirecting] = useState(false)
    const userId = props.user.id
    const logout = props.handleLogout
    const deletingAccount = props.deletingAccount
    const setDeletingAccount = props.setDeletingAccount

    const handleInitiate = (e) => {
        e.preventDefault()
        setDeletingAccount(true)
    }

    const handleAbandon = (e) => {
        e.preventDefault()
        setDeletingAccount(false)
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        if (userId) {
            try {
                await axios.delete(
                    REACT_APP_SERVER_URL + 'users/' + userId
                )
                setRedirecting(true)
            } catch (error) {
                alert('Your account was not deleted')
                setDeletingAccount(false)
                console.log(error)
            }
        }
    }

    if (!deletingAccount) {
        return (
            <button 
                onClick={handleInitiate}
            >
                Delete Account
            </button>
        )
    } else if (!redirecting) {
        return (
            <div>
                <p>
                    Are you sure you want to delete your account?
                </p>

                <button 
                    onClick={handleDelete}
                >
                    Yes, Delete My Account
                </button>

                <button 
                    onClick={handleAbandon}
                >
                    No, Keep Account
                </button>
            </div>
        )
    } else {
        logout()
        return (
            <Redirect to="/signup"/>
        )
    }
}

export default DeleteAccount