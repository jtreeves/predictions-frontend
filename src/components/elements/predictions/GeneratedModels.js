import { useState } from 'react'
import HorizontalAxis from '../../middleware/HorizontalAxis'
import VerticalAxis from '../../middleware/VerticalAxis'
import GraphOutput from '../../middleware/GraphOutput'
import Table from '../../middleware/Table'
import Zoom from './Zoom'
import CheckFavorite from '../../middleware/CheckFavorite'
import FutureEvaluations from './FutureEvaluations'
import DisplayGraphs from './DisplayGraphs'
import ModelsAnalyses from './ModelsAnalyses'

// Create function
function GeneratedModels(props) {
    const points = JSON.parse(props.dataSet)
    
    const [checkFavorite, setCheckFavorite] = useState(true)
    const [zoom, setZoom] = useState(0)
    
    const originalPoints = []
    for (const point of points) {
        originalPoints.push({ x: point[0], y: point[1] })
    }

    const [displayTable, setDisplayTable] = useState(false)
    const [table, setTable] = useState('')
    
    const xAxis = HorizontalAxis(originalPoints, zoom)
    const xMinimum = xAxis.minimum
    const xMaximum = xAxis.maximum
    const increment = xAxis.increment

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

    if (checkFavorite) {
        CheckFavorite(props.favorite, xMinimum, xMaximum, increment, props.linearConstants, setDisplayLinear, setLinearCoordinates, props.quadraticConstants, setDisplayQuadratic, setQuadraticCoordinates, props.cubicConstants, setDisplayCubic, setCubicCoordinates, props.hyperbolicConstants, setDisplayHyperbolic, setHyperbolicCoordinates, props.exponentialConstants, setDisplayExponential, setExponentialCoordinates, props.logarithmicConstants, setDisplayLogarithmic, setLogarithmicCoordinates, props.logisticConstants, setDisplayLogistic, setLogisticCoordinates, props.sinusoidalConstants, setDisplaySinusoidal, setSinusoidalCoordinates)
        setCheckFavorite(false)
    }
    
    const handleDisplayTable = (e) => {
        e.preventDefault()
        if (displayTable) {
            setDisplayTable(false)
            setTable('')
        } else {
            setDisplayTable(true)
            setTable(<Table 
                independent={props.independent}
                dependent={props.dependent}
                points={originalPoints}
            />)
        }
    }

    const allCoordinates = [originalCoordinates, linearCoordinates, quadraticCoordinates, cubicCoordinates, hyperbolicCoordinates, exponentialCoordinates, logarithmicCoordinates, logisticCoordinates, sinusoidalCoordinates]

    const yAxis = VerticalAxis(allCoordinates)
    const yMinimum = yAxis.minimum
    const yMaximum = yAxis.maximum

    const displayTableButtons = []

    if (displayTable) {
        displayTableButtons.push(<button onClick={handleDisplayTable}>Hide Table of Original Points</button>)
    } else {
        displayTableButtons.push(<button onClick={handleDisplayTable}>Show Table of Original Points</button>)
    }

    return (
        <div>
            <GraphOutput 
                title={props.title}
                independent={props.independent}
                dependent={props.dependent}
                xMinimum={xMinimum}
                xMaximum={xMaximum}
                yMinimum={yMinimum}
                yMaximum={yMaximum}
                originalPoints={originalCoordinates}
                linearPoints={linearCoordinates}
                quadraticPoints={quadraticCoordinates}
                cubicPoints={cubicCoordinates}
                hyperbolicPoints={hyperbolicCoordinates}
                exponentialPoints={exponentialCoordinates}
                logarithmicPoints={logarithmicCoordinates}
                logisticPoints={logisticCoordinates}
                sinusoidalPoints={sinusoidalCoordinates}
            />

            <DisplayGraphs 
                xMinimum={xMinimum}
                xMaximum={xMaximum}
                increment={increment}
                originalPoints={originalPoints}
                displayOriginal={displayOriginal}
                setDisplayOriginal={setDisplayOriginal}
                setOriginalCoordinates={setOriginalCoordinates}
                linearConstants={props.linearConstants}
                displayLinear={displayLinear}
                setDisplayLinear={setDisplayLinear}
                setLinearCoordinates={setLinearCoordinates}
                quadraticConstants={props.quadraticConstants}
                displayQuadratic={displayQuadratic}
                setDisplayQuadratic={setDisplayQuadratic}
                setQuadraticCoordinates={setQuadraticCoordinates}
                cubicConstants={props.cubicConstants}
                displayCubic={displayCubic}
                setDisplayCubic={setDisplayCubic}
                setCubicCoordinates={setCubicCoordinates}
                hyperbolicConstants={props.hyperbolicConstants}
                displayHyperbolic={displayHyperbolic}
                setDisplayHyperbolic={setDisplayHyperbolic}
                setHyperbolicCoordinates={setHyperbolicCoordinates}
                exponentialConstants={props.exponentialConstants}
                displayExponential={displayExponential}
                setDisplayExponential={setDisplayExponential}
                setExponentialCoordinates={setExponentialCoordinates}
                logarithmicConstants={props.logarithmicConstants}
                displayLogarithmic={displayLogarithmic}
                setDisplayLogarithmic={setDisplayLogarithmic}
                setLogarithmicCoordinates={setLogarithmicCoordinates}
                logisticConstants={props.logisticConstants}
                displayLogistic={displayLogistic}
                setDisplayLogistic={setDisplayLogistic}
                setLogisticCoordinates={setLogisticCoordinates}
                sinusoidalConstants={props.sinusoidalConstants}
                displaySinusoidal={displaySinusoidal}
                setDisplaySinusoidal={setDisplaySinusoidal}
                setSinusoidalCoordinates={setSinusoidalCoordinates}
            />

            <Zoom 
                zoom={zoom}
                setZoom={setZoom}
                originalPoints={originalPoints}
                displayOriginal={displayOriginal}
                setOriginalCoordinates={setOriginalCoordinates}
                linearConstants={props.linearConstants}
                displayLinear={displayLinear}
                setLinearCoordinates={setLinearCoordinates}
                quadraticConstants={props.quadraticConstants}
                displayQuadratic={displayQuadratic}
                setQuadraticCoordinates={setQuadraticCoordinates}
                cubicConstants={props.cubicConstants}
                displayCubic={displayCubic}
                setCubicCoordinates={setCubicCoordinates}
                hyperbolicConstants={props.hyperbolicConstants}
                displayHyperbolic={displayHyperbolic}
                setHyperbolicCoordinates={setHyperbolicCoordinates}
                exponentialConstants={props.exponentialConstants}
                displayExponential={displayExponential}
                setExponentialCoordinates={setExponentialCoordinates}
                logarithmicConstants={props.logarithmicConstants}
                displayLogarithmic={displayLogarithmic}
                setLogarithmicCoordinates={setLogarithmicCoordinates}
                logisticConstants={props.logisticConstants}
                displayLogistic={displayLogistic}
                setLogisticCoordinates={setLogisticCoordinates}
                sinusoidalConstants={props.sinusoidalConstants}
                displaySinusoidal={displaySinusoidal}
                setSinusoidalCoordinates={setSinusoidalCoordinates}
            />

            <p><em><strong>Best Fit</strong></em> {props.bestFit}</p>

            <FutureEvaluations 
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

            {displayTableButtons}
            {table}
        </div>
    )
}

// Export function
export default GeneratedModels