import EmptyInputAlert from '../main/EmptyInputAlert'

function VettedSignup(name, email, password, confirmPassword) {
    if (!EmptyInputAlert(name, 'name')) {
        return false
    } else if (!EmptyInputAlert(email, 'email')) {
        return false
    } else if (!EmptyInputAlert(password, 'password')) {
        return false
    } else if (!EmptyInputAlert(confirmPassword, 'confirm password')) {
        return false
    } else {
        if (password === confirmPassword) {
            if (password.length >= 8) {
                const newUser = {
                    name,
                    email,
                    password
                }
    
                return newUser
            } else {
                alert('Password must be at least 8 characters long')
                return false
            }
        } else {
            alert('Passwords must match')
            return false
        }
    }
}

export default VettedSignup