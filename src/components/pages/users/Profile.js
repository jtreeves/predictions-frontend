import { Link } from 'react-router-dom'
import AllModels from '../../elements/predictions/AllModels'
import ChangeName from '../../elements/users/ChangeName'
import DeleteAccount from '../../elements/users/DeleteAccount'

function Profile(props) {
    return (
        <div>
            <h1>Welcome, {props.user.name}</h1>
            <p><ChangeName 
                user={props.user}
            /></p>
            <p><DeleteAccount 
                user={props.user}
                handleLogout={props.handleLogout} 
            /></p>
            <p>Want to analyze some data? <Link to="/analyze">Click here!</Link></p>
            <p>All your models:</p>
            <AllModels user={props.user} />
        </div>
    )
}

export default Profile