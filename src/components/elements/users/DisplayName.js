import { useEffect, useState } from 'react'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function DisplayName(props) {
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
    })

    return name
}

export default DisplayName