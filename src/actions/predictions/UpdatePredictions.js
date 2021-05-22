import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8000/'

async function UpdatePredictions(source, submission) {
    try {
        const predictions = await axios.put(
            REACT_APP_SERVER_URL + 'regressions/' + source, 
            submission
        )
        return predictions
    } catch (error) {
        throw error
    }
}

export default UpdatePredictions