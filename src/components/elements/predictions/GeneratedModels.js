import { useState } from 'react'
import Latex from 'react-latex'
import GeneratePoints from '../../middleware/GeneratePoints'
import HorizontalAxis from '../../middleware/HorizontalAxis'
import VerticalAxis from '../../middleware/VerticalAxis'
import GraphOutput from '../../middleware/GraphOutput'
import FormatSlots from '../../middleware/FormatSlots'
import FormatPoints from '../../middleware/FormatPoints'
import Evaluations from '../../middleware/Evaluations'

// Create function
function GeneratedModels(props) {
    const precision = parseInt(props.precision)
    const points = JSON.parse(props.dataSet)

    const originalPoints = []
    for (const point of points) {
        originalPoints.push({ x: point[0], y: point[1] })
    }

    const [displayLinear, setDisplayLinear] = useState(true)
    const [displayQuadratic, setDisplayQuadratic] = useState(true)
    const [displayCubic, setDisplayCubic] = useState(true)
    const [displayHyperbolic, setDisplayHyperbolic] = useState(true)
    const [displayExponential, setDisplayExponential] = useState(true)
    const [displayLogarithmic, setDisplayLogarithmic] = useState(true)
    const [displayLogistic, setDisplayLogistic] = useState(true)
    const [displaySinusoidal, setDisplaySinusoidal] = useState(true)
    const [displayOriginal, setDisplayOriginal] = useState(true)
    
    const [linearCoordinates, setLinearCoordinates] = useState(GeneratePoints('linear', props.linearConstants, originalPoints))
    const [quadraticCoordinates, setQuadraticCoordinates] = useState(GeneratePoints('quadratic', props.quadraticConstants, originalPoints))
    const [cubicCoordinates, setCubicCoordinates] = useState(GeneratePoints('cubic', props.cubicConstants, originalPoints))
    const [hyperbolicCoordinates, setHyperbolicCoordinates] = useState(GeneratePoints('hyperbolic', props.hyperbolicConstants, originalPoints))
    const [exponentialCoordinates, setExponentialCoordinates] = useState(GeneratePoints('exponential', props.exponentialConstants, originalPoints))
    const [logarithmicCoordinates, setLogarithmicCoordinates] = useState(GeneratePoints('logarithmic', props.logarithmicConstants, originalPoints))
    const [logisticCoordinates, setLogisticCoordinates] = useState(GeneratePoints('logistic', props.logisticConstants, originalPoints))
    const [sinusoidalCoordinates, setSinusoidalCoordinates] = useState(GeneratePoints('sinusoidal', props.sinusoidalConstants, originalPoints))
    const [originalCoordinates, setOriginalCoordinates] = useState(originalPoints)
    
    const handleDisplayLinear = (e) => {
        e.preventDefault()
        if (displayLinear) {
            setDisplayLinear(false)
            setLinearCoordinates('')
        } else {
            setDisplayLinear(true)
            setLinearCoordinates(GeneratePoints('linear', props.linearConstants, originalPoints))
        }
    }
    
    const handleDisplayQuadratic = (e) => {
        e.preventDefault()
        if (displayQuadratic) {
            setDisplayQuadratic(false)
            setQuadraticCoordinates('')
        } else {
            setDisplayQuadratic(true)
            setQuadraticCoordinates(GeneratePoints('quadratic', props.quadraticConstants, originalPoints))
        }
    }
    
    const handleDisplayCubic = (e) => {
        e.preventDefault()
        if (displayCubic) {
            setDisplayCubic(false)
            setCubicCoordinates('')
        } else {
            setDisplayCubic(true)
            setCubicCoordinates(GeneratePoints('cubic', props.cubicConstants, originalPoints))
        }
    }
    
    const handleDisplayHyperbolic = (e) => {
        e.preventDefault()
        if (displayHyperbolic) {
            setDisplayHyperbolic(false)
            setHyperbolicCoordinates('')
        } else {
            setDisplayHyperbolic(true)
            setHyperbolicCoordinates(GeneratePoints('hyperbolic', props.hyperbolicConstants, originalPoints))
        }
    }
    
    const handleDisplayExponential = (e) => {
        e.preventDefault()
        if (displayExponential) {
            setDisplayExponential(false)
            setExponentialCoordinates('')
        } else {
            setDisplayExponential(true)
            setExponentialCoordinates(GeneratePoints('exponential', props.exponentialConstants, originalPoints))
        }
    }
    
    const handleDisplayLogarithmic = (e) => {
        e.preventDefault()
        if (displayLogarithmic) {
            setDisplayLogarithmic(false)
            setLogarithmicCoordinates('')
        } else {
            setDisplayLogarithmic(true)
            setLogarithmicCoordinates(GeneratePoints('logarithmic', props.logarithmicConstants, originalPoints))
        }
    }
    
    const handleDisplayLogistic = (e) => {
        e.preventDefault()
        if (displayLogistic) {
            setDisplayLogistic(false)
            setLogisticCoordinates('')
        } else {
            setDisplayLogistic(true)
            setLogisticCoordinates(GeneratePoints('logistic', props.logisticConstants, originalPoints))
        }
    }
    
    const handleDisplaySinusoidal = (e) => {
        e.preventDefault()
        if (displaySinusoidal) {
            setDisplaySinusoidal(false)
            setSinusoidalCoordinates('')
        } else {
            setDisplaySinusoidal(true)
            setSinusoidalCoordinates(GeneratePoints('sinusoidal', props.sinusoidalConstants, originalPoints))
        }
    }
    
    const handleDisplayOriginal = (e) => {
        e.preventDefault()
        if (displayOriginal) {
            setDisplayOriginal(false)
            setOriginalCoordinates('')
        } else {
            setDisplayOriginal(true)
            setOriginalCoordinates(originalPoints)
        }
    }

    const displayButtons = []
    
    if (displayLinear) {
        displayButtons.push(<button onClick={handleDisplayLinear}>Hide Linear Graph</button>)
    } else {
        displayButtons.push(<button onClick={handleDisplayLinear}>Show Linear Graph</button>)
    }

    if (displayQuadratic) {
        displayButtons.push(<button onClick={handleDisplayQuadratic}>Hide Quadratic Graph</button>)
    } else {
        displayButtons.push(<button onClick={handleDisplayQuadratic}>Show Quadratic Graph</button>)
    }

    if (displayCubic) {
        displayButtons.push(<button onClick={handleDisplayCubic}>Hide Cubic Graph</button>)
    } else {
        displayButtons.push(<button onClick={handleDisplayCubic}>Show Cubic Graph</button>)
    }

    if (displayHyperbolic) {
        displayButtons.push(<button onClick={handleDisplayHyperbolic}>Hide Hyperbolic Graph</button>)
    } else {
        displayButtons.push(<button onClick={handleDisplayHyperbolic}>Show Hyperbolic Graph</button>)
    }

    if (displayExponential) {
        displayButtons.push(<button onClick={handleDisplayExponential}>Hide Exponential Graph</button>)
    } else {
        displayButtons.push(<button onClick={handleDisplayExponential}>Show Exponential Graph</button>)
    }

    if (displayLogarithmic) {
        displayButtons.push(<button onClick={handleDisplayLogarithmic}>Hide Logarithmic Graph</button>)
    } else {
        displayButtons.push(<button onClick={handleDisplayLogarithmic}>Show Logarithmic Graph</button>)
    }

    if (displayLogistic) {
        displayButtons.push(<button onClick={handleDisplayLogistic}>Hide Logistic Graph</button>)
    } else {
        displayButtons.push(<button onClick={handleDisplayLogistic}>Show Logistic Graph</button>)
    }

    if (displaySinusoidal) {
        displayButtons.push(<button onClick={handleDisplaySinusoidal}>Hide Sinusoidal Graph</button>)
    } else {
        displayButtons.push(<button onClick={handleDisplaySinusoidal}>Show Sinusoidal Graph</button>)
    }

    if (displayOriginal) {
        displayButtons.push(<button onClick={handleDisplayOriginal}>Hide Original Points</button>)
    } else {
        displayButtons.push(<button onClick={handleDisplayOriginal}>Show Original Points</button>)
    }

    const allCoordinates = [originalCoordinates, linearCoordinates, quadraticCoordinates, cubicCoordinates, hyperbolicCoordinates, exponentialCoordinates, logarithmicCoordinates, logisticCoordinates, sinusoidalCoordinates]

    const xaxis = HorizontalAxis(originalPoints)
    const yaxis = VerticalAxis(allCoordinates)
    const xMinimum = xaxis.minimum
    const xMaximum = xaxis.maximum
    const yMinimum = yaxis.minimum
    const yMaximum = yaxis.maximum
    const xRange = xMaximum - xMinimum
    const futureInput = Math.round(xMaximum + xRange / 2)

    const linearEvaluation = Evaluations('linear', props.linearConstants, futureInput)
    const quadraticEvaluation = Evaluations('quadratic', props.quadraticConstants, futureInput)
    const cubicEvaluation = Evaluations('cubic', props.cubicConstants, futureInput)
    const hyperbolicEvaluation = Evaluations('hyperbolic', props.hyperbolicConstants, futureInput)
    const exponentialEvaluation = Evaluations('exponential', props.exponentialConstants, futureInput)
    const logarithmicEvaluation = Evaluations('logarithmic', props.logarithmicConstants, futureInput)
    const logisticEvaluation = Evaluations('logistic', props.logisticConstants, futureInput)
    const sinusoidalEvaluation = Evaluations('sinusoidal', props.sinusoidalConstants, futureInput)

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

    let linearSecondSlot = FormatSlots(props.linearConstants[1])
    let quadraticSecondSlot = FormatSlots(props.quadraticConstants[1])
    let quadraticThirdSlot = FormatSlots(props.quadraticConstants[2])
    let cubicSecondSlot = FormatSlots(props.cubicConstants[1])
    let cubicThirdSlot = FormatSlots(props.cubicConstants[2])
    let cubicFourthSlot = FormatSlots(props.cubicConstants[3])
    let hyperbolicSecondSlot = FormatSlots(props.hyperbolicConstants[1])
    let logarithmicSecondSlot = FormatSlots(props.logarithmicConstants[1])
    let logisticSecondSlot = FormatSlots(props.logisticConstants[1], 'negation')
    let logisticThirdSlot = FormatSlots(props.logisticConstants[2], 'subtraction')
    let sinusoidalThirdSlot = FormatSlots(props.sinusoidalConstants[2], 'subtraction')
    let sinusoidalFourthSlot = FormatSlots(props.sinusoidalConstants[3])
    
    const linearEquation = `$ y = ${props.linearConstants[0]} x ${linearSecondSlot} $`
    const quadraticEquation = `$ y = ${props.quadraticConstants[0]} x^2 ${quadraticSecondSlot} x ${quadraticThirdSlot} $`
    const cubicEquation = `$ y = ${props.cubicConstants[0]} x^3 ${cubicSecondSlot} x^2 ${cubicThirdSlot} x ${cubicFourthSlot} $`
    const hyperbolicEquation = `$ y = ${props.hyperbolicConstants[0]} \\cdot \\frac{1}{x} ${hyperbolicSecondSlot} $`
    const exponentialEquation = `$ y = ${props.exponentialConstants[0]} \\cdot ${props.exponentialConstants[1]}^x $`
    const logarithmicEquation = `$ y = ${props.logarithmicConstants[0]} \\cdot \\ln(x) ${logarithmicSecondSlot} $`
    const logisticEquation = `$ y = \\frac{${props.logisticConstants[0]}}{1 + \\text{e}^{${logisticSecondSlot} \\cdot (x ${logisticThirdSlot})}} $`
    const sinusoidalEquation = `$ y = ${props.sinusoidalConstants[0]} \\cdot \\sin(${props.sinusoidalConstants[1]} \\cdot (x ${sinusoidalThirdSlot})) ${sinusoidalFourthSlot} $`

    const linearCorrelation = '$' + props.linearCorrelation.toFixed(precision) + '$'
    const quadraticCorrelation = '$' + props.quadraticCorrelation.toFixed(precision) + '$'
    const cubicCorrelation = '$' + props.cubicCorrelation.toFixed(precision) + '$'
    const hyperbolicCorrelation = '$' + props.hyperbolicCorrelation.toFixed(precision) + '$'
    const exponentialCorrelation = '$' + props.exponentialCorrelation.toFixed(precision) + '$'
    const logarithmicCorrelation = '$' + props.logarithmicCorrelation.toFixed(precision) + '$'
    const logisticCorrelation = '$' + props.logisticCorrelation.toFixed(precision) + '$'
    const sinusoidalCorrelation = '$' + props.sinusoidalCorrelation.toFixed(precision) + '$'

    return (
        <div>
            <GraphOutput 
                title={props.title}
                independent={props.independent}
                dependent={props.dependent}
                xMinimum={xMinimum}
                xMaximum={xMaximum}
                yMinimum={yMinimum}
                yMaximum={yMaximum}
                originalPoints={originalCoordinates}
                linearPoints={linearCoordinates}
                quadraticPoints={quadraticCoordinates}
                cubicPoints={cubicCoordinates}
                hyperbolicPoints={hyperbolicCoordinates}
                exponentialPoints={exponentialCoordinates}
                logarithmicPoints={logarithmicCoordinates}
                logisticPoints={logisticCoordinates}
                sinusoidalPoints={sinusoidalCoordinates}
            />
            {displayButtons}

            <p><em><strong>Best Fit</strong></em> {props.bestFit}</p>

            <h2>Predicted Future Values at an Input of {futureInput}</h2>
            <p><em><strong>Linear Prediction</strong></em> {linearEvaluation}</p>
            <p><em><strong>Quadratic Prediction</strong></em> {quadraticEvaluation}</p>
            <p><em><strong>Cubic Prediction</strong></em> {cubicEvaluation}</p>
            <p><em><strong>Hyperbolic Prediction</strong></em> {hyperbolicEvaluation}</p>
            <p><em><strong>Exponential Prediction</strong></em> {exponentialEvaluation}</p>
            <p><em><strong>Logarithmic Prediction</strong></em> {logarithmicEvaluation}</p>
            <p><em><strong>Logistic Prediction</strong></em> {logisticEvaluation}</p>
            <p><em><strong>Sinusoidal Prediction</strong></em> {sinusoidalEvaluation}</p>

            <h2>Linear Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{linearEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> <Latex>{linearCorrelation}</Latex></p>
            <p><em><strong>Key Points</strong></em>
                <br />ROOTS: <Latex>{linearRoots}</Latex>
                <br />MAXIMA: <Latex>{linearMaxima}</Latex>
                <br />MINIMA: <Latex>{linearMinima}</Latex>
                <br />INFLECTIONS: <Latex>{linearInflections}</Latex>
            </p>

            <h2>Quadratic Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{quadraticEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> <Latex>{quadraticCorrelation}</Latex></p>
            <p><em><strong>Key Points</strong></em>
                <br />ROOTS: <Latex>{quadraticRoots}</Latex>
                <br />MAXIMA: <Latex>{quadraticMaxima}</Latex>
                <br />MINIMA: <Latex>{quadraticMinima}</Latex>
                <br />INFLECTIONS: <Latex>{quadraticInflections}</Latex>
            </p>

            <h2>Cubic Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{cubicEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> <Latex>{cubicCorrelation}</Latex></p>
            <p><em><strong>Key Points</strong></em>
                <br />ROOTS: <Latex>{cubicRoots}</Latex>
                <br />MAXIMA: <Latex>{cubicMaxima}</Latex>
                <br />MINIMA: <Latex>{cubicMinima}</Latex>
                <br />INFLECTIONS: <Latex>{cubicInflections}</Latex>
            </p>

            <h2>Hyperbolic Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{hyperbolicEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> <Latex>{hyperbolicCorrelation}</Latex></p>
            <p><em><strong>Key Points</strong></em>
                <br />ROOTS: <Latex>{hyperbolicRoots}</Latex>
                <br />MAXIMA: <Latex>{hyperbolicMaxima}</Latex>
                <br />MINIMA: <Latex>{hyperbolicMinima}</Latex>
                <br />INFLECTIONS: <Latex>{hyperbolicInflections}</Latex>
            </p>

            <h2>Exponential Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{exponentialEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> <Latex>{exponentialCorrelation}</Latex></p>
            <p><em><strong>Key Points</strong></em>
                <br />ROOTS: <Latex>{exponentialRoots}</Latex>
                <br />MAXIMA: <Latex>{exponentialMaxima}</Latex>
                <br />MINIMA: <Latex>{exponentialMinima}</Latex>
                <br />INFLECTIONS: <Latex>{exponentialInflections}</Latex>
            </p>

            <h2>Logarithmic Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{logarithmicEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> <Latex>{logarithmicCorrelation}</Latex></p>
            <p><em><strong>Key Points</strong></em>
                <br />ROOTS: <Latex>{logarithmicRoots}</Latex>
                <br />MAXIMA: <Latex>{logarithmicMaxima}</Latex>
                <br />MINIMA: <Latex>{logarithmicMinima}</Latex>
                <br />INFLECTIONS: <Latex>{logarithmicInflections}</Latex>
            </p>

            <h2>Logistic Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{logisticEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> <Latex>{logisticCorrelation}</Latex></p>
            <p><em><strong>Key Points</strong></em>
                <br />ROOTS: <Latex>{logisticRoots}</Latex>
                <br />MAXIMA: <Latex>{logisticMaxima}</Latex>
                <br />MINIMA: <Latex>{logisticMinima}</Latex>
                <br />INFLECTIONS: <Latex>{logisticInflections}</Latex>
            </p>

            <h2>Sinusoidal Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{sinusoidalEquation}</Latex></p>
            <p><em><strong>Correlation</strong></em> <Latex>{sinusoidalCorrelation}</Latex></p>
            <p><em><strong>Key Points</strong></em>
                <br />ROOTS: <Latex>{sinusoidalRoots}</Latex>
                <br />MAXIMA: <Latex>{sinusoidalMaxima}</Latex>
                <br />MINIMA: <Latex>{sinusoidalMinima}</Latex>
                <br />INFLECTIONS: <Latex>{sinusoidalInflections}</Latex>
            </p>
        </div>
    )
}

// Export function
export default GeneratedModels