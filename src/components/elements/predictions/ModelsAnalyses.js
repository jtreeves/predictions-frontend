import Latex from 'react-latex'
import FormatSlots from '../../middleware/FormatSlots'
import FormatPoints from '../../middleware/FormatPoints'

function ModelsAnalyses(props) {
    const linearSecondSlot = FormatSlots(props.linearConstants[1])
    const quadraticSecondSlot = FormatSlots(props.quadraticConstants[1])
    const quadraticThirdSlot = FormatSlots(props.quadraticConstants[2])
    const cubicSecondSlot = FormatSlots(props.cubicConstants[1])
    const cubicThirdSlot = FormatSlots(props.cubicConstants[2])
    const cubicFourthSlot = FormatSlots(props.cubicConstants[3])
    const hyperbolicSecondSlot = FormatSlots(props.hyperbolicConstants[1])
    const logarithmicSecondSlot = FormatSlots(props.logarithmicConstants[1])
    const logisticSecondSlot = FormatSlots(props.logisticConstants[1], 'negation')
    const logisticThirdSlot = FormatSlots(props.logisticConstants[2], 'subtraction')
    const sinusoidalThirdSlot = FormatSlots(props.sinusoidalConstants[2], 'subtraction')
    const sinusoidalFourthSlot = FormatSlots(props.sinusoidalConstants[3])
    
    const linearEquation = `$ y = ${props.linearConstants[0]} x ${linearSecondSlot} $`
    const quadraticEquation = `$ y = ${props.quadraticConstants[0]} x^2 ${quadraticSecondSlot} x ${quadraticThirdSlot} $`
    const cubicEquation = `$ y = ${props.cubicConstants[0]} x^3 ${cubicSecondSlot} x^2 ${cubicThirdSlot} x ${cubicFourthSlot} $`
    const hyperbolicEquation = `$ y = ${props.hyperbolicConstants[0]} \\cdot \\frac{1}{x} ${hyperbolicSecondSlot} $`
    const exponentialEquation = `$ y = ${props.exponentialConstants[0]} \\cdot ${props.exponentialConstants[1]}^x $`
    const logarithmicEquation = `$ y = ${props.logarithmicConstants[0]} \\cdot \\ln(x) ${logarithmicSecondSlot} $`
    const logisticEquation = `$ y = \\frac{${props.logisticConstants[0]}}{1 + \\text{e}^{${logisticSecondSlot} \\cdot (x ${logisticThirdSlot})}} $`
    const sinusoidalEquation = `$ y = ${props.sinusoidalConstants[0]} \\cdot \\sin(${props.sinusoidalConstants[1]} \\cdot (x ${sinusoidalThirdSlot})) ${sinusoidalFourthSlot} $`

    const linearCorrelation = '$' + props.linearCorrelation.toFixed(props.precision) + '$'
    const quadraticCorrelation = '$' + props.quadraticCorrelation.toFixed(props.precision) + '$'
    const cubicCorrelation = '$' + props.cubicCorrelation.toFixed(props.precision) + '$'
    const hyperbolicCorrelation = '$' + props.hyperbolicCorrelation.toFixed(props.precision) + '$'
    const exponentialCorrelation = '$' + props.exponentialCorrelation.toFixed(props.precision) + '$'
    const logarithmicCorrelation = '$' + props.logarithmicCorrelation.toFixed(props.precision) + '$'
    const logisticCorrelation = '$' + props.logisticCorrelation.toFixed(props.precision) + '$'
    const sinusoidalCorrelation = '$' + props.sinusoidalCorrelation.toFixed(props.precision) + '$'

    const linearRoots = FormatPoints(props.linearPoints.roots, true)
    const linearMaxima = FormatPoints(props.linearPoints.maxima)
    const linearMinima = FormatPoints(props.linearPoints.minima)
    const linearInflections = FormatPoints(props.linearPoints.inflections)

    const quadraticRoots = FormatPoints(props.quadraticPoints.roots, true)
    const quadraticMaxima = FormatPoints(props.quadraticPoints.maxima)
    const quadraticMinima = FormatPoints(props.quadraticPoints.minima)
    const quadraticInflections = FormatPoints(props.quadraticPoints.inflections)

    const cubicRoots = FormatPoints(props.cubicPoints.roots, true)
    const cubicMaxima = FormatPoints(props.cubicPoints.maxima)
    const cubicMinima = FormatPoints(props.cubicPoints.minima)
    const cubicInflections = FormatPoints(props.cubicPoints.inflections)

    const hyperbolicRoots = FormatPoints(props.hyperbolicPoints.roots, true)
    const hyperbolicMaxima = FormatPoints(props.hyperbolicPoints.maxima)
    const hyperbolicMinima = FormatPoints(props.hyperbolicPoints.minima)
    const hyperbolicInflections = FormatPoints(props.hyperbolicPoints.inflections)

    const exponentialRoots = FormatPoints(props.exponentialPoints.roots, true)
    const exponentialMaxima = FormatPoints(props.exponentialPoints.maxima)
    const exponentialMinima = FormatPoints(props.exponentialPoints.minima)
    const exponentialInflections = FormatPoints(props.exponentialPoints.inflections)

    const logarithmicRoots = FormatPoints(props.logarithmicPoints.roots, true)
    const logarithmicMaxima = FormatPoints(props.logarithmicPoints.maxima)
    const logarithmicMinima = FormatPoints(props.logarithmicPoints.minima)
    const logarithmicInflections = FormatPoints(props.logarithmicPoints.inflections)
    
    const logisticRoots = FormatPoints(props.logisticPoints.roots, true)
    const logisticMaxima = FormatPoints(props.logisticPoints.maxima)
    const logisticMinima = FormatPoints(props.logisticPoints.minima)
    const logisticInflections = FormatPoints(props.logisticPoints.inflections)
    
    const sinusoidalRoots = FormatPoints(props.sinusoidalPoints.roots, true)
    const sinusoidalMaxima = FormatPoints(props.sinusoidalPoints.maxima)
    const sinusoidalMinima = FormatPoints(props.sinusoidalPoints.minima)
    const sinusoidalInflections = FormatPoints(props.sinusoidalPoints.inflections)

    const allAnalyses = []
    
    if (props.displayLinear) {
        allAnalyses.push(<div>
            <h2>Linear Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{linearEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> <Latex>{linearCorrelation}</Latex></p>
            <p><em><strong>Key Points</strong></em>
                <br />ROOTS: <Latex>{linearRoots}</Latex>
                <br />MAXIMA: <Latex>{linearMaxima}</Latex>
                <br />MINIMA: <Latex>{linearMinima}</Latex>
                <br />INFLECTIONS: <Latex>{linearInflections}</Latex>
            </p>
        </div>)
    } 

    if (props.displayQuadratic) {
        allAnalyses.push(<div>
            <h2>Quadratic Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{quadraticEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> <Latex>{quadraticCorrelation}</Latex></p>
            <p><em><strong>Key Points</strong></em>
                <br />ROOTS: <Latex>{quadraticRoots}</Latex>
                <br />MAXIMA: <Latex>{quadraticMaxima}</Latex>
                <br />MINIMA: <Latex>{quadraticMinima}</Latex>
                <br />INFLECTIONS: <Latex>{quadraticInflections}</Latex>
            </p>
        </div>)
    } 

    if (props.displayCubic) {
        allAnalyses.push(<div>
            <h2>Cubic Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{cubicEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> <Latex>{cubicCorrelation}</Latex></p>
            <p><em><strong>Key Points</strong></em>
                <br />ROOTS: <Latex>{cubicRoots}</Latex>
                <br />MAXIMA: <Latex>{cubicMaxima}</Latex>
                <br />MINIMA: <Latex>{cubicMinima}</Latex>
                <br />INFLECTIONS: <Latex>{cubicInflections}</Latex>
            </p>
        </div>)
    } 

    if (props.displayHyperbolic) {
        allAnalyses.push(<div>
            <h2>Hyperbolic Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{hyperbolicEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> <Latex>{hyperbolicCorrelation}</Latex></p>
            <p><em><strong>Key Points</strong></em>
                <br />ROOTS: <Latex>{hyperbolicRoots}</Latex>
                <br />MAXIMA: <Latex>{hyperbolicMaxima}</Latex>
                <br />MINIMA: <Latex>{hyperbolicMinima}</Latex>
                <br />INFLECTIONS: <Latex>{hyperbolicInflections}</Latex>
            </p>
        </div>)
    } 

    if (props.displayExponential) {
        allAnalyses.push(<div>
            <h2>Exponential Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{exponentialEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> <Latex>{exponentialCorrelation}</Latex></p>
            <p><em><strong>Key Points</strong></em>
                <br />ROOTS: <Latex>{exponentialRoots}</Latex>
                <br />MAXIMA: <Latex>{exponentialMaxima}</Latex>
                <br />MINIMA: <Latex>{exponentialMinima}</Latex>
                <br />INFLECTIONS: <Latex>{exponentialInflections}</Latex>
            </p>
        </div>)
    } 

    if (props.displayLogarithmic) {
        allAnalyses.push(<div>
            <h2>Logarithmic Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{logarithmicEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> <Latex>{logarithmicCorrelation}</Latex></p>
            <p><em><strong>Key Points</strong></em>
                <br />ROOTS: <Latex>{logarithmicRoots}</Latex>
                <br />MAXIMA: <Latex>{logarithmicMaxima}</Latex>
                <br />MINIMA: <Latex>{logarithmicMinima}</Latex>
                <br />INFLECTIONS: <Latex>{logarithmicInflections}</Latex>
            </p>
        </div>)
    } 

    if (props.displayLogistic) {
        allAnalyses.push(<div>
            <h2>Logistic Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{logisticEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> <Latex>{logisticCorrelation}</Latex></p>
            <p><em><strong>Key Points</strong></em>
                <br />ROOTS: <Latex>{logisticRoots}</Latex>
                <br />MAXIMA: <Latex>{logisticMaxima}</Latex>
                <br />MINIMA: <Latex>{logisticMinima}</Latex>
                <br />INFLECTIONS: <Latex>{logisticInflections}</Latex>
            </p>
        </div>)
    } 

    if (props.displaySinusoidal) {
        allAnalyses.push(<div>
            <h2>Sinusoidal Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{sinusoidalEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> <Latex>{sinusoidalCorrelation}</Latex></p>
            <p><em><strong>Key Points</strong></em>
                <br />ROOTS: <Latex>{sinusoidalRoots}</Latex>
                <br />MAXIMA: <Latex>{sinusoidalMaxima}</Latex>
                <br />MINIMA: <Latex>{sinusoidalMinima}</Latex>
                <br />INFLECTIONS: <Latex>{sinusoidalInflections}</Latex>
            </p>
        </div>)
    }

    return (
        <div>
            {allAnalyses}
        </div>
    )
}

export default ModelsAnalyses