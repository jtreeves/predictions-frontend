import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

async function DeletePredictions(source) {
    try {
        const deletion = await axios.delete(
            REACT_APP_SERVER_URL + 'predictions/' + source
        )
        return deletion
    } catch (error) {
        throw error
    }
}

export default DeletePredictions