import { useState } from 'react'
import Evaluations from '../../middleware/Evaluations'

function FutureEvaluations(props) {
    const [futureInput, setFutureInput] = useState(Math.round(props.xMaximum + (props.xMaximum - props.xMinimum) / 2))
    const [linearEvaluation, setLinearEvaluation] = useState(Evaluations('linear', props.linearConstants, props.precision, futureInput))
    const [quadraticEvaluation, setQuadraticEvaluation] = useState(Evaluations('quadratic', props.quadraticConstants, props.precision, futureInput))
    const [cubicEvaluation, setCubicEvaluation] = useState(Evaluations('cubic', props.cubicConstants, props.precision, futureInput))
    const [hyperbolicEvaluation, setHyperbolicEvaluation] = useState(Evaluations('hyperbolic', props.hyperbolicConstants, props.precision, futureInput))
    const [exponentialEvaluation, setExponentialEvaluation] = useState(Evaluations('exponential', props.exponentialConstants, props.precision, futureInput))
    const [logarithmicEvaluation, setLogarithmicEvaluation] = useState(Evaluations('logarithmic', props.logarithmicConstants, props.precision, futureInput))
    const [logisticEvaluation, setLogisticEvaluation] = useState(Evaluations('logistic', props.logisticConstants, props.precision, futureInput))
    const [sinusoidalEvaluation, setSinusoidalEvaluation] = useState(Evaluations('sinusoidal', props.sinusoidalConstants, props.precision, futureInput))

    const handleFutureInput = (e) => {
        setFutureInput(Number(e.target.value))
    }

    const handleFutureValue = (e) => {
        e.preventDefault()
        setLinearEvaluation(Evaluations('linear', props.linearConstants, props.precision, futureInput))
        setQuadraticEvaluation(Evaluations('quadratic', props.quadraticConstants, props.precision, futureInput))
        setCubicEvaluation(Evaluations('cubic', props.cubicConstants, props.precision, futureInput))
        setHyperbolicEvaluation(Evaluations('hyperbolic', props.hyperbolicConstants, props.precision, futureInput))
        setExponentialEvaluation(Evaluations('exponential', props.exponentialConstants, props.precision, futureInput))
        setLogarithmicEvaluation(Evaluations('logarithmic', props.logarithmicConstants, props.precision, futureInput))
        setLogisticEvaluation(Evaluations('logistic', props.logisticConstants, props.precision, futureInput))
        setSinusoidalEvaluation(Evaluations('sinusoidal', props.sinusoidalConstants, props.precision, futureInput))
    }

    const allEvaluations = []

    if (props.displayLinear) {
        allEvaluations.push(<p><em><strong>Linear Prediction</strong></em> {linearEvaluation}</p>)
    }

    if (props.displayQuadratic) {
        allEvaluations.push(<p><em><strong>Quadratic Prediction</strong></em> {quadraticEvaluation}</p>)
    }

    if (props.displayCubic) {
        allEvaluations.push(<p><em><strong>Cubic Prediction</strong></em> {cubicEvaluation}</p>)
    }

    if (props.displayHyperbolic) {
        allEvaluations.push(<p><em><strong>Hyperbolic Prediction</strong></em> {hyperbolicEvaluation}</p>)
    } 

    if (props.displayExponential) {
        allEvaluations.push(<p><em><strong>Exponential Prediction</strong></em> {exponentialEvaluation}</p>)
    } 

    if (props.displayLogarithmic) {
        allEvaluations.push(<p><em><strong>Logarithmic Prediction</strong></em> {logarithmicEvaluation}</p>)
    } 

    if (props.displayLogistic) {
        allEvaluations.push(<p><em><strong>Logistic Prediction</strong></em> {logisticEvaluation}</p>)
    } 

    if (props.displaySinusoidal) {
        allEvaluations.push(<p><em><strong>Sinusoidal Prediction</strong></em> {sinusoidalEvaluation}</p>)
    }

    return (
        <div>
            <h2>Predicted Future Values at an Input of {futureInput}</h2>
            
            {allEvaluations}

            <label htmlFor="futureInput">Choose a number to evaluate</label>
            <input
                type="text"
                name="futureInput"
                value={futureInput}
                onChange={handleFutureInput}
            />
            <button onClick={handleFutureValue}>Submit</button>
        </div>
    )
}

export default FutureEvaluations