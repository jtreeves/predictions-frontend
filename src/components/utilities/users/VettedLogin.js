import EmptyInputAlert from '../main/EmptyInputAlert'

function VettedLogin(email, password) {
    if (!EmptyInputAlert(email, 'email')) {
        return false
    } else if (!EmptyInputAlert(password, 'password')) {
        return false
    } else {
        const userData = {
            email,
            password
        }

        return userData
    }
}

export default VettedLogin