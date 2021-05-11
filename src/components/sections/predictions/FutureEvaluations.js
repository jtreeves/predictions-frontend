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
            type="linear"
            evaluation={linearEvaluation}
            dependent={props.dependent}
        />)
    }

    if (props.displayQuadratic) {
        allEvaluations.push(<FormattedEvaluations 
            type="quadratic"
            evaluation={quadraticEvaluation}
            dependent={props.dependent}
        />)
    }

    if (props.displayCubic) {
        allEvaluations.push(<FormattedEvaluations 
            type="cubic"
            evaluation={cubicEvaluation}
            dependent={props.dependent}
        />)
    }

    if (props.displayHyperbolic) {
        allEvaluations.push(<FormattedEvaluations 
            type="hyperbolic"
            evaluation={hyperbolicEvaluation}
            dependent={props.dependent}
        />)
    } 

    if (props.displayExponential) {
        allEvaluations.push(<FormattedEvaluations 
            type="exponential"
            evaluation={exponentialEvaluation}
            dependent={props.dependent}
        />)
    } 

    if (props.displayLogarithmic) {
        allEvaluations.push(<FormattedEvaluations 
            type="logarithmic"
            evaluation={logarithmicEvaluation}
            dependent={props.dependent}
        />)
    } 

    if (props.displayLogistic) {
        allEvaluations.push(<FormattedEvaluations 
            type="logistic"
            evaluation={logisticEvaluation}
            dependent={props.dependent}
        />)
    } 

    if (props.displaySinusoidal) {
        allEvaluations.push(<FormattedEvaluations 
            type="sinusoidal"
            evaluation={sinusoidalEvaluation}
            dependent={props.dependent}
        />)
    }

    return (
        <section className="future-evaluations">
            <h2>Predicted Future Values</h2>

            <article>
                <p>
                    When there are <input
                        type="text"
                        name="futureInput"
                        title="Input any number to plug into the respective equations"
                        value={futureInput}
                        onChange={handleFutureInput}
                    /> {props.independent} ...
                </p>
                
                {allEvaluations}

                <button onClick={handleFutureValue}>Generate New Evaluations</button>
            </article>
        </section>
    )
}

export default FutureEvaluations