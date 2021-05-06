import Latex from 'react-latex'

function FormattedAnalyses(props) {
    return (
        <section>
            <h2>{props.type} Model</h2>
            <p><mark>Equation</mark> <Latex>{props.equation}</Latex></p>
            <p><mark>Correlation</mark> <Latex>{props.correlation}</Latex></p>
            <p><mark>Key Points</mark>
                <br />ROOTS: <Latex>{props.roots}</Latex>
                <br />MAXIMA: <Latex>{props.maxima}</Latex>
                <br />MINIMA: <Latex>{props.minima}</Latex>
                <br />INFLECTIONS: <Latex>{props.inflections}</Latex>
            </p>
        </section>
    )
}

export default FormattedAnalyses