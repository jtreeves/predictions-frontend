import CoreInformation from '../../sections/users/CoreInformation'
import UpdateAccount from '../../sections/users/UpdateAccount'
import AnalyzeData from '../../sections/users/AnalyzeData'
import CheckExpiration from '../../utilities/users/CheckExpiration'
import '../../../style/users/profile.css'

function Profile(props) {
    CheckExpiration(props.user.exp, props.handleLogout)
    
    return (
        <main className="profile">
            <h1>Profile</h1>

            <CoreInformation user={props.user} />

            <UpdateAccount 
                user={props.user}
                handleLogout={props.handleLogout}
            />

            <AnalyzeData />
        </main>
    )
}

export default Profile