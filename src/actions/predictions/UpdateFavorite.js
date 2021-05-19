import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

async function UpdateFavorite(source, favorite) {
    try {
        const updatedPredictions = await axios.put(
            REACT_APP_SERVER_URL + 'predictions/' + source + '/favorite', 
            { favorite: favorite }
        )
        return updatedPredictions
    } catch (error) {
        throw error
    }
}

export default UpdateFavorite