// Import external dependencies
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

// Import internal component
import FormItem from '../../elements/main/FormItem'

import '../../../style/users/signup.css'
import FormSubmit from '../../buttons/main/FormSubmit'

// Create shortcut for environmental variable
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

// Create function
function Signup() {
    // Set initial state values
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    // Set name from form
    const handleName = (e) => {
        setName(e.target.value)
    }

    // Set email from form
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    // Set password from form
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    // Set confirm password from form
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    // Submit form data
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            // Check that passwords match
            if (password === confirmPassword) {
                // Check password length
                if (password.length >= 8) {
                    // Create new user if both checks pass  
                    const newUser = {name, email, password}
                    await axios.post(REACT_APP_SERVER_URL + 'users/signup', newUser)
                    setRedirect(true)
                } else {
                    // Alert user if password too short
                    alert('Password must be at least 8 characters long')
                }
            } else {
                // Alert user if passwords do not match
                alert('Passwords must match')
            }
        } catch(error) {
            // Alert user if email already in use
            alert(error.response.data.msg)
            console.log(`SIGNUP ERROR: ${error}`)
        }
    }

    if (!redirect) {
        return (
            <main>
                <h1>Sign Up</h1>
                <form>
                    <FormItem
                        type="text"
                        label="name"
                        value={name}
                        display="Name"
                        tooltip="This can be your full name or a username of your choosing"
                        onChange={handleName}
                    />

                    <FormItem
                        type="email"
                        label="email"
                        value={email}
                        display="Email"
                        tooltip="This will be the email associated with your account"
                        onChange={handleEmail}
                    />

                    <FormItem
                        type="password"
                        label="password"
                        value={password}
                        display="Password"
                        tooltip="This will be the password you will use to access your account"
                        onChange={handlePassword}
                    />

                    <FormItem
                        type="password"
                        label="confirmPassword"
                        value={confirmPassword}
                        display="Confirm Password"
                        tooltip="Make sure this matches the password above!"
                        onChange={handleConfirmPassword}
                    />

                    <FormSubmit 
                        text="Submit"
                        onClick={handleSubmit}
                        id="signup-button"
                        className="signup"
                        display="block"
                    />
                </form>
            </main>
        )
    } else {
        return <Redirect to="/login" />
    }
}

// Export function
export default Signup