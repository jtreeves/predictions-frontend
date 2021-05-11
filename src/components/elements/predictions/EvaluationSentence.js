function EvaluationSentence(props) {
    return (
        <p className="analysis">
            ... according to the <mark>{props.type} model</mark>, there will be {props.evaluation} {props.dependent}
        </p>
    )
}

export default EvaluationSentence