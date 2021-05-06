function Evaluations(equationType, coefficients, precision, independent) {
    let dependent = 0

    if (equationType === 'linear') {
        dependent += coefficients[0] * independent + coefficients[1]
    } else if (equationType === 'quadratic') {
        dependent += coefficients[0] * independent**2 + coefficients[1] * independent + coefficients[2]
    } else if (equationType === 'cubic') {
        dependent += coefficients[0] * independent**3 + coefficients[1] * independent**2 + coefficients[2] * independent + coefficients[3]
    } else if (equationType === 'hyperbolic') {
        dependent += coefficients[0] / independent + coefficients[1]
    } else if (equationType === 'exponential') {
        dependent += coefficients[0] * coefficients[1]**independent
    } else if (equationType === 'logarithmic') {
        dependent += coefficients[0] * Math.log(independent) + coefficients[1]
    } else if (equationType === 'logistic') {
        dependent += coefficients[0] / (1 + Math.exp(-1 * coefficients[1] * (independent - coefficients[2])))
    } else if (equationType === 'sinusoidal') {
        dependent += coefficients[0] * Math.sin(coefficients[1] * (independent - coefficients[2])) + coefficients[3]
    }
    
    return dependent.toFixed(precision)
}

export default Evaluations