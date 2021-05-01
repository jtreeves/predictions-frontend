function GeneratePoints(equationType, coefficients, originalPoints) {
    let independents = []
    for (const point of originalPoints) {
        independents.push(point[0])
    }
    const maximum = Math.max(...independents)
    const minimum = Math.min(...independents)
    const range = maximum - minimum
    const increment = range / 100

    let finalPoints = []

    if (equationType === 'linear') {
        for (let x = minimum; x <= maximum; x += increment) {
            const y = coefficients[0] * x + coefficients[1]
            finalPoints.push({x: x, y: y})
        }
    } else if (equationType === 'quadratic') {
        for (let x = minimum; x <= maximum; x += increment) {
            const y = coefficients[0] * x**2 + coefficients[1] * x + coefficients[2]
            finalPoints.push({x: x, y: y})
        }
    } else if (equationType === 'cubic') {
        for (let x = minimum; x <= maximum; x += increment) {
            const y = coefficients[0] * x**3 + coefficients[1] * x**2 + coefficients[2] * x + coefficients[3]
            finalPoints.push({x: x, y: y})
        }
    } else if (equationType === 'hyperbolic') {
        for (let x = minimum; x <= maximum; x += increment) {
            const y = coefficients[0] / x + coefficients[1]
            finalPoints.push({x: x, y: y})
        }
    } else if (equationType === 'exponential') {
        for (let x = minimum; x <= maximum; x += increment) {
            const y = coefficients[0] * coefficients[1]**x
            finalPoints.push({x: x, y: y})
        }
    } else if (equationType === 'logarithmic') {
        for (let x = minimum; x <= maximum; x += increment) {
            const y = coefficients[0] * Math.log(x) + coefficients[1]
            finalPoints.push({x: x, y: y})
        }
    } else if (equationType === 'logistic') {
        for (let x = minimum; x <= maximum; x += increment) {
            const y = coefficients[0] / (1 + Math.exp(-1 * coefficients[1] * (x - coefficients[2])))
            finalPoints.push({x: x, y: y})
        }
    } else if (equationType === 'sinusoidal') {
        for (let x = minimum; x <= maximum; x += increment) {
            const y = coefficients[0] * Math.sin(coefficients[1] * (x - coefficients[2])) + coefficients[3]
            finalPoints.push({x: x, y: y})
        }
    }
    
    return finalPoints
}

export default GeneratePoints