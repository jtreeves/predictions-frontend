import { Link } from 'react-router-dom'
import DisplayName from '../../elements/users/DisplayName'
import ChangeName from '../../elements/users/ChangeName'
import DeleteAccount from '../../elements/users/DeleteAccount'
import CheckExpiration from '../../utilities/users/CheckExpiration'
import '../../../style/profile.css'
import DisplayEmail from '../../elements/users/DisplayEmail'
import ChangeEmail from '../../elements/users/ChangeEmail'

function Profile(props) {
    CheckExpiration(props.user.exp, props.handleLogout)
    
    return (
        <main>
            <h1>Profile</h1>
            <DisplayName user={props.user} />
            <DisplayEmail user={props.user} />
            <ChangeName user={props.user} />
            <ChangeEmail user={props.user} />
            <DeleteAccount 
                user={props.user}
                handleLogout={props.handleLogout} 
            />
            <Link to="/datasets"><button>View All Your Saved Data Sets</button></Link>
            <Link to="/submission"><button>Add a New Data Set</button></Link>
        </main>
    )
}

export default Profile