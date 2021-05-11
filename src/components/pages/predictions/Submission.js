import CheckExpiration from '../../utilities/users/CheckExpiration'
import OriginalData from '../../sections/predictions/OriginalData'

function Submission(props) {
    CheckExpiration(props.user.exp, props.handleLogout)

    return (
        <main>
            <h2>Create a New Data Set</h2>

            <OriginalData 
                title=''
                independent=''
                dependent=''
                precision={4}
                dataSet=''
                favorite=''
                note=''
                user={props.user}
                initiated={false}
                stored={false}
                source=''
            />
        </main>
    )
}

export default Submission