import Evaluations from './Evaluations'

function GeneratePoints(equationType, coefficients, minimum, maximum, increment) {
    console.log('MAXIMUM IN GENERATE POINTS: ', maximum)
    let finalPoints = []

    for (let x = minimum; x <= maximum; x += increment) {
        const y = Evaluations(equationType, coefficients, x)
        finalPoints.push({x: x, y: y})
    }
    
    return finalPoints
}

export default GeneratePoints