// Import external dependencies
import { useState } from 'react'
import axios from 'axios'

// Import internal component
import FormGroup from '../../elements/main/FormGroup'

// Create shortcut for environmental variable
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function ChangeName(props) {
    const [newName, setNewName] = useState('')

    const handleNewName = (e) => {
        setNewName(e.target.value)
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            console.log('NEW NAME: ', newName)
            await axios.put(REACT_APP_SERVER_URL + 'users/' + props.user.id, { newName })
            alert('Name updated!')
        } catch(error) {
            alert(error.response.data.msg)
            console.log(`UPDATE ERROR: ${error}`)
        }
    }

    return (
        <div className="row mt-4 col-md-7 offset-md-3 card card-body">
            <h1 className="py-2">Change Name</h1>
            <form onSubmit={handleSubmit}>
                <FormGroup
                    type="text"
                    label="newName"
                    value={newName}
                    display="New Name"
                    onChange={handleNewName}
                />
                <button
                    type="submit"
                    className="btn btn-primary float-right"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ChangeName