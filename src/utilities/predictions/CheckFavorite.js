import { useState } from 'react'
import GeneratePoints from './GeneratePoints'

function CheckFavorite(favorite, xMinimum, xMaximum, increment, precision, linearConstants, setDisplayLinear, setLinearCoordinates, quadraticConstants, setDisplayQuadratic, setQuadraticCoordinates, cubicConstants, setDisplayCubic, setCubicCoordinates, hyperbolicConstants, setDisplayHyperbolic, setHyperbolicCoordinates, exponentialConstants, setDisplayExponential, setExponentialCoordinates, logarithmicConstants, setDisplayLogarithmic, setLogarithmicCoordinates, logisticConstants, setDisplayLogistic, setLogisticCoordinates, sinusoidalConstants, setDisplaySinusoidal, setSinusoidalCoordinates) {
    const [checkFavorite, setCheckFavorite] = useState(true)

    if (checkFavorite) {
        if (favorite) {
            if (favorite === 'linear') {
                setDisplayLinear(true)
                setLinearCoordinates(GeneratePoints('linear', linearConstants, xMinimum, xMaximum, increment, precision))
            }

            if (favorite === 'quadratic') {
                setDisplayQuadratic(true)
                setQuadraticCoordinates(GeneratePoints('quadratic', quadraticConstants, xMinimum, xMaximum, increment, precision))
            }

            if (favorite === 'cubic') {
                setDisplayCubic(true)
                setCubicCoordinates(GeneratePoints('cubic', cubicConstants, xMinimum, xMaximum, increment, precision))
            }

            if (favorite === 'hyperbolic') {
                setDisplayHyperbolic(true)
                setHyperbolicCoordinates(GeneratePoints('hyperbolic', hyperbolicConstants, xMinimum, xMaximum, increment, precision))
            }

            if (favorite === 'exponential') {
                setDisplayExponential(true)
                setExponentialCoordinates(GeneratePoints('exponential', exponentialConstants, xMinimum, xMaximum, increment, precision))
            }

            if (favorite === 'logarithmic') {
                setDisplayLogarithmic(true)
                setLogarithmicCoordinates(GeneratePoints('logarithmic', logarithmicConstants, xMinimum, xMaximum, increment, precision))
            }

            if (favorite === 'logistic') {
                setDisplayLogistic(true)
                setLogisticCoordinates(GeneratePoints('logistic', logisticConstants, xMinimum, xMaximum, increment, precision))
            }

            if (favorite === 'sinusoidal') {
                setDisplaySinusoidal(true)
                setSinusoidalCoordinates(GeneratePoints('sinusoidal', sinusoidalConstants, xMinimum, xMaximum, increment, precision))
            }
        } else {
            setDisplayLinear(true)
            setLinearCoordinates(GeneratePoints('linear', linearConstants, xMinimum, xMaximum, increment, precision))
            setDisplayQuadratic(true)
            setQuadraticCoordinates(GeneratePoints('quadratic', quadraticConstants, xMinimum, xMaximum, increment, precision))
            setDisplayCubic(true)
            setCubicCoordinates(GeneratePoints('cubic', cubicConstants, xMinimum, xMaximum, increment, precision))
            setDisplayHyperbolic(true)
            setHyperbolicCoordinates(GeneratePoints('hyperbolic', hyperbolicConstants, xMinimum, xMaximum, increment, precision))
            setDisplayExponential(true)
            setExponentialCoordinates(GeneratePoints('exponential', exponentialConstants, xMinimum, xMaximum, increment, precision))
            setDisplayLogarithmic(true)
            setLogarithmicCoordinates(GeneratePoints('logarithmic', logarithmicConstants, xMinimum, xMaximum, increment, precision))
            setDisplayLogistic(true)
            setLogisticCoordinates(GeneratePoints('logistic', logisticConstants, xMinimum, xMaximum, increment, precision))
            setDisplaySinusoidal(true)
            setSinusoidalCoordinates(GeneratePoints('sinusoidal', sinusoidalConstants, xMinimum, xMaximum, increment, precision))
        }
        setCheckFavorite(false)
    }
}

export default CheckFavorite