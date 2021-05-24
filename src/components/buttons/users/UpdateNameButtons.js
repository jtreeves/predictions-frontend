import { useState } from 'react'
import GetUser from '../../../actions/users/GetUser'
import UpdateName from '../../../actions/users/UpdateName'
import FormItem from '../../elements/main/FormItem'
import FormButton from '../main/FormButton'

function UpdateNameButtons(props) {
    const id = props.id
    const name = props.name
    const setName = props.setName
    const changingName = props.changingName
    const setChangingName = props.setChangingName
    const [intermediaryName, setIntermediaryName] = useState(name)

    const handleName = (e) => {
        setIntermediaryName(e.target.value)
    }

    const handleInitiate = async (e) => {
        e.preventDefault()
        if (id) {
            try {
                const currentUser = await GetUser(id)
                setIntermediaryName(currentUser.data.user.name)
                setChangingName(true)
            } catch (error) {
                setIntermediaryName('')
                setChangingName(true)
                console.log(error)
            }
        }
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
                await UpdateName(id, intermediaryName)
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
                    autoComplete="name"
                    onChange={handleName}
                />

                <FormButton 
                    text="Submit New Name"
                    onClick={handleSubmit}
                    id="submit-new-name-button"
                    display="block"
                />
                
                <FormButton 
                    text="Keep Old Name"
                    onClick={handleAbandon}
                    id="keep-old-name-button"
                    display="block"
                />
            </form>
        )
    }
}

export default UpdateNameButtons