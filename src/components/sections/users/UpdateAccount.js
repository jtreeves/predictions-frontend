import { useState } from 'react'
import UpdateNameButtons from '../../buttons/users/UpdateNameButtons'
import UpdateEmailButtons from '../../buttons/users/UpdateEmailButtons'
import DeleteUserButtons from '../../buttons/users/DeleteUserButtons'

function UpdateAccount(props) {
    const [changingName, setChangingName] = useState(false)
    const [changingEmail, setChangingEmail] = useState(false)
    const [deletingAccount, setDeletingAccount] = useState(false)

    if (!changingName && !changingEmail && !deletingAccount) {
        return (
            <section>
                <h2>Update Account</h2>
    
                <UpdateNameButtons 
                    id={props.id} 
                    name={props.name}
                    setName={props.setName}
                    changingName={changingName}
                    setChangingName={setChangingName}
                />
    
                <UpdateEmailButtons 
                    id={props.id} 
                    email={props.email}
                    setEmail={props.setEmail}
                    changingEmail={changingEmail}
                    setChangingEmail={setChangingEmail}
                />
    
                <DeleteUserButtons 
                    id={props.id} 
                    logout={props.logout} 
                    deletingAccount={deletingAccount}
                    setDeletingAccount={setDeletingAccount}
                />
            </section>
        )
    } else if (changingName) {
        return (
            <section>
                <h2>Update Name</h2>

                <UpdateNameButtons 
                    id={props.id} 
                    name={props.name}
                    setName={props.setName}
                    changingName={changingName}
                    setChangingName={setChangingName}
                />
            </section>
        )
    } else if (changingEmail) {
        return (
            <section>
                <h2>Update Email</h2>

                <UpdateEmailButtons 
                    id={props.id} 
                    email={props.email}
                    setEmail={props.setEmail}
                    changingEmail={changingEmail}
                    setChangingEmail={setChangingEmail}
                />
            </section>
        )
    } else if (deletingAccount) {
        return (
            <section>
                <h2>Delete Account</h2>

                <DeleteUserButtons 
                    id={props.id} 
                    logout={props.logout} 
                    deletingAccount={deletingAccount}
                    setDeletingAccount={setDeletingAccount}
                />
            </section>
        )
    }
}

export default UpdateAccount