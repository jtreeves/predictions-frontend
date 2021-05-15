import { useState } from 'react'
import axios from 'axios'
import FormItem from '../../elements/main/FormItem'
import FormSubmit from '../main/FormSubmit'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function ChangeEmail(props) {
    const id = props.id
    const email = props.email
    const setEmail = props.setEmail
    const changingEmail = props.changingEmail
    const setChangingEmail = props.setChangingEmail
    const [intermediaryEmail, setIntermediaryEmail] = useState(email)

    const handleEmail = (e) => {
        setIntermediaryEmail(e.target.value)
    }

    const handleInitiate = (e) => {
        e.preventDefault()
        setChangingEmail(true)
    }

    const handleAbandon = (e) => {
        e.preventDefault()
        setIntermediaryEmail(email)
        setChangingEmail(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (id && intermediaryEmail) {
            try {
                await axios.put(
                    REACT_APP_SERVER_URL + 'users/' + id + '/email', 
                    {email: intermediaryEmail}
                )
                setEmail(intermediaryEmail)
                setChangingEmail(false)
            } catch (error) {
                alert('Your email was not updated')
                setChangingEmail(false)
                console.log(error)
            }
        }
    }

    if (!changingEmail) {
        return (
            <button 
                onClick={handleInitiate}
            >
                Change Email
            </button>
        )
    } else {
        return (
            <form>
                <FormItem
                    type="email"
                    label="email"
                    value={intermediaryEmail}
                    display="Email"
                    tooltip="What email address do you want to associate with this account?"
                    onChange={handleEmail}
                />

                <FormSubmit 
                    text="Submit New Email"
                    onClick={handleSubmit}
                    id="submit-new-email-button"
                    display="block"
                />

                <FormSubmit 
                    text="Keep Old Email"
                    onClick={handleAbandon}
                    id="keep-old-email-button"
                    display="block"
                />
            </form>
        )
    }
}

export default ChangeEmail