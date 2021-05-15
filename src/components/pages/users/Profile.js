import { useState } from 'react'
import CoreInformation from '../../sections/users/CoreInformation'
import UpdateAccount from '../../sections/users/UpdateAccount'
import AnalyzeData from '../../sections/users/AnalyzeData'
import CheckExpiration from '../../utilities/users/CheckExpiration'
import '../../../style/users/profile.css'

function Profile(props) {
    const user = props.user
    const id = user.id
    const expiration = user.exp
    const logout = props.handleLogout

    CheckExpiration(expiration, logout)

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    
    return (
        <main className="profile">
            <h1>Profile</h1>

            <CoreInformation 
                name={name}
                email={email} 
            />

            <UpdateAccount 
                id={id}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                logout={logout}
            />

            <AnalyzeData />
        </main>
    )
}

export default Profile