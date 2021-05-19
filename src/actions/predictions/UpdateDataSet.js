import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

async function UpdateDataSet(source, submission) {
    try {
        const updatedPredictions = await axios.put(
            REACT_APP_SERVER_URL + 'regressions/' + source, 
            { submission: submission }
        )
        return updatedPredictions
    } catch (error) {
        throw error
    }
}

export default UpdateDataSet