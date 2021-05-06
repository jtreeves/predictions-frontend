import FormatSlots from '../../utilities/predictions/FormatSlots'
import FormatPoints from '../../utilities/predictions/FormatPoints'
import FormattedAnalyses from './FormattedAnalyses'

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
        allAnalyses.push(<FormattedAnalyses 
            type="Linear"
            equation={linearEquation}
            correlation={linearCorrelation}
            roots={linearRoots}
            maxima={linearMaxima}
            minima={linearMinima}
            inflections={linearInflections}
        />)
    } 

    if (props.displayQuadratic) {
        allAnalyses.push(<FormattedAnalyses 
            type="Quadratic"
            equation={quadraticEquation}
            correlation={quadraticCorrelation}
            roots={quadraticRoots}
            maxima={quadraticMaxima}
            minima={quadraticMinima}
            inflections={quadraticInflections}
        />)
    } 

    if (props.displayCubic) {
        allAnalyses.push(<FormattedAnalyses 
            type="Cubic"
            equation={cubicEquation}
            correlation={cubicCorrelation}
            roots={cubicRoots}
            maxima={cubicMaxima}
            minima={cubicMinima}
            inflections={cubicInflections}
        />)
    } 

    if (props.displayHyperbolic) {
        allAnalyses.push(<FormattedAnalyses 
            type="Hyperbolic"
            equation={hyperbolicEquation}
            correlation={hyperbolicCorrelation}
            roots={hyperbolicRoots}
            maxima={hyperbolicMaxima}
            minima={hyperbolicMinima}
            inflections={hyperbolicInflections}
        />)
    } 

    if (props.displayExponential) {
        allAnalyses.push(<FormattedAnalyses 
            type="Exponential"
            equation={exponentialEquation}
            correlation={exponentialCorrelation}
            roots={exponentialRoots}
            maxima={exponentialMaxima}
            minima={exponentialMinima}
            inflections={exponentialInflections}
        />)
    } 

    if (props.displayLogarithmic) {
        allAnalyses.push(<FormattedAnalyses 
            type="Logarithmic"
            equation={logarithmicEquation}
            correlation={logarithmicCorrelation}
            roots={logarithmicRoots}
            maxima={logarithmicMaxima}
            minima={logarithmicMinima}
            inflections={logarithmicInflections}
        />)
    } 

    if (props.displayLogistic) {
        allAnalyses.push(<FormattedAnalyses 
            type="Logistic"
            equation={logisticEquation}
            correlation={logisticCorrelation}
            roots={logisticRoots}
            maxima={logisticMaxima}
            minima={logisticMinima}
            inflections={logisticInflections}
        />)
    } 

    if (props.displaySinusoidal) {
        allAnalyses.push(<FormattedAnalyses 
            type="Sinusoidal"
            equation={sinusoidalEquation}
            correlation={sinusoidalCorrelation}
            roots={sinusoidalRoots}
            maxima={sinusoidalMaxima}
            minima={sinusoidalMinima}
            inflections={sinusoidalInflections}
        />)
    }

    return (
        <section>
            {allAnalyses}
        </section>
    )
}

export default ModelsAnalyses