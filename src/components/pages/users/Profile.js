import { Link } from 'react-router-dom'
import DisplayName from '../../elements/users/DisplayName'
import ChangeName from '../../elements/users/ChangeName'
import DeleteAccount from '../../elements/users/DeleteAccount'
import AllSets from '../../elements/predictions/AllSets'

function Profile(props) {
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
            <p>Want to analyze some data? <Link
                to={{
                    pathname: "/submission",
                    state: {
                        user: props.user
                    }
                }}
            >
                Click here!
            </Link></p>
            <p>All Setmodels:</p>
            <AllSets user={props.user} />
        </div>
    )
}

export default Profile