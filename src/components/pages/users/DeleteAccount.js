// Import external dependencies
import axios from 'axios'

// Create shortcut for environmental variable
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function DeleteAccount(props) {
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            await axios.delete(REACT_APP_SERVER_URL + 'users/' + props.user.id)
            props.handleLogout()
        } catch(error) {
            alert(error.response.data.msg)
            console.log(`UPDATE ERROR: ${error}`)
        }
    }

    return (
        <div className="row mt-4 col-md-7 offset-md-3 card card-body">
            <h1 className="py-2">Delete Account</h1>
            <form onSubmit={handleSubmit}>
                <p>Are you sure you want to delete your account?</p>
                <button
                    type="submit"
                    className="btn btn-primary float-right"
                >
                    Yes
                </button>
            </form>
        </div>
    )
}

export default DeleteAccount