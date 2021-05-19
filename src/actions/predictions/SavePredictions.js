import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

async function SavePredictions(id, source) {
    try {
        const predictions = await axios.post(
            REACT_APP_SERVER_URL + 'predictions/' + id, 
            { source }
        )
        return predictions
    } catch (error) {
        throw error
    }
}

export default SavePredictions