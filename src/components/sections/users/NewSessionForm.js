import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import FormItem from '../../elements/main/FormItem'
import FormButton from '../../buttons/main/FormButton'
import VettedLogin from '../../../utilities/users/VettedLogin'
import CreateSession from '../../../actions/users/CreateSession'
import Authentication from '../../../actions/main/Authentication'

function NewSessionForm(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = VettedLogin(email, password)

        if (userData) {
            try {
                const currentUser = await CreateSession(userData)
                const {token} = currentUser.data
                localStorage.setItem('jwtToken', token)
                Authentication(token)
                const decodedUser = jwt_decode(token)
                props.nowCurrentUser(decodedUser)
            } catch (error) {
                alert(error.response.data.msg)
                console.log(error)
            }
        }
    }

    const loginForm = <form>
        <FormItem
            type="email"
            label="email"
            value={email}
            display="Email"
            tooltip="What is the email address associated with this account?"
            autoComplete="email"
            onChange={handleEmail}
        />

        <FormItem
            type="password"
            label="password"
            value={password}
            display="Password"
            tooltip="What is your password?"
            autoComplete="current-password"
            onChange={handlePassword}
        />

        <FormButton 
            text="Submit"
            onClick={handleSubmit}
            id="login-button"
            display="block"
        />
    </form>

    if (!props.user) {
        return (
            <section>
                {loginForm}
            </section>
        )
    } else {
        return <Redirect to="/profile" />
    }
}

export default NewSessionForm