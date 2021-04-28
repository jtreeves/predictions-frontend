import Latex from 'react-latex'

// Create function
function Results(props) {
    const precision = parseInt(props.precision)
    const linearRoots = props.linearPoints.roots
    const linearMaxima = props.linearPoints.maxima
    const linearMinima = props.linearPoints.minima
    const linearInflections = props.linearPoints.inflections
    let linearRootsDisplayed = ''
    if (linearRoots[0] !== null) {
        for (const point of linearRoots) {
            linearRootsDisplayed += `$ (${point[0]}, 0.0) $`
        }
    } else {
        linearRootsDisplayed = `$ None $`
    }
    let linearMaximaDisplayed = ''
    if (linearMaxima[0] !== null) {
        for (const point of linearMaxima) {
            linearMaximaDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        linearMaximaDisplayed = `$ None $`
    }
    let linearMinimaDisplayed = ''
    if (linearMinima[0] !== null) {
        for (const point of linearMinima) {
            linearMinimaDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        linearMinimaDisplayed = `$ None $`
    }
    let linearInflectionsDisplayed = ''
    if (linearInflections[0] !== null) {
        for (const point of linearInflections) {
            linearInflectionsDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        linearInflectionsDisplayed = `$ None $`
    }
    
    const quadraticRoots = props.quadraticPoints.roots
    const quadraticMaxima = props.quadraticPoints.maxima
    const quadraticMinima = props.quadraticPoints.minima
    const quadraticInflections = props.quadraticPoints.inflections
    let quadraticRootsDisplayed = ''
    if (quadraticRoots[0] !== null) {
        for (const point of quadraticRoots) {
            quadraticRootsDisplayed += `$ (${point[0]}, 0.0) $`
        }
    } else {
        quadraticRootsDisplayed = `$ None $`
    }
    let quadraticMaximaDisplayed = ''
    if (quadraticMaxima[0] !== null) {
        for (const point of quadraticMaxima) {
            quadraticMaximaDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        quadraticMaximaDisplayed = `$ None $`
    }
    let quadraticMinimaDisplayed = ''
    if (quadraticMinima[0] !== null) {
        for (const point of quadraticMinima) {
            quadraticMinimaDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        quadraticMinimaDisplayed = `$ None $`
    }
    let quadraticInflectionsDisplayed = ''
    if (quadraticInflections[0] !== null) {
        for (const point of quadraticInflections) {
            quadraticInflectionsDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        quadraticInflectionsDisplayed = `$ None $`
    }
    
    const cubicRoots = props.cubicPoints.roots
    const cubicMaxima = props.cubicPoints.maxima
    const cubicMinima = props.cubicPoints.minima
    const cubicInflections = props.cubicPoints.inflections
    let cubicRootsDisplayed = ''
    if (cubicRoots[0] !== null) {
        for (const point of cubicRoots) {
            cubicRootsDisplayed += `$ (${point[0]}, 0.0) $`
        }
    } else {
        cubicRootsDisplayed = `$ None $`
    }
    let cubicMaximaDisplayed = ''
    if (cubicMaxima[0] !== null) {
        for (const point of cubicMaxima) {
            cubicMaximaDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        cubicMaximaDisplayed = `$ None $`
    }
    let cubicMinimaDisplayed = ''
    if (cubicMinima[0] !== null) {
        for (const point of cubicMinima) {
            cubicMinimaDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        cubicMinimaDisplayed = `$ None $`
    }
    let cubicInflectionsDisplayed = ''
    if (cubicInflections[0] !== null) {
        for (const point of cubicInflections) {
            cubicInflectionsDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        cubicInflectionsDisplayed = `$ None $`
    }

    const hyperbolicRoots = props.hyperbolicPoints.roots
    const hyperbolicMaxima = props.hyperbolicPoints.maxima
    const hyperbolicMinima = props.hyperbolicPoints.minima
    const hyperbolicInflections = props.hyperbolicPoints.inflections
    let hyperbolicRootsDisplayed = ''
    if (hyperbolicRoots[0] !== null) {
        for (const point of hyperbolicRoots) {
            hyperbolicRootsDisplayed += `$ (${point[0]}, 0.0) $`
        }
    } else {
        hyperbolicRootsDisplayed = `$ None $`
    }
    let hyperbolicMaximaDisplayed = ''
    if (hyperbolicMaxima[0] !== null) {
        for (const point of hyperbolicMaxima) {
            hyperbolicMaximaDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        hyperbolicMaximaDisplayed = `$ None $`
    }
    let hyperbolicMinimaDisplayed = ''
    if (hyperbolicMinima[0] !== null) {
        for (const point of hyperbolicMinima) {
            hyperbolicMinimaDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        hyperbolicMinimaDisplayed = `$ None $`
    }
    let hyperbolicInflectionsDisplayed = ''
    if (hyperbolicInflections[0] !== null) {
        for (const point of hyperbolicInflections) {
            hyperbolicInflectionsDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        hyperbolicInflectionsDisplayed = `$ None $`
    }
    
    const exponentialRoots = props.exponentialPoints.roots
    const exponentialMaxima = props.exponentialPoints.maxima
    const exponentialMinima = props.exponentialPoints.minima
    const exponentialInflections = props.exponentialPoints.inflections
    let exponentialRootsDisplayed = ''
    if (exponentialRoots[0] !== null) {
        for (const point of exponentialRoots) {
            exponentialRootsDisplayed += `$ (${point[0]}, 0.0) $`
        }
    } else {
        exponentialRootsDisplayed = `$ None $`
    }
    let exponentialMaximaDisplayed = ''
    if (exponentialMaxima[0] !== null) {
        for (const point of exponentialMaxima) {
            exponentialMaximaDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        exponentialMaximaDisplayed = `$ None $`
    }
    let exponentialMinimaDisplayed = ''
    if (exponentialMinima[0] !== null) {
        for (const point of exponentialMinima) {
            exponentialMinimaDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        exponentialMinimaDisplayed = `$ None $`
    }
    let exponentialInflectionsDisplayed = ''
    if (exponentialInflections[0] !== null) {
        for (const point of exponentialInflections) {
            exponentialInflectionsDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        exponentialInflectionsDisplayed = `$ None $`
    }
    
    const logarithmicRoots = props.logarithmicPoints.roots
    const logarithmicMaxima = props.logarithmicPoints.maxima
    const logarithmicMinima = props.logarithmicPoints.minima
    const logarithmicInflections = props.logarithmicPoints.inflections
    let logarithmicRootsDisplayed = ''
    if (logarithmicRoots[0] !== null) {
        for (const point of logarithmicRoots) {
            logarithmicRootsDisplayed += `$ (${point[0]}, 0.0) $`
        }
    } else {
        logarithmicRootsDisplayed = `$ None $`
    }
    let logarithmicMaximaDisplayed = ''
    if (logarithmicMaxima[0] !== null) {
        for (const point of logarithmicMaxima) {
            logarithmicMaximaDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        logarithmicMaximaDisplayed = `$ None $`
    }
    let logarithmicMinimaDisplayed = ''
    if (logarithmicMinima[0] !== null) {
        for (const point of logarithmicMinima) {
            logarithmicMinimaDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        logarithmicMinimaDisplayed = `$ None $`
    }
    let logarithmicInflectionsDisplayed = ''
    if (logarithmicInflections[0] !== null) {
        for (const point of logarithmicInflections) {
            logarithmicInflectionsDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        logarithmicInflectionsDisplayed = `$ None $`
    }
    
    const logisticRoots = props.logisticPoints.roots
    const logisticMaxima = props.logisticPoints.maxima
    const logisticMinima = props.logisticPoints.minima
    const logisticInflections = props.logisticPoints.inflections
    let logisticRootsDisplayed = ''
    if (logisticRoots[0] !== null) {
        for (const point of logisticRoots) {
            logisticRootsDisplayed += `$ (${point[0]}, 0.0) $`
        }
    } else {
        logisticRootsDisplayed = `$ None $`
    }
    let logisticMaximaDisplayed = ''
    if (logisticMaxima[0] !== null) {
        for (const point of logisticMaxima) {
            logisticMaximaDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        logisticMaximaDisplayed = `$ None $`
    }
    let logisticMinimaDisplayed = ''
    if (logisticMinima[0] !== null) {
        for (const point of logisticMinima) {
            logisticMinimaDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        logisticMinimaDisplayed = `$ None $`
    }
    let logisticInflectionsDisplayed = ''
    if (logisticInflections[0] !== null) {
        for (const point of logisticInflections) {
            logisticInflectionsDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        logisticInflectionsDisplayed = `$ None $`
    }
    
    const sinusoidalRoots = props.sinusoidalPoints.roots
    const sinusoidalMaxima = props.sinusoidalPoints.maxima
    const sinusoidalMinima = props.sinusoidalPoints.minima
    const sinusoidalInflections = props.sinusoidalPoints.inflections
    let sinusoidalRootsDisplayed = ''
    if (sinusoidalRoots[0] !== null) {
        for (const point of sinusoidalRoots) {
            sinusoidalRootsDisplayed += `$ (${point[0]}, 0.0) $`
        }
    } else {
        sinusoidalRootsDisplayed = `$ None $`
    }
    let sinusoidalMaximaDisplayed = ''
    if (sinusoidalMaxima[0] !== null) {
        for (const point of sinusoidalMaxima) {
            sinusoidalMaximaDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        sinusoidalMaximaDisplayed = `$ None $`
    }
    let sinusoidalMinimaDisplayed = ''
    if (sinusoidalMinima[0] !== null) {
        for (const point of sinusoidalMinima) {
            sinusoidalMinimaDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        sinusoidalMinimaDisplayed = `$ None $`
    }
    let sinusoidalInflectionsDisplayed = ''
    if (sinusoidalInflections[0] !== null) {
        for (const point of sinusoidalInflections) {
            sinusoidalInflectionsDisplayed += `$ (${point[0]}, ${point[1]}) $`
        }
    } else {
        sinusoidalInflectionsDisplayed = `$ None $`
    }

    let linearSecondConstant = props.linearConstants[1]
    let linearSecondSlot = ''
    if (linearSecondConstant > 0) {
        linearSecondSlot = `+ ${linearSecondConstant}`
    } else {
        linearSecondConstant *= -1
        linearSecondSlot = `- ${linearSecondConstant}`
    }
    
    let quadraticSecondConstant = props.quadraticConstants[1]
    let quadraticSecondSlot = ''
    if (quadraticSecondConstant > 0) {
        quadraticSecondSlot = `+ ${quadraticSecondConstant}`
    } else {
        quadraticSecondConstant *= -1
        quadraticSecondSlot = `- ${quadraticSecondConstant}`
    }
    let quadraticThirdConstant = props.quadraticConstants[2]
    let quadraticThirdSlot = ''
    if (quadraticThirdConstant > 0) {
        quadraticThirdSlot = `+ ${quadraticThirdConstant}`
    } else {
        quadraticThirdConstant *= -1
        quadraticThirdSlot = `- ${quadraticThirdConstant}`
    }
    
    let cubicSecondConstant = props.cubicConstants[1]
    let cubicSecondSlot = ''
    if (cubicSecondConstant > 0) {
        cubicSecondSlot = `+ ${cubicSecondConstant}`
    } else {
        cubicSecondConstant *= -1
        cubicSecondSlot = `- ${cubicSecondConstant}`
    }
    let cubicThirdConstant = props.cubicConstants[2]
    let cubicThirdSlot = ''
    if (cubicThirdConstant > 0) {
        cubicThirdSlot = `+ ${cubicThirdConstant}`
    } else {
        cubicThirdConstant *= -1
        cubicThirdSlot = `- ${cubicThirdConstant}`
    }
    let cubicFourthConstant = props.cubicConstants[3]
    let cubicFourthSlot = ''
    if (cubicFourthConstant > 0) {
        cubicFourthSlot = `+ ${cubicFourthConstant}`
    } else {
        cubicFourthConstant *= -1
        cubicFourthSlot = `- ${cubicFourthConstant}`
    }
    
    let hyperbolicSecondConstant = props.hyperbolicConstants[1]
    let hyperbolicSecondSlot = ''
    if (hyperbolicSecondConstant > 0) {
        hyperbolicSecondSlot = `+ ${hyperbolicSecondConstant}`
    } else {
        hyperbolicSecondConstant *= -1
        hyperbolicSecondSlot = `- ${hyperbolicSecondConstant}`
    }
    
    let logarithmicSecondConstant = props.logarithmicConstants[1]
    let logarithmicSecondSlot = ''
    if (logarithmicSecondConstant > 0) {
        logarithmicSecondSlot = `+ ${logarithmicSecondConstant}`
    } else {
        logarithmicSecondConstant *= -1
        logarithmicSecondSlot = `- ${logarithmicSecondConstant}`
    }
    
    let logisticSecondConstant = props.logisticConstants[1]
    let logisticSecondSlot = ''
    if (logisticSecondConstant > 0) {
        logisticSecondSlot = `-${logisticSecondConstant}`
    } else {
        logisticSecondConstant *= -1
        logisticSecondSlot = `${logisticSecondConstant}`
    }
    let logisticThirdConstant = props.logisticConstants[2]
    let logisticThirdSlot = ''
    if (logisticThirdConstant > 0) {
        logisticThirdSlot = `- ${logisticThirdConstant}`
    } else {
        logisticThirdConstant *= -1
        logisticThirdSlot = `+ ${logisticThirdConstant}`
    }
    
    let sinusoidalThirdConstant = props.sinusoidalConstants[2]
    let sinusoidalThirdSlot = ''
    if (sinusoidalThirdConstant > 0) {
        sinusoidalThirdSlot = `- ${sinusoidalThirdConstant}`
    } else {
        sinusoidalThirdConstant *= -1
        sinusoidalThirdSlot = `+ ${sinusoidalThirdConstant}`
    }
    let sinusoidalFourthConstant = props.sinusoidalConstants[3]
    let sinusoidalFourthSlot = ''
    if (sinusoidalFourthConstant > 0) {
        sinusoidalFourthSlot = `+ ${sinusoidalFourthConstant}`
    } else {
        sinusoidalFourthConstant *= -1
        sinusoidalFourthSlot = `- ${sinusoidalFourthConstant}`
    }
    
    const linearEquation = `$ y = ${props.linearConstants[0]} x ${linearSecondSlot} $`
    const quadraticEquation = `$ y = ${props.quadraticConstants[0]} x^2 ${quadraticSecondSlot} x ${quadraticThirdSlot} $`
    const cubicEquation = `$ y = ${props.cubicConstants[0]} x^3 ${cubicSecondSlot} x^2 ${cubicThirdSlot} x ${cubicFourthSlot} $`
    const hyperbolicEquation = `$ y = ${props.hyperbolicConstants[0]} \\cdot \\frac{1}{x} ${hyperbolicSecondSlot} $`
    const exponentialEquation = `$ y = ${props.exponentialConstants[0]} \\cdot ${props.exponentialConstants[1]}^x $`
    const logarithmicEquation = `$ y = ${props.logarithmicConstants[0]} \\cdot \\ln(x) ${logarithmicSecondSlot} $`
    const logisticEquation = `$ y = \\frac{${props.logisticConstants[0]}}{1 + \\text{e}^{${logisticSecondSlot} \\cdot (x ${logisticThirdSlot})}} $`
    const sinusoidalEquation = `$ y = ${props.sinusoidalConstants[0]} \\cdot \\sin(${props.sinusoidalConstants[1]} \\cdot (x ${sinusoidalThirdSlot})) ${sinusoidalFourthSlot} $`

    return (
        <div>
            <h1>{props.title}</h1>
            <p><em><strong>Independent Variable</strong></em> {props.independent}</p>
            <p><em><strong>Dependent Variable</strong></em> {props.dependent}</p>
            <p><em><strong>Raw Data</strong></em> {props.dataSet}</p>
            <p><em><strong>Best Fit</strong></em> {props.bestFit}</p>
            <h2>Linear Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{linearEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> {props.linearCorrelation.toFixed(precision)}</p>
            <p><em><strong>Key Points</strong></em><br />ROOTS: <Latex>{linearRootsDisplayed}</Latex><br />MAXIMA: <Latex>{linearMaximaDisplayed}</Latex><br />MINIMA: <Latex>{linearMinimaDisplayed}</Latex><br />INFLECTIONS: <Latex>{linearInflectionsDisplayed}</Latex></p>
            <h2>Quadratic Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{quadraticEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> {props.quadraticCorrelation.toFixed(precision)}</p>
            <p><em><strong>Key Points</strong></em><br />ROOTS: <Latex>{quadraticRootsDisplayed}</Latex><br />MAXIMA: <Latex>{quadraticMaximaDisplayed}</Latex><br />MINIMA: <Latex>{quadraticMinimaDisplayed}</Latex><br />INFLECTIONS: <Latex>{quadraticInflectionsDisplayed}</Latex></p>
            <h2>Cubic Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{cubicEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> {props.cubicCorrelation.toFixed(precision)}</p>
            <p><em><strong>Key Points</strong></em><br />ROOTS: <Latex>{cubicRootsDisplayed}</Latex><br />MAXIMA: <Latex>{cubicMaximaDisplayed}</Latex><br />MINIMA: <Latex>{cubicMinimaDisplayed}</Latex><br />INFLECTIONS: <Latex>{cubicInflectionsDisplayed}</Latex></p>
            <h2>Hyperbolic Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{hyperbolicEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> {props.hyperbolicCorrelation.toFixed(precision)}</p>
            <p><em><strong>Key Points</strong></em><br />ROOTS: <Latex>{hyperbolicRootsDisplayed}</Latex><br />MAXIMA: <Latex>{hyperbolicMaximaDisplayed}</Latex><br />MINIMA: <Latex>{hyperbolicMinimaDisplayed}</Latex><br />INFLECTIONS: <Latex>{hyperbolicInflectionsDisplayed}</Latex></p>
            <h2>Exponential Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{exponentialEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> {props.exponentialCorrelation.toFixed(precision)}</p>
            <p><em><strong>Key Points</strong></em><br />ROOTS: <Latex>{exponentialRootsDisplayed}</Latex><br />MAXIMA: <Latex>{exponentialMaximaDisplayed}</Latex><br />MINIMA: <Latex>{exponentialMinimaDisplayed}</Latex><br />INFLECTIONS: <Latex>{exponentialInflectionsDisplayed}</Latex></p>
            <h2>Logarithmic Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{logarithmicEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> {props.logarithmicCorrelation.toFixed(precision)}</p>
            <p><em><strong>Key Points</strong></em><br />ROOTS: <Latex>{logarithmicRootsDisplayed}</Latex><br />MAXIMA: <Latex>{logarithmicMaximaDisplayed}</Latex><br />MINIMA: <Latex>{logarithmicMinimaDisplayed}</Latex><br />INFLECTIONS: <Latex>{logarithmicInflectionsDisplayed}</Latex></p>
            <h2>Logistic Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{logisticEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> {props.logisticCorrelation.toFixed(precision)}</p>
            <p><em><strong>Key Points</strong></em><br />ROOTS: <Latex>{logisticRootsDisplayed}</Latex><br />MAXIMA: <Latex>{logisticMaximaDisplayed}</Latex><br />MINIMA: <Latex>{logisticMinimaDisplayed}</Latex><br />INFLECTIONS: <Latex>{logisticInflectionsDisplayed}</Latex></p>
            <h2>Sinusoidal Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{sinusoidalEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> {props.sinusoidalCorrelation.toFixed(precision)}</p>
            <p><em><strong>Key Points</strong></em><br />ROOTS: <Latex>{sinusoidalRootsDisplayed}</Latex><br />MAXIMA: <Latex>{sinusoidalMaximaDisplayed}</Latex><br />MINIMA: <Latex>{sinusoidalMinimaDisplayed}</Latex><br />INFLECTIONS: <Latex>{sinusoidalInflectionsDisplayed}</Latex></p>
        </div>
    )
}

// Export function
export default Results