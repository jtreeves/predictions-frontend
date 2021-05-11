import { useEffect, useState } from 'react'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function DisplayEmail(props) {
    const [email, setEmail] = useState(props.user.email)
    const userId = props.user.id

    const getEmail = async () => {
        try {
            const currentUser = await axios.get(
                REACT_APP_SERVER_URL + 'users/' + userId
            )
            setEmail(currentUser.data.user.email)
        } catch(error) {
            setEmail('')
        }
    }

    useEffect(() => {
        getEmail()
    })

    return (
        <article className="profile">
            <h3>Email</h3>
            <p>{email}</p>
        </article>
    )
}

export default DisplayEmail