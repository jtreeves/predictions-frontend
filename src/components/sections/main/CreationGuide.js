import CreationBasics from '../../elements/main/CreationBasics'
import CreationDepth from '../../elements/main/CreationDepth'

function CreationGuide(props) {
    const details = props.details

    if (details) {
        return (
            <section>
                <h2>How to Create a Data Set</h2>
                <CreationBasics />
                <CreationDepth />
            </section>
        )
    } else {
        return (
            <section>
                <h2>Creating Data Sets</h2>
                <CreationBasics />
            </section>
        )
    }
}

export default CreationGuide