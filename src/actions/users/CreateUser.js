import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8000/'

async function CreateUser(userData) {
    try {
        const newUser = await axios.post(
            REACT_APP_SERVER_URL + 'users/signup', 
            userData
        )
        return newUser
    } catch (error) {
        throw error
    }
}

export default CreateUser