import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

async function UpdatePredictions(source, submission) {
    try {
        const predictions = await axios.put(
            REACT_APP_SERVER_URL + 'regressions/' + source, 
            { submission: submission }
        )
        return predictions
    } catch (error) {
        throw error
    }
}

export default UpdatePredictions