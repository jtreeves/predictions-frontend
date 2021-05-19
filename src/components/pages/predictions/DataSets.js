import CheckExpiration from '../../../utilities/users/CheckExpiration'
import ListPredictions from '../../sections/predictions/ListPredictions'
import '../../../style/predictions/Data.css'

function DataSets(props) {
    CheckExpiration(props.user.exp, props.handleLogout)

    return (
        <main className="data">
            <h1>Models</h1>
            <ListPredictions user={props.user} />
        </main>
    )
}

export default DataSets