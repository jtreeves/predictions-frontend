import GeneratePoints from './GeneratePoints'

function ZoomSeparateGraphs(displayOriginal, setOriginalCoordinates, originalPoints, displayLinear, setLinearCoordinates, linearConstants, displayQuadratic, setQuadraticCoordinates, quadraticConstants, displayCubic, setCubicCoordinates, cubicConstants, displayHyperbolic, setHyperbolicCoordinates, hyperbolicConstants, displayExponential, setExponentialCoordinates, exponentialConstants, displayLogarithmic, setLogarithmicCoordinates, logarithmicConstants, displayLogistic, setLogisticCoordinates, logisticConstants, displaySinusoidal, setSinusoidalCoordinates, sinusoidalConstants, xMinimum, xMaximum, increment, precision) {
    if (displayOriginal) {
        setOriginalCoordinates(originalPoints.filter((point) => {
            if (point.x >= xMinimum && point.x <= xMaximum) {
                return true
            } else {
                return false
            }
        }))
    }

    if (displayLinear) {
        setLinearCoordinates(GeneratePoints('linear', linearConstants, xMinimum, xMaximum, increment, precision))
    }

    if (displayQuadratic) {
        setQuadraticCoordinates(GeneratePoints('quadratic', quadraticConstants, xMinimum, xMaximum, increment, precision))
    }

    if (displayCubic) {
        setCubicCoordinates(GeneratePoints('cubic', cubicConstants, xMinimum, xMaximum, increment, precision))
    }

    if (displayHyperbolic) {
        setHyperbolicCoordinates(GeneratePoints('hyperbolic', hyperbolicConstants, xMinimum, xMaximum, increment, precision))
    }

    if (displayExponential) {
        setExponentialCoordinates(GeneratePoints('exponential', exponentialConstants, xMinimum, xMaximum, increment, precision))
    }

    if (displayLogarithmic) {
        setLogarithmicCoordinates(GeneratePoints('logarithmic', logarithmicConstants, xMinimum, xMaximum, increment, precision))
    }

    if (displayLogistic) {
        setLogisticCoordinates(GeneratePoints('logistic', logisticConstants, xMinimum, xMaximum, increment, precision))
    }

    if (displaySinusoidal) {
        setSinusoidalCoordinates(GeneratePoints('sinusoidal', sinusoidalConstants, xMinimum, xMaximum, increment, precision))
    }
}

export default ZoomSeparateGraphs