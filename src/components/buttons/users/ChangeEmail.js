import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import FormItem from '../../elements/main/FormItem'
import FormSubmit from '../main/FormSubmit'
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
        e.preventDefault()
        if (props.user.id && email) {
            try {
                await axios.put(
                    REACT_APP_SERVER_URL + 'users/' + props.user.id + '/email', 
                    {email}
                )
                setSaveClicked(true)
            } catch (error) {
                alert(error.response.data.msg)
            }
        }
    }

    if (!updateClicked && !saveClicked) {
        return (
            <button 
                onClick={handleUpdate}
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