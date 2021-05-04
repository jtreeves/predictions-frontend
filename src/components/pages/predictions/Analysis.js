import { useLocation } from 'react-router-dom'

// Import internal components
import GeneratedModels from '../../elements/predictions/GeneratedModels'
import SaveSet from '../../elements/predictions/SaveSet'
import UpdateSet from '../../elements/predictions/UpdateSet'
import DeleteSet from '../../elements/predictions/DeleteSet'
import Favorite from '../../elements/predictions/Favorite'
import Note from '../../elements/predictions/Note'

// Create function
function Analysis(props) {
    const location = useLocation()
    const models = location.state.models
    const opinions = location.state.opinions
    const stored = location.state.stored

    const originalDataSet = models.data_set
    let stringedDataSet = ''
    for (const point of originalDataSet) {
        stringedDataSet += `[${point[0]}, ${point[1]}], `
    }
    const trimmedStringedData = stringedDataSet.slice(0, -2)
    const dataSet = '[' + trimmedStringedData + ']'
    
    const generatedModelsSection = <GeneratedModels
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
        favorite={opinions.favorite}
    />

    if (!stored) {
        return (
            <div>
                {generatedModelsSection}

                <SaveSet 
                    user={props.user}
                    source={models.source}
                />
            </div>
        )
    } else {
        return (
            <div>
                {generatedModelsSection}

                <Favorite 
                    graph={opinions.favorite}
                    source={models.source}
                />

                <Note 
                    comment={opinions.note}
                    source={models.source}
                />

                <UpdateSet
                    source={models.source} 
                    title={models.title}
                    independent={models.independent}
                    dependent={models.dependent}
                    precision={models.precision}
                    dataSet={dataSet}
                    favorite={opinions.favorite}
                    note={opinions.note}
                    user={props.user}
                />

                <DeleteSet
                    source={models.source} 
                />
            </div>
        )
    }
}

// Export function
export default Analysis