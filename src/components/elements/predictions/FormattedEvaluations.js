function FormattedEvaluations(props) {
    return (
        <p>
            <mark>{props.type} Prediction</mark> {props.evaluation}
        </p>
    )
}

export default FormattedEvaluations