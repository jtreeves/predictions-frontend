import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8000/'

async function GetUser(id) {
    try {
        const user = await axios.get(
            REACT_APP_SERVER_URL + 'users/' + id
        )
        return user
    } catch (error) {
        throw error
    }
}

export default GetUser