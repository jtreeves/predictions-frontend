function EvaluationSentence(props) {
    return (
        <li>
            ... according to the <mark>{props.type} model</mark>, there will be {props.evaluation} {props.dependent}
        </li>
    )
}

export default EvaluationSentence