import { useState } from 'react'
import axios from 'axios'
import FormItem from '../../elements/main/FormItem'
import FormSubmit from '../main/FormSubmit'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function ChangeName(props) {
    const [name, setName] = useState(props.user.name)
    const userId = props.user.id
    const changingName = props.changingName
    const setChangingName = props.setChangingName

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleInitiate = (e) => {
        e.preventDefault()
        setChangingName(true)
    }

    const handleAbandon = (e) => {
        e.preventDefault()
        setChangingName(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (userId && name) {
            try {
                await axios.put(
                    REACT_APP_SERVER_URL + 'users/' + userId + '/name', 
                    {name}
                )
                setChangingName(false)
            } catch (error) {
                alert('Your name was not updated')
                setChangingName(false)
                console.log(error)
            }
        }
    }

    if (!changingName) {
        return (
            <button 
                onClick={handleInitiate}
            >
                Change Name
            </button>
        )
    } else {
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
                    text="Submit New Name"
                    onClick={handleSubmit}
                    id="submit-new-name-button"
                    display="block"
                />
                
                <FormSubmit 
                    text="Keep Old Name"
                    onClick={handleAbandon}
                    id="keep-old-name-button"
                    display="block"
                />
            </form>
        )
    }
}

export default ChangeName