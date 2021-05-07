import HorizontalAxis from '../../utilities/predictions/HorizontalAxis'
import GeneratePoints from '../../utilities/predictions/GeneratePoints'

function Zoom(props) {
    const handleZoomOut = (e) => {
        e.preventDefault()
        props.setZoom(props.zoom + 0.1)
        const xAxis = HorizontalAxis(props.originalPoints, props.zoom + 0.1)
        const xMinimum = xAxis.minimum
        const xMaximum = xAxis.maximum
        const increment = xAxis.increment
        if (props.displayOriginal) {
            props.setOriginalCoordinates(props.originalPoints.filter((point) => {
                if (point.x >= xMinimum && point.x <= xMaximum) {
                    return true
                } else {
                    return false
                }
            }))
        }
        if (props.displayLinear) {
            props.setLinearCoordinates(GeneratePoints('linear', props.linearConstants, xMinimum, xMaximum, increment, props.precision))
        }
        if (props.displayQuadratic) {
            props.setQuadraticCoordinates(GeneratePoints('quadratic', props.quadraticConstants, xMinimum, xMaximum, increment, props.precision))
        }
        if (props.displayCubic) {
            props.setCubicCoordinates(GeneratePoints('cubic', props.cubicConstants, xMinimum, xMaximum, increment, props.precision))
        }
        if (props.displayHyperbolic) {
            props.setHyperbolicCoordinates(GeneratePoints('hyperbolic', props.hyperbolicConstants, xMinimum, xMaximum, increment, props.precision))
        }
        if (props.displayExponential) {
            props.setExponentialCoordinates(GeneratePoints('exponential', props.exponentialConstants, xMinimum, xMaximum, increment, props.precision))
        }
        if (props.displayLogarithmic) {
            props.setLogarithmicCoordinates(GeneratePoints('logarithmic', props.logarithmicConstants, xMinimum, xMaximum, increment, props.precision))
        }
        if (props.displayLogistic) {
            props.setLogisticCoordinates(GeneratePoints('logistic', props.logisticConstants, xMinimum, xMaximum, increment, props.precision))
        }
        if (props.displaySinusoidal) {
            props.setSinusoidalCoordinates(GeneratePoints('sinusoidal', props.sinusoidalConstants, xMinimum, xMaximum, increment, props.precision))
        }
    }
    
    const handleZoomIn = (e) => {
        e.preventDefault()
        props.setZoom(props.zoom - 0.1)
        const xAxis = HorizontalAxis(props.originalPoints, props.zoom - 0.1)
        const xMinimum = xAxis.minimum
        const xMaximum = xAxis.maximum
        const increment = xAxis.increment
        if (props.displayOriginal) {
            props.setOriginalCoordinates(props.originalPoints.filter((point) => {
                if (point.x >= xMinimum && point.x <= xMaximum) {
                    return true
                } else {
                    return false
                }
            }))
        }
        if (props.displayLinear) {
            props.setLinearCoordinates(GeneratePoints('linear', props.linearConstants, xMinimum, xMaximum, increment, props.precision))
        }
        if (props.displayQuadratic) {
            props.setQuadraticCoordinates(GeneratePoints('quadratic', props.quadraticConstants, xMinimum, xMaximum, increment, props.precision))
        }
        if (props.displayCubic) {
            props.setCubicCoordinates(GeneratePoints('cubic', props.cubicConstants, xMinimum, xMaximum, increment, props.precision))
        }
        if (props.displayHyperbolic) {
            props.setHyperbolicCoordinates(GeneratePoints('hyperbolic', props.hyperbolicConstants, xMinimum, xMaximum, increment, props.precision))
        }
        if (props.displayExponential) {
            props.setExponentialCoordinates(GeneratePoints('exponential', props.exponentialConstants, xMinimum, xMaximum, increment, props.precision))
        }
        if (props.displayLogarithmic) {
            props.setLogarithmicCoordinates(GeneratePoints('logarithmic', props.logarithmicConstants, xMinimum, xMaximum, increment, props.precision))
        }
        if (props.displayLogistic) {
            props.setLogisticCoordinates(GeneratePoints('logistic', props.logisticConstants, xMinimum, xMaximum, increment, props.precision))
        }
        if (props.displaySinusoidal) {
            props.setSinusoidalCoordinates(GeneratePoints('sinusoidal', props.sinusoidalConstants, xMinimum, xMaximum, increment, props.precision))
        }
    }

    return (
        <section className="zoom">
            <h3>Zoom</h3>
            
            <article>
                <button 
                    onClick={handleZoomOut}
                >
                    -
                </button>

                <button 
                    onClick={handleZoomIn}
                >
                    +
                </button>
            </article>
        </section>
    )
}

export default Zoom