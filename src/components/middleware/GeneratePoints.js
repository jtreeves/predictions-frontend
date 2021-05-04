import HorizontalAxis from './HorizontalAxis'
import Evaluations from './Evaluations'

function GeneratePoints(equationType, coefficients, originalPoints) {
    const horizontals = HorizontalAxis(originalPoints)
    const maximum = horizontals.maximum
    const minimum = horizontals.minimum
    const range = horizontals.range
    const increment = range / 100

    let finalPoints = []

    for (let x = minimum; x <= maximum; x += increment) {
        const y = Evaluations(equationType, coefficients, x)
        finalPoints.push({x: x, y: y})
    }
    
    return finalPoints
}

export default GeneratePoints