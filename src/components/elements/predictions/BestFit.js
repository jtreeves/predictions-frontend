function BestFit(props) {
    const correlation = props.correlation.toFixed(props.precision)

    return (
        <section>
            <mark>Best Fit</mark>
            <p>{props.bestFit}</p>
            <p>{correlation}</p>
        </section>
    )
}

export default BestFit