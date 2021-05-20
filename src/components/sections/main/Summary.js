import OverviewBasics from '../../elements/main/OverviewBasics'
import OverviewDepth from '../../elements/main/OverviewDepth'

function Summary(props) {
    const details = props.details

    if (details) {
        return (
            <section>
                <h2>Summary</h2>
                <OverviewBasics />
                <OverviewDepth />
            </section>
        )
    } else {
        return (
            <section>
                <h2>Summary</h2>
                <OverviewBasics />
            </section>
        )
    }
}

export default Summary