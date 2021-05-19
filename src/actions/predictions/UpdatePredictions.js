import UpdateFavorite from './UpdateFavorite'
import UpdateNote from './UpdateNote'
import UpdateDataSet from './UpdateDataSet'

async function UpdatePredictions(source, submission, favorite, note) {
    try {
        await UpdateFavorite(source, favorite)
        await UpdateNote(source, note)
        const predictions = await UpdateDataSet(source, submission)
        return predictions
    } catch (error) {
        throw error
    }
}

export default UpdatePredictions