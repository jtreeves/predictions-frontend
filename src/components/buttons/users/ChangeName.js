// Import external dependencies
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

// Import internal component
import FormItem from '../../elements/main/FormItem'
import FormSubmit from '../main/FormSubmit'

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
            await axios.put(
                REACT_APP_SERVER_URL + 'users/' + props.user.id + '/name', 
                {name}
            )
            setSaveClicked(true)
        } catch(error) {
            alert(error.response.data.msg)
        }
    }

    if (!updateClicked && !saveClicked) {
        return (
            <button 
                onClick={handleUpdate}
                className="profile"
            >
                Change Name
            </button>
        )
    } else if (updateClicked && !saveClicked) {
        return (
            <form>
                <FormItem
                    type="text"
                    label="name"
                    value={name}
                    display="Name"
                    tooltip="What do you want your new name to be?"
                    onChange={handleName}
                />

                <FormSubmit 
                    text="Update Name"
                    onClick={handleSubmit}
                    id="change-name-button"
                    className="profile"
                    display="block"
                />
            </form>
        )
    } else {
        return (
            <Redirect to="/profile" />
        )
    }
}

export default ChangeName