import { Link } from 'react-router-dom'
import AllModels from '../../elements/predictions/AllModels'

function Profile(props) {
    return (
        <div>
            <h1>Welcome, {props.user.name}</h1>
            <p>Want to change your name? <Link to="/change-name">Click here!</Link></p>
            <p>Want to delete your account? <Link to="/delete-account">Click here!</Link></p>
            <p>Want to analyze some data? <Link to="/analyze">Click here!</Link></p>
            <p>All your models:</p>
            <AllModels user={props.user} />
        </div>
    )
}

export default Profile