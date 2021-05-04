import { Link } from 'react-router-dom'
import DisplayName from '../../elements/users/DisplayName'
import ChangeName from '../../elements/users/ChangeName'
import DeleteAccount from '../../elements/users/DeleteAccount'
import AllSets from '../../elements/predictions/AllSets'

function Profile(props) {
    const expirationTime = new Date(props.user.exp * 1000)
    let currentTime = Date.now()
    if (currentTime >= expirationTime) {
        props.handleLogout()
        alert('Your session has ended. Please log back in!')
    }
    
    return (
        <div>
            <h1>Welcome, <DisplayName user={props.user} /></h1>
            <p><ChangeName 
                user={props.user}
            /></p>
            <p><DeleteAccount 
                user={props.user}
                handleLogout={props.handleLogout} 
            /></p>
            <p>Want to analyze some data? <Link to="/submission">Click here!</Link></p>
            <p>All models:</p>
            <AllSets user={props.user} />
        </div>
    )
}

export default Profile