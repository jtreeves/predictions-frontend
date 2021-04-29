// Import external dependencies
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

// Import internal component
import FormGroup from '../main/FormGroup'

// Create shortcut for environmental variable
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function ChangeName(props) {
    const [updateClicked, setUpdateClicked] = useState(false)
    const [saveClicked, setSaveClicked] = useState(false)
    const [name, setName] = useState(props.user.name)

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        setUpdateClicked(true)
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            await axios.put(REACT_APP_SERVER_URL + 'users/' + props.user.id, {name})
            setSaveClicked(true)
        } catch(error) {
            alert(error.response.data.msg)
            console.log(`UPDATE ERROR: ${error}`)
        }
    }

    if (!updateClicked && !saveClicked) {
        return (
            <form onSubmit={handleUpdate}>
                <button type="submit">Change Name</button>
            </form>
        )
    }

    if (updateClicked && !saveClicked) {
        return (
            <form onSubmit={handleSubmit}>
                <FormGroup
                    type="text"
                    label="name"
                    value={name}
                    display="Name"
                    onChange={handleName}
                />
                <button
                    type="submit"
                    className="btn btn-primary float-right"
                >
                    Update Name
                </button>
            </form>
        )
    }

    if (saveClicked) {
        return (
            <Redirect to="/profile" />
        )
    }
}

export default ChangeName