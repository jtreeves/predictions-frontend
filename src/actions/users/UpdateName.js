import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

async function UpdateName(id, name) {
    try {
        const updatedUser = await axios.put(
            REACT_APP_SERVER_URL + 'users/' + id + '/name', 
            {name: name}
        )
        return updatedUser
    } catch (error) {
        throw error
    }
}

export default UpdateName