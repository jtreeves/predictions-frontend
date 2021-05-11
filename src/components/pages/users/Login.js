// Import external dependencies
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

// Import internal components
import Authentication from '../../utilities/main/Authentication'
import FormItem from '../../sections/main/FormItem'

import '../../../style/login.css'
import FormSubmit from '../../buttons/main/FormSubmit'

// Create shortcut for environmental variable
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

// Create function
function Login(props) {
    // Set initial state values
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Set email from form
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    // Set password from form
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    // Submit form data
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const userData = {email, password}
            const currentUser = await axios.post(REACT_APP_SERVER_URL + 'users/login', userData)
            // Create token from currentUser data
            const {token} = currentUser.data
            // Store token in localStorage
            localStorage.setItem('jwtToken', token)
            // Set token to auth header
            Authentication(token)
            // Decode token to get user data
            const decoded = jwt_decode(token)
            // Set current user with decoded data
            props.nowCurrentUser(decoded)
        } catch(error) {
            // Alert user of any errors logging in
            alert(error.response.data.msg)
            console.log(`LOGIN ERROR: ${error}`)
        }
    }

    if (!props.user) {
        return (
            <main>
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
                        className="login"
                        display="block"
                    />
                </form>
            </main>
        )
    } else {
        return <Redirect to="/profile" />
    }
}

// Export function
export default Login