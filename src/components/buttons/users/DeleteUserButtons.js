import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import DeleteUser from '../../../actions/users/DeleteUser'

function DeleteUserButtons(props) {
    const [redirecting, setRedirecting] = useState(false)
    const id = props.id
    const logout = props.logout
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
        if (id) {
            try {
                await DeleteUser(id)
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
            <form>
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
            </form>
        )
    } else {
        logout()
        return (
            <Redirect to="/signup"/>
        )
    }
}

export default DeleteUserButtons