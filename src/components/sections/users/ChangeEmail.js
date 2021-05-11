// Import external dependencies
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

// Import internal component
import FormItem from '../main/FormItem'
import FormSubmit from '../../buttons/main/FormSubmit'

// Create shortcut for environmental variable
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function ChangeEmail(props) {
    const [updateClicked, setUpdateClicked] = useState(false)
    const [saveClicked, setSaveClicked] = useState(false)
    const [email, setEmail] = useState(props.user.email)

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        setUpdateClicked(true)
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            await axios.put(REACT_APP_SERVER_URL + 'users/' + props.user.id + '/email', {email})
            setSaveClicked(true)
        } catch(error) {
            alert(error.response.data.msg)
            console.log(`UPDATE ERROR: ${error}`)
        }
    }

    if (!updateClicked && !saveClicked) {
        return (
            <button 
                onClick={handleUpdate}
                className="profile"
            >
                Change Email
            </button>
        )
    } else if (updateClicked && !saveClicked) {
        return (
            <form>
                <FormItem
                    type="email"
                    label="email"
                    value={email}
                    display="Email"
                    tooltip="What email address do you want to associate with this account?"
                    onChange={handleEmail}
                />

                <FormSubmit 
                    text="Update Email"
                    onClick={handleSubmit}
                    id="change-email-button"
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

export default ChangeEmail