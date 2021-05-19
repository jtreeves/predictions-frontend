import OverviewBasics from '../../../text/OverviewBasics'
import OverviewDepth from '../../../text/OverviewDepth'

function Summary(props) {
    const details = props.details

    if (details) {
        return (
            <section>
                <h2>Summary</h2>
                {OverviewBasics}
                {OverviewDepth}
            </section>
        )
    } else {
        return (
            <section>
                <h2>Summary</h2>
                {OverviewBasics}
            </section>
        )
    }
}

export default Summary