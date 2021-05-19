import NewSessionForm from '../../sections/users/NewSessionForm'
import '../../../style/users/Login.css'

function Login(props) {
    return (
        <main className="login">
            <h1>Log In</h1>
            
            <NewSessionForm 
                user={props.user} 
                nowCurrentUser={props.nowCurrentUser}
            />
        </main>
    )
}

export default Login