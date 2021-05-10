import { useState } from 'react'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function SaveSet(props) {
    const [saved, setSaved] = useState(false)
    const userId = props.user.id
    const source = props.source

    const handleSave = async (e) => {
        try {
            e.preventDefault()
            await axios.post(REACT_APP_SERVER_URL + 'predictions/' + userId, { source })
            setSaved(true)
        } catch(error) {
            alert(error.response.data.msg)
            console.log(`SAVE PREDICTION ERROR: ${error}`)
        }
    }

    if (!saved) {
        return (
            <button onClick={handleSave}>Save Set</button>
        )
    } else {
        alert('Your data set was saved!')
        setSaved(false)
    }
}

export default SaveSet