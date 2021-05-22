import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8000/'

async function GetPredictions(id) {
    try {
        const predictions = await axios.get(
            REACT_APP_SERVER_URL + 'predictions/all/' + id
        )
        return predictions
    } catch (error) {
        throw error
    }
}

export default GetPredictions