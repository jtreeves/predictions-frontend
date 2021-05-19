import { useEffect } from 'react'
import GetUser from '../../../actions/users/GetUser'

function DisplayEmail(props) {
    const id = props.id
    const email = props.email
    const setEmail = props.setEmail

    const getEmail = async () => {
        try {
            const currentUser = await GetUser(id)
            setEmail(currentUser.data.user.email)
        } catch (error) {
            setEmail('')
            console.log(error)
        }
    }

    useEffect(() => {
        getEmail()
    })

    return (
        <article>
            <h3>Email</h3>
            <p>{email}</p>
        </article>
    )
}

export default DisplayEmail