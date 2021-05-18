import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

async function CreateSession(userData) {
    try {
        await axios.post(
            REACT_APP_SERVER_URL + 'users/login', 
            userData
        )
    } catch (error) {
        throw error
    }
}

export default CreateSession