import FormatSlots from '../../utilities/predictions/FormatSlots'
import FormatPoints from '../../utilities/predictions/FormatPoints'
import FormattedAnalyses from './FormattedAnalyses'

function ModelsAnalyses(props) {
    const linearFirstSlot = props.linearConstants[0].toFixed(props.precision)
    const linearSecondSlot = FormatSlots(props.linearConstants[1].toFixed(props.precision))
    const quadraticFirstSlot = props.quadraticConstants[0].toFixed(props.precision)
    const quadraticSecondSlot = FormatSlots(props.quadraticConstants[1].toFixed(props.precision))
    const quadraticThirdSlot = FormatSlots(props.quadraticConstants[2].toFixed(props.precision))
    const cubicFirstSlot = props.cubicConstants[0].toFixed(props.precision)
    const cubicSecondSlot = FormatSlots(props.cubicConstants[1].toFixed(props.precision))
    const cubicThirdSlot = FormatSlots(props.cubicConstants[2].toFixed(props.precision))
    const cubicFourthSlot = FormatSlots(props.cubicConstants[3].toFixed(props.precision))
    const hyperbolicFirstSlot = props.hyperbolicConstants[0].toFixed(props.precision)
    const hyperbolicSecondSlot = FormatSlots(props.hyperbolicConstants[1].toFixed(props.precision))
    const exponentialFirstSlot = props.exponentialConstants[0].toFixed(props.precision)
    const exponentialSecondSlot = props.exponentialConstants[1].toFixed(props.precision)
    const logarithmicFirstSlot = props.logarithmicConstants[0].toFixed(props.precision)
    const logarithmicSecondSlot = FormatSlots(props.logarithmicConstants[1].toFixed(props.precision))
    const logisticFirstSlot = props.logisticConstants[0].toFixed(props.precision)
    const logisticSecondSlot = FormatSlots(props.logisticConstants[1].toFixed(props.precision), 'negation')
    const logisticThirdSlot = FormatSlots(props.logisticConstants[2].toFixed(props.precision), 'subtraction')
    const sinusoidalFirstSlot = props.sinusoidalConstants[0].toFixed(props.precision)
    const sinusoidalSecondSlot = props.sinusoidalConstants[1].toFixed(props.precision)
    const sinusoidalThirdSlot = FormatSlots(props.sinusoidalConstants[2].toFixed(props.precision), 'subtraction')
    const sinusoidalFourthSlot = FormatSlots(props.sinusoidalConstants[3].toFixed(props.precision))
    
    const linearEquation = `$ y = ${linearFirstSlot} x ${linearSecondSlot} $`
    const quadraticEquation = `$ y = ${quadraticFirstSlot} x^2 ${quadraticSecondSlot} x ${quadraticThirdSlot} $`
    const cubicEquation = `$ y = ${cubicFirstSlot} x^3 ${cubicSecondSlot} x^2 ${cubicThirdSlot} x ${cubicFourthSlot} $`
    const hyperbolicEquation = `$ y = ${hyperbolicFirstSlot} \\cdot \\frac{1}{x} ${hyperbolicSecondSlot} $`
    const exponentialEquation = `$ y = ${exponentialFirstSlot} \\cdot ${exponentialSecondSlot}^x $`
    const logarithmicEquation = `$ y = ${logarithmicFirstSlot} \\cdot \\ln(x) ${logarithmicSecondSlot} $`
    const logisticEquation = `$ y = \\frac{${logisticFirstSlot}}{1 + \\text{e}^{${logisticSecondSlot} \\cdot (x ${logisticThirdSlot})}} $`
    const sinusoidalEquation = `$ y = ${sinusoidalFirstSlot} \\cdot \\sin(${sinusoidalSecondSlot} \\cdot (x ${sinusoidalThirdSlot})) ${sinusoidalFourthSlot} $`

    const linearCorrelation = '$' + props.linearCorrelation.toFixed(props.precision) + '$'
    const quadraticCorrelation = '$' + props.quadraticCorrelation.toFixed(props.precision) + '$'
    const cubicCorrelation = '$' + props.cubicCorrelation.toFixed(props.precision) + '$'
    const hyperbolicCorrelation = '$' + props.hyperbolicCorrelation.toFixed(props.precision) + '$'
    const exponentialCorrelation = '$' + props.exponentialCorrelation.toFixed(props.precision) + '$'
    const logarithmicCorrelation = '$' + props.logarithmicCorrelation.toFixed(props.precision) + '$'
    const logisticCorrelation = '$' + props.logisticCorrelation.toFixed(props.precision) + '$'
    const sinusoidalCorrelation = '$' + props.sinusoidalCorrelation.toFixed(props.precision) + '$'

    const linearRoots = FormatPoints(props.linearPoints.roots, props.precision)
    const linearMaxima = FormatPoints(props.linearPoints.maxima, props.precision)
    const linearMinima = FormatPoints(props.linearPoints.minima, props.precision)
    const linearInflections = FormatPoints(props.linearPoints.inflections, props.precision)

    const quadraticRoots = FormatPoints(props.quadraticPoints.roots, props.precision)
    const quadraticMaxima = FormatPoints(props.quadraticPoints.maxima, props.precision)
    const quadraticMinima = FormatPoints(props.quadraticPoints.minima, props.precision)
    const quadraticInflections = FormatPoints(props.quadraticPoints.inflections, props.precision)

    const cubicRoots = FormatPoints(props.cubicPoints.roots, props.precision)
    const cubicMaxima = FormatPoints(props.cubicPoints.maxima, props.precision)
    const cubicMinima = FormatPoints(props.cubicPoints.minima, props.precision)
    const cubicInflections = FormatPoints(props.cubicPoints.inflections, props.precision)

    const hyperbolicRoots = FormatPoints(props.hyperbolicPoints.roots, props.precision)
    const hyperbolicMaxima = FormatPoints(props.hyperbolicPoints.maxima, props.precision)
    const hyperbolicMinima = FormatPoints(props.hyperbolicPoints.minima, props.precision)
    const hyperbolicInflections = FormatPoints(props.hyperbolicPoints.inflections, props.precision)

    const exponentialRoots = FormatPoints(props.exponentialPoints.roots, props.precision)
    const exponentialMaxima = FormatPoints(props.exponentialPoints.maxima, props.precision)
    const exponentialMinima = FormatPoints(props.exponentialPoints.minima, props.precision)
    const exponentialInflections = FormatPoints(props.exponentialPoints.inflections, props.precision)

    const logarithmicRoots = FormatPoints(props.logarithmicPoints.roots, props.precision)
    const logarithmicMaxima = FormatPoints(props.logarithmicPoints.maxima, props.precision)
    const logarithmicMinima = FormatPoints(props.logarithmicPoints.minima, props.precision)
    const logarithmicInflections = FormatPoints(props.logarithmicPoints.inflections, props.precision)
    
    const logisticRoots = FormatPoints(props.logisticPoints.roots, props.precision)
    const logisticMaxima = FormatPoints(props.logisticPoints.maxima, props.precision)
    const logisticMinima = FormatPoints(props.logisticPoints.minima, props.precision)
    const logisticInflections = FormatPoints(props.logisticPoints.inflections, props.precision)
    
    const sinusoidalRoots = FormatPoints(props.sinusoidalPoints.roots, props.precision)
    const sinusoidalMaxima = FormatPoints(props.sinusoidalPoints.maxima, props.precision)
    const sinusoidalMinima = FormatPoints(props.sinusoidalPoints.minima, props.precision)
    const sinusoidalInflections = FormatPoints(props.sinusoidalPoints.inflections, props.precision)

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
        <section className="all-models">
            {allAnalyses}
        </section>
    )
}

export default ModelsAnalyses