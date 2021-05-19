import { useEffect } from 'react'
import GetUser from '../../../actions/users/GetUser'

function DisplayName(props) {
    const id = props.id
    const name = props.name
    const setName = props.setName

    const getName = async () => {
        try {
            const currentUser = await GetUser(id)
            setName(currentUser.data.user.name)
        } catch (error) {
            setName('')
            console.log(error)
        }
    }

    useEffect(() => {
        getName()
    })

    return (
        <article>
            <h3>Name</h3>
            <p>{name}</p>
        </article>
    )
}

export default DisplayName