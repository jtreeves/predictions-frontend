import Latex from 'react-latex'

function FormattedAnalyses(props) {
    let allClasses = 'model-card '

    if (props.type === 'Linear') {
        allClasses += 'pink'
    } else if (props.type === 'Quadratic') {
        allClasses += 'green'
    } else if (props.type === 'Cubic') {
        allClasses += 'blue'
    } else if (props.type === 'Hyperbolic') {
        allClasses += 'brown'
    } else if (props.type === 'Exponential') {
        allClasses += 'orange'
    } else if (props.type === 'Logarithmic') {
        allClasses += 'yellow'
    } else if (props.type === 'Logistic') {
        allClasses += 'purple'
    } else if (props.type === 'Sinusoidal') {
        allClasses += 'red'
    }

    return (
        <section className={allClasses}>
            <h2>{props.type} Model</h2>

            <article className="analysis">
                <p>
                    <mark>Equation</mark> <Latex>{props.equation}</Latex>
                </p>

                <p>
                    <mark>Correlation</mark> <Latex>{props.correlation}</Latex>
                </p>

                <p>
                    <mark>Key Points</mark>
                    <br />ROOTS: <Latex>{props.roots}</Latex>
                    <br />MAXIMA: <Latex>{props.maxima}</Latex>
                    <br />MINIMA: <Latex>{props.minima}</Latex>
                    <br />INFLECTIONS: <Latex>{props.inflections}</Latex>
                </p>
            </article>
        </section>
    )
}

export default FormattedAnalyses