import CreationGuide from '../../sections/main/CreationGuide'
import ViewingGuide from '../../sections/main/ViewingGuide'
import MathConcepts from '../../sections/main/MathConcepts'
import '../../../style/main/Usage.css'

function Usage() {
    return (
        <main className="usage">
            <h1>Usage</h1>
            <CreationGuide details={true} />
            <ViewingGuide details={true} />
            <MathConcepts />
        </main>
    )
}

export default Usage