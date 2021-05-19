import ViewingBasics from '../../../text/ViewingBasics'
import ViewingDepth from '../../../text/ViewingDepth'

function ViewingGuide(props) {
    const details = props.details

    if (details) {
        return (
            <section>
                <h2>How to Interpret Analyses of Data Sets</h2>
                {ViewingBasics}
                {ViewingDepth}
            </section>
        )
    } else {
        return (
            <section>
                <h2>Viewing Analyses of Data Sets</h2>
                {ViewingBasics}
            </section>
        )
    }
}

export default ViewingGuide