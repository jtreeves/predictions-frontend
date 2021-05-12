import ChangeName from '../../buttons/users/ChangeName'
import ChangeEmail from '../../buttons/users/ChangeEmail'
import DeleteAccount from '../../buttons/users/DeleteAccount'

function UpdateAccount(props) {
    return (
        <section>
            <h2>Update Account</h2>

            <ChangeName user={props.user} />

            <ChangeEmail user={props.user} />

            <DeleteAccount 
                user={props.user}
                handleLogout={props.handleLogout} 
            />
        </section>
    )
}

export default UpdateAccount