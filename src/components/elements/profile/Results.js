// Create function
function Results(props) {
    const linearRoots = props.linearPoints.roots
    const linearMaxima = props.linearPoints.maxima
    const linearMinima = props.linearPoints.minima
    const linearInflections = props.linearPoints.inflections
    let linearRootsDisplayed = ''
    if (linearRoots[0] !== null) {
        for (const point of linearRoots) {
            linearRootsDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        linearRootsDisplayed = 'None'
    }
    let linearMaximaDisplayed = ''
    if (linearMaxima[0] !== null) {
        for (const point of linearMaxima) {
            linearMaximaDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        linearMaximaDisplayed = 'None'
    }
    let linearMinimaDisplayed = ''
    if (linearMinima[0] !== null) {
        for (const point of linearMinima) {
            linearMinimaDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        linearMinimaDisplayed = 'None'
    }
    let linearInflectionsDisplayed = ''
    if (linearInflections[0] !== null) {
        for (const point of linearInflections) {
            linearInflectionsDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        linearInflectionsDisplayed = 'None'
    }
    
    const quadraticRoots = props.quadraticPoints.roots
    const quadraticMaxima = props.quadraticPoints.maxima
    const quadraticMinima = props.quadraticPoints.minima
    const quadraticInflections = props.quadraticPoints.inflections
    let quadraticRootsDisplayed = ''
    if (quadraticRoots[0] !== null) {
        for (const point of quadraticRoots) {
            quadraticRootsDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        quadraticRootsDisplayed = 'None'
    }
    let quadraticMaximaDisplayed = ''
    if (quadraticMaxima[0] !== null) {
        for (const point of quadraticMaxima) {
            quadraticMaximaDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        quadraticMaximaDisplayed = 'None'
    }
    let quadraticMinimaDisplayed = ''
    if (quadraticMinima[0] !== null) {
        for (const point of quadraticMinima) {
            quadraticMinimaDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        quadraticMinimaDisplayed = 'None'
    }
    let quadraticInflectionsDisplayed = ''
    if (quadraticInflections[0] !== null) {
        for (const point of quadraticInflections) {
            quadraticInflectionsDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        quadraticInflectionsDisplayed = 'None'
    }
    
    const cubicRoots = props.cubicPoints.roots
    const cubicMaxima = props.cubicPoints.maxima
    const cubicMinima = props.cubicPoints.minima
    const cubicInflections = props.cubicPoints.inflections
    let cubicRootsDisplayed = ''
    if (cubicRoots[0] !== null) {
        for (const point of cubicRoots) {
            cubicRootsDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        cubicRootsDisplayed = 'None'
    }
    let cubicMaximaDisplayed = ''
    if (cubicMaxima[0] !== null) {
        for (const point of cubicMaxima) {
            cubicMaximaDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        cubicMaximaDisplayed = 'None'
    }
    let cubicMinimaDisplayed = ''
    if (cubicMinima[0] !== null) {
        for (const point of cubicMinima) {
            cubicMinimaDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        cubicMinimaDisplayed = 'None'
    }
    let cubicInflectionsDisplayed = ''
    if (cubicInflections[0] !== null) {
        for (const point of cubicInflections) {
            cubicInflectionsDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        cubicInflectionsDisplayed = 'None'
    }

    const hyperbolicRoots = props.hyperbolicPoints.roots
    const hyperbolicMaxima = props.hyperbolicPoints.maxima
    const hyperbolicMinima = props.hyperbolicPoints.minima
    const hyperbolicInflections = props.hyperbolicPoints.inflections
    let hyperbolicRootsDisplayed = ''
    if (hyperbolicRoots[0] !== null) {
        for (const point of hyperbolicRoots) {
            hyperbolicRootsDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        hyperbolicRootsDisplayed = 'None'
    }
    let hyperbolicMaximaDisplayed = ''
    if (hyperbolicMaxima[0] !== null) {
        for (const point of hyperbolicMaxima) {
            hyperbolicMaximaDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        hyperbolicMaximaDisplayed = 'None'
    }
    let hyperbolicMinimaDisplayed = ''
    if (hyperbolicMinima[0] !== null) {
        for (const point of hyperbolicMinima) {
            hyperbolicMinimaDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        hyperbolicMinimaDisplayed = 'None'
    }
    let hyperbolicInflectionsDisplayed = ''
    if (hyperbolicInflections[0] !== null) {
        for (const point of hyperbolicInflections) {
            hyperbolicInflectionsDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        hyperbolicInflectionsDisplayed = 'None'
    }
    
    const exponentialRoots = props.exponentialPoints.roots
    const exponentialMaxima = props.exponentialPoints.maxima
    const exponentialMinima = props.exponentialPoints.minima
    const exponentialInflections = props.exponentialPoints.inflections
    let exponentialRootsDisplayed = ''
    if (exponentialRoots[0] !== null) {
        for (const point of exponentialRoots) {
            exponentialRootsDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        exponentialRootsDisplayed = 'None'
    }
    let exponentialMaximaDisplayed = ''
    if (exponentialMaxima[0] !== null) {
        for (const point of exponentialMaxima) {
            exponentialMaximaDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        exponentialMaximaDisplayed = 'None'
    }
    let exponentialMinimaDisplayed = ''
    if (exponentialMinima[0] !== null) {
        for (const point of exponentialMinima) {
            exponentialMinimaDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        exponentialMinimaDisplayed = 'None'
    }
    let exponentialInflectionsDisplayed = ''
    if (exponentialInflections[0] !== null) {
        for (const point of exponentialInflections) {
            exponentialInflectionsDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        exponentialInflectionsDisplayed = 'None'
    }
    
    const logarithmicRoots = props.logarithmicPoints.roots
    const logarithmicMaxima = props.logarithmicPoints.maxima
    const logarithmicMinima = props.logarithmicPoints.minima
    const logarithmicInflections = props.logarithmicPoints.inflections
    let logarithmicRootsDisplayed = ''
    if (logarithmicRoots[0] !== null) {
        for (const point of logarithmicRoots) {
            logarithmicRootsDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        logarithmicRootsDisplayed = 'None'
    }
    let logarithmicMaximaDisplayed = ''
    if (logarithmicMaxima[0] !== null) {
        for (const point of logarithmicMaxima) {
            logarithmicMaximaDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        logarithmicMaximaDisplayed = 'None'
    }
    let logarithmicMinimaDisplayed = ''
    if (logarithmicMinima[0] !== null) {
        for (const point of logarithmicMinima) {
            logarithmicMinimaDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        logarithmicMinimaDisplayed = 'None'
    }
    let logarithmicInflectionsDisplayed = ''
    if (logarithmicInflections[0] !== null) {
        for (const point of logarithmicInflections) {
            logarithmicInflectionsDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        logarithmicInflectionsDisplayed = 'None'
    }
    
    const logisticRoots = props.logisticPoints.roots
    const logisticMaxima = props.logisticPoints.maxima
    const logisticMinima = props.logisticPoints.minima
    const logisticInflections = props.logisticPoints.inflections
    let logisticRootsDisplayed = ''
    if (logisticRoots[0] !== null) {
        for (const point of logisticRoots) {
            logisticRootsDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        logisticRootsDisplayed = 'None'
    }
    let logisticMaximaDisplayed = ''
    if (logisticMaxima[0] !== null) {
        for (const point of logisticMaxima) {
            logisticMaximaDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        logisticMaximaDisplayed = 'None'
    }
    let logisticMinimaDisplayed = ''
    if (logisticMinima[0] !== null) {
        for (const point of logisticMinima) {
            logisticMinimaDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        logisticMinimaDisplayed = 'None'
    }
    let logisticInflectionsDisplayed = ''
    if (logisticInflections[0] !== null) {
        for (const point of logisticInflections) {
            logisticInflectionsDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        logisticInflectionsDisplayed = 'None'
    }
    
    const sinusoidalRoots = props.sinusoidalPoints.roots
    const sinusoidalMaxima = props.sinusoidalPoints.maxima
    const sinusoidalMinima = props.sinusoidalPoints.minima
    const sinusoidalInflections = props.sinusoidalPoints.inflections
    let sinusoidalRootsDisplayed = ''
    if (sinusoidalRoots[0] !== null) {
        for (const point of sinusoidalRoots) {
            sinusoidalRootsDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        sinusoidalRootsDisplayed = 'None'
    }
    let sinusoidalMaximaDisplayed = ''
    if (sinusoidalMaxima[0] !== null) {
        for (const point of sinusoidalMaxima) {
            sinusoidalMaximaDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        sinusoidalMaximaDisplayed = 'None'
    }
    let sinusoidalMinimaDisplayed = ''
    if (sinusoidalMinima[0] !== null) {
        for (const point of sinusoidalMinima) {
            sinusoidalMinimaDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        sinusoidalMinimaDisplayed = 'None'
    }
    let sinusoidalInflectionsDisplayed = ''
    if (sinusoidalInflections[0] !== null) {
        for (const point of sinusoidalInflections) {
            sinusoidalInflectionsDisplayed += '(' + point[0] + ', ' + point[1] + ')'
        }
    } else {
        sinusoidalInflectionsDisplayed = 'None'
    }

    return (
        <div>
            <h1>View the Results of the Data Analysis</h1>
            <p>Linear Coefficients: {props.linearConstants[0]}, {props.linearConstants[1]}</p>
            <p>Linear Roots: {linearRootsDisplayed}</p>
            <p>Linear Maxima: {linearMaximaDisplayed}</p>
            <p>Linear Minima: {linearMinimaDisplayed}</p>
            <p>Linear Inflections: {linearInflectionsDisplayed}</p>
            <p>Linear Correlation: {props.linearCorrelation}</p>
            <p>Quadratic Coefficients: {props.quadraticConstants[0]}, {props.quadraticConstants[1]}, {props.quadraticConstants[2]}</p>
            <p>Quadratic Roots: {quadraticRootsDisplayed}</p>
            <p>Quadratic Maxima: {quadraticMaximaDisplayed}</p>
            <p>Quadratic Minima: {quadraticMinimaDisplayed}</p>
            <p>Quadratic Inflections: {quadraticInflectionsDisplayed}</p>
            <p>Quadratic Correlation: {props.quadraticCorrelation}</p>
            <p>Cubic Coefficients: {props.cubicConstants[0]}, {props.cubicConstants[1]}, {props.cubicConstants[2]}, {props.cubicConstants[3]}</p>
            <p>Cubic Roots: {cubicRootsDisplayed}</p>
            <p>Cubic Maxima: {cubicMaximaDisplayed}</p>
            <p>Cubic Minima: {cubicMinimaDisplayed}</p>
            <p>Cubic Inflections: {cubicInflectionsDisplayed}</p>
            <p>Cubic Correlation: {props.cubicCorrelation}</p>
            <p>Hyperbolic Coefficients: {props.hyperbolicConstants[0]}, {props.hyperbolicConstants[1]}</p>
            <p>Hyperbolic Roots: {hyperbolicRootsDisplayed}</p>
            <p>Hyperbolic Maxima: {hyperbolicMaximaDisplayed}</p>
            <p>Hyperbolic Minima: {hyperbolicMinimaDisplayed}</p>
            <p>Hyperbolic Inflections: {hyperbolicInflectionsDisplayed}</p>
            <p>Hyperbolic Correlation: {props.hyperbolicCorrelation}</p>
            <p>Exponential Coefficients: {props.exponentialConstants[0]}, {props.exponentialConstants[1]}</p>
            <p>Exponential Roots: {exponentialRootsDisplayed}</p>
            <p>Exponential Maxima: {exponentialMaximaDisplayed}</p>
            <p>Exponential Minima: {exponentialMinimaDisplayed}</p>
            <p>Exponential Inflections: {exponentialInflectionsDisplayed}</p>
            <p>Exponential Correlation: {props.exponentialCorrelation}</p>
            <p>Logarithmic Coefficients: {props.logarithmicConstants[0]}, {props.logarithmicConstants[1]}</p>
            <p>Logarithmic Roots: {logarithmicRootsDisplayed}</p>
            <p>Logarithmic Maxima: {logarithmicMaximaDisplayed}</p>
            <p>Logarithmic Minima: {logarithmicMinimaDisplayed}</p>
            <p>Logarithmic Inflections: {logarithmicInflectionsDisplayed}</p>
            <p>Logarithmic Correlation: {props.logarithmicCorrelation}</p>
            <p>Logistic Coefficients: {props.logisticConstants[0]}, {props.logisticConstants[1]}, {props.logisticConstants[2]}</p>
            <p>Logistic Roots: {logisticRootsDisplayed}</p>
            <p>Logistic Maxima: {logisticMaximaDisplayed}</p>
            <p>Logistic Minima: {logisticMinimaDisplayed}</p>
            <p>Logistic Inflections: {logisticInflectionsDisplayed}</p>
            <p>Logistic Correlation: {props.logisticCorrelation}</p>
            <p>Sinusoidal Coefficients: {props.sinusoidalConstants[0]}, {props.sinusoidalConstants[1]}, {props.sinusoidalConstants[2]}, {props.sinusoidalConstants[3]}</p>
            <p>Sinusoidal Roots: {sinusoidalRootsDisplayed}</p>
            <p>Sinusoidal Maxima: {sinusoidalMaximaDisplayed}</p>
            <p>Sinusoidal Minima: {sinusoidalMinimaDisplayed}</p>
            <p>Sinusoidal Inflections: {sinusoidalInflectionsDisplayed}</p>
            <p>Sinusoidal Correlation: {props.sinusoidalCorrelation}</p>
            <p>Best Fit: {props.bestFit}</p>
        </div>
    )
}

// Export function
export default Results