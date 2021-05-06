import HorizontalAxis from '../../middleware/HorizontalAxis'
import GeneratePoints from '../../middleware/GeneratePoints'

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
            props.setLinearCoordinates(GeneratePoints('linear', props.linearConstants, xMinimum, xMaximum, increment))
        }
        if (props.displayQuadratic) {
            props.setQuadraticCoordinates(GeneratePoints('quadratic', props.quadraticConstants, xMinimum, xMaximum, increment))
        }
        if (props.displayCubic) {
            props.setCubicCoordinates(GeneratePoints('cubic', props.cubicConstants, xMinimum, xMaximum, increment))
        }
        if (props.displayHyperbolic) {
            props.setHyperbolicCoordinates(GeneratePoints('hyperbolic', props.hyperbolicConstants, xMinimum, xMaximum, increment))
        }
        if (props.displayExponential) {
            props.setExponentialCoordinates(GeneratePoints('exponential', props.exponentialConstants, xMinimum, xMaximum, increment))
        }
        if (props.displayLogarithmic) {
            props.setLogarithmicCoordinates(GeneratePoints('logarithmic', props.logarithmicConstants, xMinimum, xMaximum, increment))
        }
        if (props.displayLogistic) {
            props.setLogisticCoordinates(GeneratePoints('logistic', props.logisticConstants, xMinimum, xMaximum, increment))
        }
        if (props.displaySinusoidal) {
            props.setSinusoidalCoordinates(GeneratePoints('sinusoidal', props.sinusoidalConstants, xMinimum, xMaximum, increment))
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
            props.setLinearCoordinates(GeneratePoints('linear', props.linearConstants, xMinimum, xMaximum, increment))
        }
        if (props.displayQuadratic) {
            props.setQuadraticCoordinates(GeneratePoints('quadratic', props.quadraticConstants, xMinimum, xMaximum, increment))
        }
        if (props.displayCubic) {
            props.setCubicCoordinates(GeneratePoints('cubic', props.cubicConstants, xMinimum, xMaximum, increment))
        }
        if (props.displayHyperbolic) {
            props.setHyperbolicCoordinates(GeneratePoints('hyperbolic', props.hyperbolicConstants, xMinimum, xMaximum, increment))
        }
        if (props.displayExponential) {
            props.setExponentialCoordinates(GeneratePoints('exponential', props.exponentialConstants, xMinimum, xMaximum, increment))
        }
        if (props.displayLogarithmic) {
            props.setLogarithmicCoordinates(GeneratePoints('logarithmic', props.logarithmicConstants, xMinimum, xMaximum, increment))
        }
        if (props.displayLogistic) {
            props.setLogisticCoordinates(GeneratePoints('logistic', props.logisticConstants, xMinimum, xMaximum, increment))
        }
        if (props.displaySinusoidal) {
            props.setSinusoidalCoordinates(GeneratePoints('sinusoidal', props.sinusoidalConstants, xMinimum, xMaximum, increment))
        }
    }

    return (
        <div>
            <button onClick={handleZoomOut}>Zoom Out</button>
            <button onClick={handleZoomIn}>Zoom In</button>
        </div>
    )
}

export default Zoom