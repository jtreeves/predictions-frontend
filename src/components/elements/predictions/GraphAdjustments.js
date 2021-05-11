import Legend from '../../buttons/predictions/Legend'
import Zoom from '../../buttons/predictions/Zoom'

function GraphAdjustments(props) {
    return (
        <section className="graph-adjustments">
            <Legend 
                precision={props.precision}
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

            <Zoom 
                precision={props.precision}
                zoom={props.zoom}
                setZoom={props.setZoom}
                originalPoints={props.originalPoints}
                displayOriginal={props.displayOriginal}
                setOriginalCoordinates={props.setOriginalCoordinates}
                linearConstants={props.linearConstants}
                displayLinear={props.displayLinear}
                setLinearCoordinates={props.setLinearCoordinates}
                quadraticConstants={props.quadraticConstants}
                displayQuadratic={props.displayQuadratic}
                setQuadraticCoordinates={props.setQuadraticCoordinates}
                cubicConstants={props.cubicConstants}
                displayCubic={props.displayCubic}
                setCubicCoordinates={props.setCubicCoordinates}
                hyperbolicConstants={props.hyperbolicConstants}
                displayHyperbolic={props.displayHyperbolic}
                setHyperbolicCoordinates={props.setHyperbolicCoordinates}
                exponentialConstants={props.exponentialConstants}
                displayExponential={props.displayExponential}
                setExponentialCoordinates={props.setExponentialCoordinates}
                logarithmicConstants={props.logarithmicConstants}
                displayLogarithmic={props.displayLogarithmic}
                setLogarithmicCoordinates={props.setLogarithmicCoordinates}
                logisticConstants={props.logisticConstants}
                displayLogistic={props.displayLogistic}
                setLogisticCoordinates={props.setLogisticCoordinates}
                sinusoidalConstants={props.sinusoidalConstants}
                displaySinusoidal={props.displaySinusoidal}
                setSinusoidalCoordinates={props.setSinusoidalCoordinates}
            />
        </section>
    )
}

export default GraphAdjustments