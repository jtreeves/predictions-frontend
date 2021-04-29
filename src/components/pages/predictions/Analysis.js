import { useLocation } from 'react-router-dom'

// Import internal components
import Results from '../../elements/predictions/Results'

// Create function
function Analysis() {
    const location = useLocation()
    const models = location.state.model
    console.log('MODELS: ', models)
    console.log('MODELS.TITLE: ', models.title)

    return (
        <div>
            <Results
                title={models.title}
                independent={models.independent}
                dependent={models.dependent}
                precision={models.precision}
                dataSet={models.data_set}
                linearConstants={models.linear_coefficients}
                linearPoints={models.linear_points}
                linearCorrelation={models.linear_correlation}
                quadraticConstants={models.quadratic_coefficients}
                quadraticPoints={models.quadratic_points}
                quadraticCorrelation={models.quadratic_correlation}
                cubicConstants={models.cubic_coefficients}
                cubicPoints={models.cubic_points}
                cubicCorrelation={models.cubic_correlation}
                hyperbolicConstants={models.hyperbolic_coefficients}
                hyperbolicPoints={models.hyperbolic_points}
                hyperbolicCorrelation={models.hyperbolic_correlation}
                exponentialConstants={models.exponential_coefficients}
                exponentialPoints={models.exponential_points}
                exponentialCorrelation={models.exponential_correlation}
                logarithmicConstants={models.logarithmic_coefficients}
                logarithmicPoints={models.logarithmic_points}
                logarithmicCorrelation={models.logarithmic_correlation}
                logisticConstants={models.logistic_coefficients}
                logisticPoints={models.logistic_points}
                logisticCorrelation={models.logistic_correlation}
                sinusoidalConstants={models.sinusoidal_coefficients}
                sinusoidalPoints={models.sinusoidal_points}
                sinusoidalCorrelation={models.sinusoidal_correlation}
                bestFit={models.best_fit}
            />
        </div>
    )
}

// Export function
export default Analysis