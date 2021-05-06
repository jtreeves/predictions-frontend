function FormattedEvaluations(props) {
    return (
        <p>
            <em><strong>{props.type} Prediction</strong></em> {props.evaluation}
        </p>
    )
}

export default FormattedEvaluations