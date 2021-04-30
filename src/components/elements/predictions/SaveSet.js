import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function SaveSet(props) {
    const [saved, setSaved] = useState(false)
    const userId = props.user.id
    const source = props.source

    const handleSubmit = async (e) => {
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
            <div>
                <form onSubmit={handleSubmit}>
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    } else {
        return <Redirect to="/profile" />
    }
}

export default SaveSet