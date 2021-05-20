import MathBasics from '../../elements/main/MathBasics'
import MathDepth from '../../elements/main/MathDepth'

function MathConcepts(props) {
    const details = props.details
    
    if (details) {
        return (
            <section>
                <h2>Math Concepts</h2>
                <MathBasics />
                <MathDepth />
            </section>
        )
    } else {
        return (
            <section>
                <h2>Math Concepts</h2>
                <MathBasics />
            </section>
        )
    }
}

export default MathConcepts