import { useState } from 'react'
import HorizontalAxis from '../../utilities/predictions/HorizontalAxis'
import VerticalAxis from '../../utilities/predictions/VerticalAxis'
import CheckFavorite from '../../utilities/predictions/CheckFavorite'
import FutureEvaluations from './FutureEvaluations'
import ModelsAnalyses from './ModelsAnalyses'
import DisplayTable from './DisplayTable'
import GraphSection from './GraphSection'

// Create function
function GeneratedModels(props) {
    const points = JSON.parse(props.dataSet)
    const originalPoints = []
    for (const point of points) {
        originalPoints.push({ x: point[0], y: point[1] })
    }
    
    const [displayLinear, setDisplayLinear] = useState(false)
    const [displayQuadratic, setDisplayQuadratic] = useState(false)
    const [displayCubic, setDisplayCubic] = useState(false)
    const [displayHyperbolic, setDisplayHyperbolic] = useState(false)
    const [displayExponential, setDisplayExponential] = useState(false)
    const [displayLogarithmic, setDisplayLogarithmic] = useState(false)
    const [displayLogistic, setDisplayLogistic] = useState(false)
    const [displaySinusoidal, setDisplaySinusoidal] = useState(false)
    const [displayOriginal, setDisplayOriginal] = useState(true)

    const [linearCoordinates, setLinearCoordinates] = useState('')
    const [quadraticCoordinates, setQuadraticCoordinates] = useState('')
    const [cubicCoordinates, setCubicCoordinates] = useState('')
    const [hyperbolicCoordinates, setHyperbolicCoordinates] = useState('')
    const [exponentialCoordinates, setExponentialCoordinates] = useState('')
    const [logarithmicCoordinates, setLogarithmicCoordinates] = useState('')
    const [logisticCoordinates, setLogisticCoordinates] = useState('')
    const [sinusoidalCoordinates, setSinusoidalCoordinates] = useState('')
    const [originalCoordinates, setOriginalCoordinates] = useState(originalPoints)

    const [zoom, setZoom] = useState(0)
    
    const allCoordinates = [originalCoordinates, linearCoordinates, quadraticCoordinates, cubicCoordinates, hyperbolicCoordinates, exponentialCoordinates, logarithmicCoordinates, logisticCoordinates, sinusoidalCoordinates]

    const xAxis = HorizontalAxis(originalPoints, zoom)
    const xMinimum = xAxis.minimum
    const xMaximum = xAxis.maximum
    const increment = xAxis.increment

    const yAxis = VerticalAxis(allCoordinates)
    const yMinimum = yAxis.minimum
    const yMaximum = yAxis.maximum

    CheckFavorite(props.favorite, xMinimum, xMaximum, increment, props.precision, props.linearConstants, setDisplayLinear, setLinearCoordinates, props.quadraticConstants, setDisplayQuadratic, setQuadraticCoordinates, props.cubicConstants, setDisplayCubic, setCubicCoordinates, props.hyperbolicConstants, setDisplayHyperbolic, setHyperbolicCoordinates, props.exponentialConstants, setDisplayExponential, setExponentialCoordinates, props.logarithmicConstants, setDisplayLogarithmic, setLogarithmicCoordinates, props.logisticConstants, setDisplayLogistic, setLogisticCoordinates, props.sinusoidalConstants, setDisplaySinusoidal, setSinusoidalCoordinates) 
    return (
        <section>
            <GraphSection 
                independent={props.independent}
                dependent={props.dependent}
                bestFit={props.bestFit}
                precision={props.precision}
                xMinimum={xMinimum}
                xMaximum={xMaximum}
                yMinimum={yMinimum}
                yMaximum={yMaximum}
                increment={increment}
                zoom={zoom}
                setZoom={setZoom}
                originalPoints={originalPoints}
                originalCoordinates={originalCoordinates}
                displayOriginal={displayOriginal}
                setDisplayOriginal={setDisplayOriginal}
                setOriginalCoordinates={setOriginalCoordinates}
                linearConstants={props.linearConstants}
                linearCoordinates={linearCoordinates}
                displayLinear={displayLinear}
                setDisplayLinear={setDisplayLinear}
                setLinearCoordinates={setLinearCoordinates}
                quadraticConstants={props.quadraticConstants}
                quadraticCoordinates={quadraticCoordinates}
                displayQuadratic={displayQuadratic}
                setDisplayQuadratic={setDisplayQuadratic}
                setQuadraticCoordinates={setQuadraticCoordinates}
                cubicConstants={props.cubicConstants}
                cubicCoordinates={cubicCoordinates}
                displayCubic={displayCubic}
                setDisplayCubic={setDisplayCubic}
                setCubicCoordinates={setCubicCoordinates}
                hyperbolicConstants={props.hyperbolicConstants}
                hyperbolicCoordinates={hyperbolicCoordinates}
                displayHyperbolic={displayHyperbolic}
                setDisplayHyperbolic={setDisplayHyperbolic}
                setHyperbolicCoordinates={setHyperbolicCoordinates}
                exponentialConstants={props.exponentialConstants}
                exponentialCoordinates={exponentialCoordinates}
                displayExponential={displayExponential}
                setDisplayExponential={setDisplayExponential}
                setExponentialCoordinates={setExponentialCoordinates}
                logarithmicConstants={props.logarithmicConstants}
                logarithmicCoordinates={logarithmicCoordinates}
                displayLogarithmic={displayLogarithmic}
                setDisplayLogarithmic={setDisplayLogarithmic}
                setLogarithmicCoordinates={setLogarithmicCoordinates}
                logisticConstants={props.logisticConstants}
                logisticCoordinates={logisticCoordinates}
                displayLogistic={displayLogistic}
                setDisplayLogistic={setDisplayLogistic}
                setLogisticCoordinates={setLogisticCoordinates}
                sinusoidalConstants={props.sinusoidalConstants}
                sinusoidalCoordinates={sinusoidalCoordinates}
                displaySinusoidal={displaySinusoidal}
                setDisplaySinusoidal={setDisplaySinusoidal}
                setSinusoidalCoordinates={setSinusoidalCoordinates}
            />

            <FutureEvaluations 
                precision={props.precision}
                xMinimum={xMinimum}
                xMaximum={xMaximum}
                linearConstants={props.linearConstants}
                displayLinear={displayLinear}
                quadraticConstants={props.quadraticConstants}
                displayQuadratic={displayQuadratic}
                cubicConstants={props.cubicConstants}
                displayCubic={displayCubic}
                hyperbolicConstants={props.hyperbolicConstants}
                displayHyperbolic={displayHyperbolic}
                exponentialConstants={props.exponentialConstants}
                displayExponential={displayExponential}
                logarithmicConstants={props.logarithmicConstants}
                displayLogarithmic={displayLogarithmic}
                logisticConstants={props.logisticConstants}
                displayLogistic={displayLogistic}
                sinusoidalConstants={props.sinusoidalConstants}
                displaySinusoidal={displaySinusoidal}
            />

            <ModelsAnalyses 
                precision={props.precision}
                linearConstants={props.linearConstants}
                linearCorrelation={props.linearCorrelation}
                linearPoints={props.linearPoints}
                displayLinear={displayLinear}
                quadraticConstants={props.quadraticConstants}
                quadraticCorrelation={props.quadraticCorrelation}
                quadraticPoints={props.quadraticPoints}
                displayQuadratic={displayQuadratic}
                cubicConstants={props.cubicConstants}
                cubicCorrelation={props.cubicCorrelation}
                cubicPoints={props.cubicPoints}
                displayCubic={displayCubic}
                hyperbolicConstants={props.hyperbolicConstants}
                hyperbolicCorrelation={props.hyperbolicCorrelation}
                hyperbolicPoints={props.hyperbolicPoints}
                displayHyperbolic={displayHyperbolic}
                exponentialConstants={props.exponentialConstants}
                exponentialCorrelation={props.exponentialCorrelation}
                exponentialPoints={props.exponentialPoints}
                displayExponential={displayExponential}
                logarithmicConstants={props.logarithmicConstants}
                logarithmicCorrelation={props.logarithmicCorrelation}
                logarithmicPoints={props.logarithmicPoints}
                displayLogarithmic={displayLogarithmic}
                logisticConstants={props.logisticConstants}
                logisticCorrelation={props.logisticCorrelation}
                logisticPoints={props.logisticPoints}
                displayLogistic={displayLogistic}
                sinusoidalConstants={props.sinusoidalConstants}
                sinusoidalCorrelation={props.sinusoidalCorrelation}
                sinusoidalPoints={props.sinusoidalPoints}
                displaySinusoidal={displaySinusoidal}
            />

            <DisplayTable 
                independent={props.independent}
                dependent={props.dependent}
                points={originalPoints}
            />
        </section>
    )
}

// Export function
export default GeneratedModels