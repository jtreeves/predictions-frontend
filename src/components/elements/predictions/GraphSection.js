import GraphAdjustments from './GraphAdjustments'
import GraphOutput from './GraphOutput'

function GraphSection(props) {
    return (
        <section className="graph-section">
            <GraphOutput 
                independent={props.independent}
                dependent={props.dependent}
                xMinimum={props.xMinimum}
                xMaximum={props.xMaximum}
                yMinimum={props.yMinimum}
                yMaximum={props.yMaximum}
                originalCoordinates={props.originalCoordinates}
                linearCoordinates={props.linearCoordinates}
                quadraticCoordinates={props.quadraticCoordinates}
                cubicCoordinates={props.cubicCoordinates}
                hyperbolicCoordinates={props.hyperbolicCoordinates}
                exponentialCoordinates={props.exponentialCoordinates}
                logarithmicCoordinates={props.logarithmicCoordinates}
                logisticCoordinates={props.logisticCoordinates}
                sinusoidalCoordinates={props.sinusoidalCoordinates}
            />

            <GraphAdjustments 
                precision={props.precision}
                zoom={props.zoom}
                setZoom={props.setZoom}
                xMinimum={props.xMinimum}
                xMaximum={props.xMaximum}
                increment={props.increment}
                originalPoints={props.originalPoints}
                displayOriginal={props.displayOriginal}
                setDisplayOriginal={props.setDisplayOriginal}
                setOriginalCoordinates={props.setOriginalCoordinates}
                linearConstants={props.linearConstants}
                displayLinear={props.displayLinear}
                setDisplayLinear={props.setDisplayLinear}
                setLinearCoordinates={props.setLinearCoordinates}
                quadraticConstants={props.quadraticConstants}
                displayQuadratic={props.displayQuadratic}
                setDisplayQuadratic={props.setDisplayQuadratic}
                setQuadraticCoordinates={props.setQuadraticCoordinates}
                cubicConstants={props.cubicConstants}
                displayCubic={props.displayCubic}
                setDisplayCubic={props.setDisplayCubic}
                setCubicCoordinates={props.setCubicCoordinates}
                hyperbolicConstants={props.hyperbolicConstants}
                displayHyperbolic={props.displayHyperbolic}
                setDisplayHyperbolic={props.setDisplayHyperbolic}
                setHyperbolicCoordinates={props.setHyperbolicCoordinates}
                exponentialConstants={props.exponentialConstants}
                displayExponential={props.displayExponential}
                setDisplayExponential={props.setDisplayExponential}
                setExponentialCoordinates={props.setExponentialCoordinates}
                logarithmicConstants={props.logarithmicConstants}
                displayLogarithmic={props.displayLogarithmic}
                setDisplayLogarithmic={props.setDisplayLogarithmic}
                setLogarithmicCoordinates={props.setLogarithmicCoordinates}
                logisticConstants={props.logisticConstants}
                displayLogistic={props.displayLogistic}
                setDisplayLogistic={props.setDisplayLogistic}
                setLogisticCoordinates={props.setLogisticCoordinates}
                sinusoidalConstants={props.sinusoidalConstants}
                displaySinusoidal={props.displaySinusoidal}
                setDisplaySinusoidal={props.setDisplaySinusoidal}
                setSinusoidalCoordinates={props.setSinusoidalCoordinates}
            />
        </section>
    )
}

export default GraphSection