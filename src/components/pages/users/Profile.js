import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AllModels from '../../elements/predictions/AllModels'
import ChangeName from '../../elements/users/ChangeName'
import DeleteAccount from '../../elements/users/DeleteAccount'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Profile(props) {
    const [name, setName] = useState(props.user.name)
    const userId = props.user.id

    const getName = async () => {
        try {
            const currentUser = await axios.get(REACT_APP_SERVER_URL + 'users/' + userId)
            setName(currentUser.data.user.name)
        } catch(error) {
            alert('Problem getting name of user')
        }
    }

    useEffect(() => {
        getName()
    }, [])

    return (
        <div>
            <h1>Welcome, {name}</h1>
            <p><ChangeName 
                user={props.user}
            /></p>
            <p><DeleteAccount 
                user={props.user}
                handleLogout={props.handleLogout} 
            /></p>
            <p>Want to analyze some data? <Link to="/analyze">Click here!</Link></p>
            <p>All your models:</p>
            <AllModels user={props.user} />
        </div>
    )
}

export default Profile