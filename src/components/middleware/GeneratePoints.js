import Evaluations from './Evaluations'

function GeneratePoints(equationType, coefficients, minimum, maximum, adjustment = 0) {
    const range = maximum - minimum
    const adjustedRange = range * (1 + adjustment)
    const tail = (adjustedRange - range) / 2
    const adjustedMinimum = minimum - tail
    const adjustedMaximum = maximum + tail
    const increment = adjustedRange / 100

    let finalPoints = []

    for (let x = adjustedMinimum; x <= adjustedMaximum; x += increment) {
        const y = Evaluations(equationType, coefficients, x)
        finalPoints.push({x: x, y: y})
    }
    
    return finalPoints
}

export default GeneratePoints