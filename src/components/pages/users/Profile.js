import { Link } from 'react-router-dom'
import DisplayName from '../../elements/users/DisplayName'
import ChangeName from '../../elements/users/ChangeName'
import DeleteAccount from '../../elements/users/DeleteAccount'
import AllSets from '../../elements/predictions/AllSets'
import CheckExpiration from '../../utilities/users/CheckExpiration'
import '../../../style/profile.css'

function Profile(props) {
    CheckExpiration(props.user.exp, props.handleLogout)
    
    return (
        <main>
            <DisplayName user={props.user} />
            <ChangeName 
                user={props.user}
            />
            <DeleteAccount 
                user={props.user}
                handleLogout={props.handleLogout} 
            />
            <p>Want to analyze some data? <Link to="/submission">Click here!</Link></p>
            <AllSets user={props.user} />
        </main>
    )
}

export default Profile