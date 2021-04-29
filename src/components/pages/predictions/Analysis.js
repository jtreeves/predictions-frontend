import { useLocation } from 'react-router-dom'
import DeleteModels from '../../elements/predictions/DeleteModels'

// Import internal components
import Results from '../../elements/predictions/Results'
import UpdateModels from '../../elements/predictions/UpdateModels'

// Create function
function Analysis() {
    const location = useLocation()
    const models = location.state.model
    const user = location.state.user
    const originalDataSet = models.data_set
    let stringedDataSet = ''
    for (const point of originalDataSet) {
        stringedDataSet += '[' + point[0] + ', ' + point[1] + ']' + ', '
    }
    const trimmedStringedData = stringedDataSet.slice(0, -2)
    const dataSet = '[' + trimmedStringedData + ']'

    return (
        <div>
            <Results
                title={models.title}
                independent={models.independent}
                dependent={models.dependent}
                precision={models.precision}
                dataSet={dataSet}
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

            <DeleteModels 
                source={models.source} 
                />

            <UpdateModels
                source={models.source} 
                title={models.title}
                independent={models.independent}
                dependent={models.dependent}
                precision={models.precision}
                dataSet={dataSet}
                user={user}
            />
        </div>
    )
}

// Export function
export default Analysis