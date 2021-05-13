function BestFit(props) {
    const correlation = props.correlation.toFixed(props.precision)

    return (
        <article>
            <h3>Best Fit</h3>
            <p>{props.bestFit}</p>
            <p>{correlation}</p>
        </article>
    )
}

export default BestFit