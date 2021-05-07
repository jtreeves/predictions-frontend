import { useState } from 'react'
import Evaluations from '../../utilities/predictions/Evaluations'
import FormattedEvaluations from './FormattedEvaluations'

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
        allEvaluations.push(<FormattedEvaluations 
            type="Linear"
            evaluation={linearEvaluation}
        />)
    }

    if (props.displayQuadratic) {
        allEvaluations.push(<FormattedEvaluations 
            type="Quadratic"
            evaluation={quadraticEvaluation}
        />)
    }

    if (props.displayCubic) {
        allEvaluations.push(<FormattedEvaluations 
            type="Cubic"
            evaluation={cubicEvaluation}
        />)
    }

    if (props.displayHyperbolic) {
        allEvaluations.push(<FormattedEvaluations 
            type="Hyperbolic"
            evaluation={hyperbolicEvaluation}
        />)
    } 

    if (props.displayExponential) {
        allEvaluations.push(<FormattedEvaluations 
            type="Exponential"
            evaluation={exponentialEvaluation}
        />)
    } 

    if (props.displayLogarithmic) {
        allEvaluations.push(<FormattedEvaluations 
            type="Logarithmic"
            evaluation={logarithmicEvaluation}
        />)
    } 

    if (props.displayLogistic) {
        allEvaluations.push(<FormattedEvaluations 
            type="Logistic"
            evaluation={logisticEvaluation}
        />)
    } 

    if (props.displaySinusoidal) {
        allEvaluations.push(<FormattedEvaluations 
            type="Sinusoidal"
            evaluation={sinusoidalEvaluation}
        />)
    }

    return (
        <section className="analysis">
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
        </section>
    )
}

export default FutureEvaluations