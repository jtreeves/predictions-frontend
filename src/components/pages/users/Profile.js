import { Link } from 'react-router-dom'
import DisplayName from '../../sections/users/DisplayName'
import ChangeName from '../../sections/users/ChangeName'
import DeleteAccount from '../../sections/users/DeleteAccount'
import CheckExpiration from '../../utilities/users/CheckExpiration'
import '../../../style/profile.css'
import DisplayEmail from '../../sections/users/DisplayEmail'
import ChangeEmail from '../../sections/users/ChangeEmail'

function Profile(props) {
    CheckExpiration(props.user.exp, props.handleLogout)
    
    return (
        <main>
            <h1>Profile</h1>
            <DisplayName user={props.user} />
            <DisplayEmail user={props.user} />
            <section className="profile">
                <h2>Update Account</h2>
                <ChangeName user={props.user} />
                <ChangeEmail user={props.user} />
                <DeleteAccount 
                    user={props.user}
                    handleLogout={props.handleLogout} 
                />
            </section>
            <section className="profile">
                <h2>Analyze Data</h2>
                <Link 
                    to="/datasets"
                    style={{ textDecoration: 'none' }}
                >
                    <button className="profile">View All Your Saved Data Sets</button>
                </Link>
                <Link 
                    to="/submission"
                    style={{ textDecoration: 'none' }}
                >
                    <button className="profile">Add a New Data Set</button>
                </Link>
            </section>
        </main>
    )
}

export default Profile