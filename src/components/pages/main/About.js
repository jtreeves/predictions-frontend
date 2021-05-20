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
            <Summary details={true} />
            <Appeal />
            <CreationGuide details={false} />
            <ViewingGuide details={false} />
            <MathConcepts details={false} />
        </main>
    )
}

export default About