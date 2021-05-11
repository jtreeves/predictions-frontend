function BestFit(props) {
    const correlation = props.correlation.toFixed(props.precision)

    return (
        <article className="analysis">
            <mark>Best Fit</mark>
            <p>{props.bestFit}</p>
            <p>{correlation}</p>
        </article>
    )
}

export default BestFit