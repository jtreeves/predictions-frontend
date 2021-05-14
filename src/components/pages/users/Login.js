import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import FormItem from '../../elements/main/FormItem'
import FormSubmit from '../../buttons/main/FormSubmit'
import VettedLogin from '../../utilities/users/VettedLogin'
import Authentication from '../../utilities/main/Authentication'
import '../../../style/users/login.css'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Login(props) {
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
                const currentUser = await axios.post(
                    REACT_APP_SERVER_URL + 'users/login', 
                    userData
                )
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

    if (!props.user) {
        return (
            <main className="login">
                <h1>Log In</h1>

                <form>
                    <FormItem
                        type="email"
                        label="email"
                        value={email}
                        display="Email"
                        tooltip="What is the email address associated with this account?"
                        onChange={handleEmail}
                    />

                    <FormItem
                        type="password"
                        label="password"
                        value={password}
                        display="Password"
                        tooltip="What is your password?"
                        onChange={handlePassword}
                    />

                    <FormSubmit 
                        text="Submit"
                        onClick={handleSubmit}
                        id="login-button"
                        display="block"
                    />
                </form>
            </main>
        )
    } else {
        return <Redirect to="/profile" />
    }
}

export default Login