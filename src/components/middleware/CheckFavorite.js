import GeneratePoints from './GeneratePoints'

function CheckFavorite(favorite, xMinimum, xMaximum, increment, linearConstants, setDisplayLinear, setLinearCoordinates, quadraticConstants, setDisplayQuadratic, setQuadraticCoordinates, cubicConstants, setDisplayCubic, setCubicCoordinates, hyperbolicConstants, setDisplayHyperbolic, setHyperbolicCoordinates, exponentialConstants, setDisplayExponential, setExponentialCoordinates, logarithmicConstants, setDisplayLogarithmic, setLogarithmicCoordinates, logisticConstants, setDisplayLogistic, setLogisticCoordinates, sinusoidalConstants, setDisplaySinusoidal, setSinusoidalCoordinates) {
    if (favorite) {
        if (favorite === 'linear') {
            setDisplayLinear(true)
            setLinearCoordinates(GeneratePoints('linear', linearConstants, xMinimum, xMaximum, increment))
        }

        if (favorite === 'quadratic') {
            setDisplayQuadratic(true)
            setQuadraticCoordinates(GeneratePoints('quadratic', quadraticConstants, xMinimum, xMaximum, increment))
        }

        if (favorite === 'cubic') {
            setDisplayCubic(true)
            setCubicCoordinates(GeneratePoints('cubic', cubicConstants, xMinimum, xMaximum, increment))
        }

        if (favorite === 'hyperbolic') {
            setDisplayHyperbolic(true)
            setHyperbolicCoordinates(GeneratePoints('hyperbolic', hyperbolicConstants, xMinimum, xMaximum, increment))
        }

        if (favorite === 'exponential') {
            setDisplayExponential(true)
            setExponentialCoordinates(GeneratePoints('exponential', exponentialConstants, xMinimum, xMaximum, increment))
        }

        if (favorite === 'logarithmic') {
            setDisplayLogarithmic(true)
            setLogarithmicCoordinates(GeneratePoints('logarithmic', logarithmicConstants, xMinimum, xMaximum, increment))
        }

        if (favorite === 'logistic') {
            setDisplayLogistic(true)
            setLogisticCoordinates(GeneratePoints('logistic', logisticConstants, xMinimum, xMaximum, increment))
        }

        if (favorite === 'sinusoidal') {
            setDisplaySinusoidal(true)
            setSinusoidalCoordinates(GeneratePoints('sinusoidal', sinusoidalConstants, xMinimum, xMaximum, increment))
        }
    } else {
        setDisplayLinear(true)
        setLinearCoordinates(GeneratePoints('linear', linearConstants, xMinimum, xMaximum, increment))
        setDisplayQuadratic(true)
        setQuadraticCoordinates(GeneratePoints('quadratic', quadraticConstants, xMinimum, xMaximum, increment))
        setDisplayCubic(true)
        setCubicCoordinates(GeneratePoints('cubic', cubicConstants, xMinimum, xMaximum, increment))
        setDisplayHyperbolic(true)
        setHyperbolicCoordinates(GeneratePoints('hyperbolic', hyperbolicConstants, xMinimum, xMaximum, increment))
        setDisplayExponential(true)
        setExponentialCoordinates(GeneratePoints('exponential', exponentialConstants, xMinimum, xMaximum, increment))
        setDisplayLogarithmic(true)
        setLogarithmicCoordinates(GeneratePoints('logarithmic', logarithmicConstants, xMinimum, xMaximum, increment))
        setDisplayLogistic(true)
        setLogisticCoordinates(GeneratePoints('logistic', logisticConstants, xMinimum, xMaximum, increment))
        setDisplaySinusoidal(true)
        setSinusoidalCoordinates(GeneratePoints('sinusoidal', sinusoidalConstants, xMinimum, xMaximum, increment))
    }
}

export default CheckFavorite