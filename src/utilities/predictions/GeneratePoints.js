import Evaluations from './Evaluations'

function GeneratePoints(equationType, coefficients, minimum, maximum, increment, precision) {
    let finalPoints = []

    if (increment <= 0) {
        increment = 10**(-precision)
    }

    for (let x = minimum; x <= maximum; x += increment) {
        if (
            (equationType === 'logarithmic' && x <= 0) || 
            (equationType === 'hyperbolic' && x === 0)
        ) {
            finalPoints.push({x: x, y: 0})
        } else {
            const y = Evaluations(
                equationType, coefficients, precision, x
            )
            finalPoints.push({x: x, y: y})
        }
    }
    
    return finalPoints
}

export default GeneratePoints