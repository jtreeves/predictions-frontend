import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function SaveSet(props) {
    const saved = props.stored
    const setSaved = props.setStored
    const userId = props.user.id
    const source = props.source

    const handleSave = async (e) => {
        try {
            e.preventDefault()
            await axios.post(REACT_APP_SERVER_URL + 'predictions/' + userId, { source })
            alert('Your data set was saved!')
            setSaved(true)
        } catch(error) {
            alert(error)
        }
    }

    if (!saved) {
        return (
            <button onClick={handleSave}>Save Set</button>
        )
    }
}

export default SaveSet