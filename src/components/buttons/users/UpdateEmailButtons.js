import { useState } from 'react'
import GetUser from '../../../actions/users/GetUser'
import UpdateEmail from '../../../actions/users/UpdateEmail'
import FormItem from '../../elements/main/FormItem'
import FormButton from '../main/FormButton'

function UpdateEmailButtons(props) {
    const id = props.id
    const email = props.email
    const setEmail = props.setEmail
    const changingEmail = props.changingEmail
    const setChangingEmail = props.setChangingEmail
    const [intermediaryEmail, setIntermediaryEmail] = useState(email)

    const handleEmail = (e) => {
        setIntermediaryEmail(e.target.value)
    }

    const handleInitiate = async (e) => {
        e.preventDefault()
        try {
            const currentUser = await GetUser(id)
            setIntermediaryEmail(currentUser.data.user.email)
            setChangingEmail(true)
        } catch (error) {
            setIntermediaryEmail('')
            setChangingEmail(true)
            console.log(error)
        }
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
                await UpdateEmail(id, intermediaryEmail)
                setEmail(intermediaryEmail)
                setChangingEmail(false)
            } catch (error) {
                alert(error.response.data.msg)
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
                    autoComplete="email"
                    onChange={handleEmail}
                />

                <FormButton 
                    text="Submit New Email"
                    onClick={handleSubmit}
                    id="submit-new-email-button"
                    display="block"
                />

                <FormButton 
                    text="Keep Old Email"
                    onClick={handleAbandon}
                    id="keep-old-email-button"
                    display="block"
                />
            </form>
        )
    }
}

export default UpdateEmailButtons