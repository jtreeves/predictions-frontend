import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8000/'

async function UpdateNote(source, note) {
    try {
        const updatedPredictions = await axios.put(
            REACT_APP_SERVER_URL + 'predictions/' + source + '/note', 
            { note: note }
        )
        return updatedPredictions
    } catch (error) {
        throw error
    }
}

export default UpdateNote