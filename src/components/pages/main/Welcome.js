import Pitch from '../../sections/main/Pitch'
import Summary from '../../sections/main/Summary'
import '../../../style/main/Welcome.css'

function Welcome() {
    return (
        <main className="welcome">
            <h1>Welcome</h1>
            <Pitch />
            <Summary details={false} />
        </main>
    )
}

export default Welcome