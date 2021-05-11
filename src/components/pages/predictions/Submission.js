import OriginalData from '../../elements/predictions/OriginalData'
import CheckExpiration from '../../utilities/users/CheckExpiration'
import '../../../style/predictions/submission.css'

function Submission(props) {
    CheckExpiration(props.user.exp, props.handleLogout)

    return (
        <main className="submission">
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