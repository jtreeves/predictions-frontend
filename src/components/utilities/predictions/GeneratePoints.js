import Evaluations from './Evaluations'

function GeneratePoints(equationType, coefficients, minimum, maximum, increment, precision) {
    let finalPoints = []

    for (let x = minimum; x <= maximum; x += increment) {
        const y = Evaluations(equationType, coefficients, precision, x)
        finalPoints.push({x: x, y: y})
    }
    
    return finalPoints
}

export default GeneratePoints