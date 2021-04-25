// Create function
function Results(props) {
    return (
        <div>
            <h1>View the Results of the Data Analysis</h1>
            <p>Linear Coefficients: {props.linearConstants[0]}, {props.linearConstants[1]}</p>
            <p>Linear Points: {props.linearPoints.roots}</p>
            <p>Linear Correlation: {props.linearCorrelation}</p>
            <p>Quadratic Coefficients: {props.quadraticConstants[0]}, {props.quadraticConstants[1]}, {props.quadraticConstants[2]}</p>
            <p>Quadratic Points: {props.quadraticPoints.roots}</p>
            <p>Quadratic Correlation: {props.quadraticCorrelation}</p>
            <p>Cubic Coefficients: {props.cubicConstants[0]}, {props.cubicConstants[1]}, {props.cubicConstants[2]}, {props.cubicConstants[3]}</p>
            <p>Cubic Points: {props.cubicPoints.roots}</p>
            <p>Cubic Correlation: {props.cubicCorrelation}</p>
            <p>Hyperbolic Coefficients: {props.hyperbolicConstants[0]}, {props.hyperbolicConstants[1]}</p>
            <p>Hyperbolic Points: {props.hyperbolicPoints.roots}</p>
            <p>Hyperbolic Correlation: {props.hyperbolicCorrelation}</p>
            <p>Exponential Coefficients: {props.exponentialConstants[0]}, {props.exponentialConstants[1]}</p>
            <p>Exponential Points: {props.exponentialPoints.roots}</p>
            <p>Exponential Correlation: {props.exponentialCorrelation}</p>
            <p>Logarithmic Coefficients: {props.logarithmicConstants[0]}, {props.logarithmicConstants[1]}</p>
            <p>Logarithmic Points: {props.logarithmicPoints.roots}</p>
            <p>Logarithmic Correlation: {props.logarithmicCorrelation}</p>
            <p>Logistic Coefficients: {props.logisticConstants[0]}, {props.logisticConstants[1]}, {props.logisticConstants[2]}</p>
            <p>Logistic Points: {props.logisticPoints.roots}</p>
            <p>Logistic Correlation: {props.logisticCorrelation}</p>
            <p>Sinusoidal Coefficients: {props.sinusoidalConstants[0]}, {props.sinusoidalConstants[1]}, {props.sinusoidalConstants[2]}, {props.sinusoidalConstants[3]}</p>
            <p>Sinusoidal Points: {props.sinusoidalPoints.roots}</p>
            <p>Sinusoidal Correlation: {props.sinusoidalCorrelation}</p>
            <p>Best Fit: {props.bestFit}</p>
        </div>
    )
}

// Export function
export default Results