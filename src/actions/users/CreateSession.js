import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8000/'

async function CreateSession(userData) {
    try {
        const newSession = await axios.post(
            REACT_APP_SERVER_URL + 'users/login', 
            userData
        )
        return newSession
    } catch (error) {
        throw error
    }
}

export default CreateSession