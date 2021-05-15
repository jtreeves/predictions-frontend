import { useState } from 'react'
import axios from 'axios'
import FormItem from '../../elements/main/FormItem'
import FormSubmit from '../main/FormSubmit'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function ChangeName(props) {
    const id = props.id
    const name = props.name
    const setName = props.setName
    const changingName = props.changingName
    const setChangingName = props.setChangingName
    const [intermediaryName, setIntermediaryName] = useState(name)

    const handleName = (e) => {
        setIntermediaryName(e.target.value)
    }

    const handleInitiate = (e) => {
        e.preventDefault()
        setChangingName(true)
    }

    const handleAbandon = (e) => {
        e.preventDefault()
        setIntermediaryName(name)
        setChangingName(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (id && intermediaryName) {
            try {
                await axios.put(
                    REACT_APP_SERVER_URL + 'users/' + id + '/name', 
                    {name: intermediaryName}
                )
                setName(intermediaryName)
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
                    value={intermediaryName}
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