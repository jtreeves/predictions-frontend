import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8000/'

async function CreatePredictions(submission) {
    try {
        const predictions = await axios.post(
            REACT_APP_SERVER_URL + 'regressions',
            submission
        )
        return predictions
    } catch (error) {
        throw error
    }
}

export default CreatePredictions