import Latex from 'react-latex'

function FormattedAnalyses(props) {
    return (
        <div>
            <h2>{props.type} Model</h2>
            <p><em><strong>Equation</strong></em> <Latex>{props.equation}</Latex></p>
            <p><em><strong>Correlation</strong></em> <Latex>{props.correlation}</Latex></p>
            <p><em><strong>Key Points</strong></em>
                <br />ROOTS: <Latex>{props.roots}</Latex>
                <br />MAXIMA: <Latex>{props.maxima}</Latex>
                <br />MINIMA: <Latex>{props.minima}</Latex>
                <br />INFLECTIONS: <Latex>{props.inflections}</Latex>
            </p>
        </div>
    )
}

export default FormattedAnalyses