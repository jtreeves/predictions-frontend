import Evaluations from './Evaluations'

function GeneratePoints(equationType, coefficients, minimum, maximum, increment) {
    let finalPoints = []

    for (let x = minimum; x <= maximum; x += increment) {
        const y = Evaluations(equationType, coefficients, x)
        finalPoints.push({x: x, y: y})
    }
    
    return finalPoints
}

export default GeneratePoints