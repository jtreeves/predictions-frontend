import EmptyInputAlert from '../main/EmptyInputAlert'

function VettedSignup(name, email, password, confirmPassword) {
    const vettedName = EmptyInputAlert(name, 'name')
    const vettedEmail = EmptyInputAlert(email, 'email')
    const vettedPassword = EmptyInputAlert(password, 'password')
    const vettedConfirmPassword = EmptyInputAlert(confirmPassword, 'confirm password')

    if (vettedName && vettedEmail && vettedPassword && vettedConfirmPassword) {
        if (vettedPassword === vettedConfirmPassword) {
            if (vettedPassword.length >= 8) {
                const newUser = {
                    name: vettedName,
                    email: vettedEmail,
                    password: vettedPassword
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
    } else {
        return false
    }
}

export default VettedSignup