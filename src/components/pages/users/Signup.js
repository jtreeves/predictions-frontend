import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import FormItem from '../../elements/main/FormItem'
import FormButton from '../../buttons/main/FormButton'
import CreateUser from '../../../actions/users/CreateUser'
import VettedSignup from '../../../utilities/users/VettedSignup'
import '../../../style/users/Signup.css'

function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = VettedSignup(name, email, password, confirmPassword)

        if (userData) {
            try {
                await CreateUser(userData)
                setRedirect(true)
            } catch (error) {
                alert(error.response.data.msg)
                console.log(error)
            }
        }
    }

    if (!redirect) {
        return (
            <main className="signup">
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

                    <FormButton 
                        text="Submit"
                        onClick={handleSubmit}
                        id="signup-button"
                        display="block"
                    />
                </form>
            </main>
        )
    } else {
        return <Redirect to="/login" />
    }
}

export default Signup