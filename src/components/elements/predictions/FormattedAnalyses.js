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

            <article>
                <div>
                    <h3>Equation</h3>
                    <Latex>{props.equation}</Latex>
                </div>

                <div>
                    <h3>Correlation</h3>
                    <Latex>{props.correlation}</Latex>
                </div>

                <div>
                    <h3>Key Points</h3>

                    <ul>
                        <li>
                            <span>ROOTS</span>
                            <Latex>{props.roots}</Latex>
                        </li>
                        
                        <li>
                            <span>MAXIMA</span>
                            <Latex>{props.maxima}</Latex>
                        </li>

                        <li>
                            <span>MINIMA</span>
                            <Latex>{props.minima}</Latex>
                        </li>

                        <li>
                            <span>INFLECTIONS</span>
                            <Latex>{props.inflections}</Latex>
                        </li>
                    </ul>
                </div>
            </article>
        </section>
    )
}

export default FormattedAnalyses