import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

async function UpdateEmail(id, email) {
    try {
        const updatedUser = await axios.put(
            REACT_APP_SERVER_URL + 'users/' + id + '/email', 
            {email: email}
        )
        return updatedUser
    } catch (error) {
        throw error
    }
}

export default UpdateEmail