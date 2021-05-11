function EvaluationSentence(props) {
    return (
        <p>
            ... according to the <mark>{props.type} model</mark>, there will be {props.evaluation} {props.dependent}
        </p>
    )
}

export default EvaluationSentence