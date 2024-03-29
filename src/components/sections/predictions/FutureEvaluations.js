import { useState } from 'react'
import FormButton from '../../buttons/main/FormButton'
import EvaluationSentence from '../../elements/predictions/EvaluationSentence'
import Evaluations from '../../../utilities/predictions/Evaluations'

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
        allEvaluations.push(<EvaluationSentence 
            type="linear"
            key="linear"
            evaluation={linearEvaluation}
            dependent={props.dependent}
        />)
    }

    if (props.displayQuadratic) {
        allEvaluations.push(<EvaluationSentence 
            type="quadratic"
            key="quadratic"
            evaluation={quadraticEvaluation}
            dependent={props.dependent}
        />)
    }

    if (props.displayCubic) {
        allEvaluations.push(<EvaluationSentence 
            type="cubic"
            key="cubic"
            evaluation={cubicEvaluation}
            dependent={props.dependent}
        />)
    }

    if (props.displayHyperbolic) {
        allEvaluations.push(<EvaluationSentence 
            type="hyperbolic"
            key="hyperbolic"
            evaluation={hyperbolicEvaluation}
            dependent={props.dependent}
        />)
    } 

    if (props.displayExponential) {
        allEvaluations.push(<EvaluationSentence 
            type="exponential"
            key="exponential"
            evaluation={exponentialEvaluation}
            dependent={props.dependent}
        />)
    } 

    if (props.displayLogarithmic) {
        allEvaluations.push(<EvaluationSentence 
            type="logarithmic"
            key="logarithmic"
            evaluation={logarithmicEvaluation}
            dependent={props.dependent}
        />)
    } 

    if (props.displayLogistic) {
        allEvaluations.push(<EvaluationSentence 
            type="logistic"
            key="logistic"
            evaluation={logisticEvaluation}
            dependent={props.dependent}
        />)
    } 

    if (props.displaySinusoidal) {
        allEvaluations.push(<EvaluationSentence 
            type="sinusoidal"
            key="sinusoidal"
            evaluation={sinusoidalEvaluation}
            dependent={props.dependent}
        />)
    }

    return (
        <section 
            id="future-evaluations"
        >
            <h2>Predicted Future Values</h2>

            <form>
                <p>
                    When there are <input
                        type="text"
                        name="futureInput"
                        title="Input any number to plug into the respective equations"
                        value={futureInput}
                        onChange={handleFutureInput}
                    /> {props.independent} ...
                </p>

                <ul>
                    {allEvaluations}
                </ul>

                <FormButton 
                    text="Generate New Evaluations"
                    onClick={handleFutureValue}
                    id="future-value-button"
                    display="block"
                />
            </form>
        </section>
    )
}

export default FutureEvaluations