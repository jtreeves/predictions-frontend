function GeneratePoints(equationType, coefficients) {
    let points = []

    if (equationType === 'linear') {
        for (let x = 1; x < 100; x++) {
            const y = coefficients[0] * x + coefficients[1]
            points.push({x: x, y: y})
        }
    } else if (equationType === 'quadratic') {
        for (let x = 1; x < 100; x++) {
            const y = coefficients[0] * x**2 + coefficients[1] * x + coefficients[2]
            points.push({x: x, y: y})
        }
    } else if (equationType === 'cubic') {
        for (let x = 1; x < 100; x++) {
            const y = coefficients[0] * x**3 + coefficients[1] * x**2 + coefficients[2] * x + coefficients[3]
            points.push({x: x, y: y})
        }
    } else if (equationType === 'hyperbolic') {
        for (let x = 1; x < 100; x++) {
            const y = coefficients[0] / x + coefficients[1]
            points.push({x: x, y: y})
        }
    } else if (equationType === 'exponential') {
        for (let x = 1; x < 100; x++) {
            const y = coefficients[0] * coefficients[1]**x
            points.push({x: x, y: y})
        }
    } else if (equationType === 'logarithmic') {
        for (let x = 1; x < 100; x++) {
            const y = coefficients[0] * Math.log(x) + coefficients[1]
            points.push({x: x, y: y})
        }
    } else if (equationType === 'logistic') {
        for (let x = 1; x < 100; x++) {
            const y = coefficients[0] / (1 + Math.exp(-1 * coefficients[1] * (x - coefficients[2])))
            points.push({x: x, y: y})
        }
    } else if (equationType === 'sinusoidal') {
        for (let x = 1; x < 100; x++) {
            const y = coefficients[0] * Math.sin(coefficients[1] * (x - coefficients[2])) + coefficients[3]
            points.push({x: x, y: y})
        }
    }
    
    return points
}

export default GeneratePoints