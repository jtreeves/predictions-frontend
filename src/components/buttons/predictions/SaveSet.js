import SavePredictions from '../../../actions/predictions/SavePredictions'

function SaveSet(props) {
    const saved = props.stored
    const setSaved = props.setStored
    const userId = props.user.id
    const source = props.source

    const handleSave = async (e) => {
        e.preventDefault()
        if (source && userId) {
            try {
                await SavePredictions(userId, source)
                alert('Your data set was saved!')
                setSaved(true)
            } catch (error) {
                alert('Your data set was not saved')
                console.log(error)
            }
        }
    }

    if (!saved) {
        return (
            <button 
                onClick={handleSave}
            >
                Save Set
            </button>
        )
    }
}

export default SaveSet