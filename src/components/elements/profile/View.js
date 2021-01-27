// Create function
function View(props) {
    return (
        <div>
            <h1>View Data Analysis</h1>
            <p>Linear Coefficients: {props.linears[0][0]}, {props.linears[1][0]}</p>
            <p>Linear Error: {props.linearError}</p>
            <p>Quadratic Coefficients: {props.quadratics[0][0]}, {props.quadratics[1][0]}, {props.quadratics[2][0]}</p>
            <p>Quadratic Error: {props.quadraticError}</p>
            <p>Cubic Coefficients: {props.cubics[0][0]}, {props.cubics[1][0]}, {props.cubics[2][0]}, {props.cubics[3][0]}</p>
            <p>Cubic Error: {props.cubicError}</p>
            <p>Hyperbolic Coefficients: {props.hyperbolics[0][0]}, {props.hyperbolics[1][0]}</p>
            <p>Hyperbolic Error: {props.hyperbolicError}</p>
            <p>Exponential Coefficients: {props.exponentials[0][0]}, {props.exponentials[1][0]}</p>
            <p>Exponential Error: {props.exponentialError}</p>
            <p>Logarithmic Coefficients: {props.logarithmics[0][0]}, {props.logarithmics[1][0]}</p>
            <p>Logarithmic Error: {props.logarithmicError}</p>
            <p>Best Fit: {props.bestFit}</p>
        </div>
    )
}

// Export function
export default View