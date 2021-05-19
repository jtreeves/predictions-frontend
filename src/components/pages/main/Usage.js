import CreationGuide from '../../sections/main/CreationGuide'
import ViewingGuide from '../../sections/main/ViewingGuide'
import MathConcepts from '../../sections/main/MathConcepts'
import '../../../style/main/Usage.css'

function Usage() {
    return (
        <main className="usage">
            <h1>Usage</h1>
            <p>We provide regression models of the following types: linear, quadratic, cubic, hyperbolic, exponential, logarithmic, logistic, and sinusoidal.</p>
            <CreationGuide details={true} />
            <ViewingGuide details={true} />
            <MathConcepts />
        </main>
    )
}

export default Usage