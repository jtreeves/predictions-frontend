import Summary from '../../sections/main/Summary'
import Appeal from '../../sections/main/Appeal'
import CreationGuide from '../../sections/main/CreationGuide'
import ViewingGuide from '../../sections/main/ViewingGuide'
import MathConcepts from '../../sections/main/MathConcepts'
import '../../../style/main/About.css'

function About() {
    return (
        <main className="about">
            <h1>About</h1>
            <p>We provide regression models of the following types: linear, quadratic, cubic, hyperbolic, exponential, logarithmic, logistic, and sinusoidal.</p>
            <Summary details={true} />
            <Appeal />
            <CreationGuide details={false} />
            <ViewingGuide details={false} />
            <MathConcepts />
        </main>
    )
}

export default About