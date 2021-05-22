import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8000/'

async function DeleteUser(id) {
    try {
        const deletion = await axios.delete(
            REACT_APP_SERVER_URL + 'users/' + id
        )
        return deletion
    } catch (error) {
        throw error
    }
}

export default DeleteUser