// Import external dependencies
import { useState } from 'react'
import axios from 'axios'
import alert from 'alert'

// Import internal components
import New from '../../elements/profile/New'
import Results from '../../elements/profile/Results'
// import Save from '../../elements/profile/Save'

// Create shortcut for environmental variable
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

// Create function
function Profile(props) {
    // Set initial state values
    const [title, setTitle] = useState()
    const [independent, setIndependent] = useState()
    const [dependent, setDependent] = useState()
    const [precision, setPrecision] = useState()
    const [dataSet, setDataSet] = useState()
    const [linearConstants, setLinearConstants] = useState()
    const [linearPoints, setLinearPoints] = useState()
    const [linearCorrelation, setLinearCorrelation] = useState()
    const [quadraticConstants, setQuadraticConstants] = useState()
    const [quadraticPoints, setQuadraticPoints] = useState()
    const [quadraticCorrelation, setQuadraticCorrelation] = useState()
    const [cubicConstants, setCubicConstants] = useState()
    const [cubicPoints, setCubicPoints] = useState()
    const [cubicCorrelation, setCubicCorrelation] = useState()
    const [hyperbolicConstants, setHyperbolicConstants] = useState()
    const [hyperbolicPoints, setHyperbolicPoints] = useState()
    const [hyperbolicCorrelation, setHyperbolicCorrelation] = useState()
    const [exponentialConstants, setExponentialConstants] = useState()
    const [exponentialPoints, setExponentialPoints] = useState()
    const [exponentialCorrelation, setExponentialCorrelation] = useState()
    const [logarithmicConstants, setLogarithmicConstants] = useState()
    const [logarithmicPoints, setLogarithmicPoints] = useState()
    const [logarithmicCorrelation, setLogarithmicCorrelation] = useState()
    const [logisticConstants, setLogisticConstants] = useState()
    const [logisticPoints, setLogisticPoints] = useState()
    const [logisticCorrelation, setLogisticCorrelation] = useState()
    const [sinusoidalConstants, setSinusoidalConstants] = useState()
    const [sinusoidalPoints, setSinusoidalPoints] = useState()
    const [sinusoidalCorrelation, setSinusoidalCorrelation] = useState()
    const [bestFit, setBestFit] = useState()
    const [source, setSource] = useState()
    const [clicked, setClicked] = useState(false)

    // Set title from form
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    // Set independent from form
    const handleIndependent = (e) => {
        setIndependent(e.target.value)
    }

    // Set dependent from form
    const handleDependent = (e) => {
        setDependent(e.target.value)
    }

    // Set precision from form
    const handlePrecision = (e) => {
        setPrecision(e.target.value)
    }
    
    // Set dataSet from form
    const handleDataSet = (e) => {
        setDataSet(e.target.value)
    }

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault()
        const submission = {
            title: title,
            independent: independent,
            dependent: dependent,
            precision: precision,
            dataSet: dataSet
        }
        try {
            const sentData = await axios.post(REACT_APP_SERVER_URL + 'api',
                submission
            )
            const results = sentData.data.regressions
            setLinearConstants(results.linear_coefficients)
            setLinearPoints(results.linear_points)
            setLinearCorrelation(results.linear_correlation)
            setQuadraticConstants(results.quadratic_coefficients)
            setQuadraticPoints(results.quadratic_points)
            setQuadraticCorrelation(results.quadratic_correlation)
            setCubicConstants(results.cubic_coefficients)
            setCubicPoints(results.cubic_points)
            setCubicCorrelation(results.cubic_correlation)
            setHyperbolicConstants(results.hyperbolic_coefficients)
            setHyperbolicPoints(results.hyperbolic_points)
            setHyperbolicCorrelation(results.hyperbolic_correlation)
            setExponentialConstants(results.exponential_coefficients)
            setExponentialPoints(results.exponential_points)
            setExponentialCorrelation(results.exponential_correlation)
            setLogarithmicConstants(results.logarithmic_coefficients)
            setLogarithmicPoints(results.logarithmic_points)
            setLogarithmicCorrelation(results.logarithmic_correlation)
            setLogisticConstants(results.logistic_coefficients)
            setLogisticPoints(results.logistic_points)
            setLogisticCorrelation(results.logistic_correlation)
            setSinusoidalConstants(results.sinusoidal_coefficients)
            setSinusoidalPoints(results.sinusoidal_points)
            setSinusoidalCorrelation(results.sinusoidal_correlation)
            setBestFit(results.best_fit)
            setSource(results.source)
            setClicked(true)
        } catch (error) {
            alert(error)
        }
    }

    if (!clicked) {
        return (
            <New
                handleSubmit={handleSubmit}
                title={title}
                handleTitle={handleTitle}
                independent={independent}
                handleIndependent={handleIndependent}
                dependent={dependent}
                handleDependent={handleDependent}
                precision={precision}
                handlePrecision={handlePrecision}
                dataSet={dataSet}
                handleDataSet={handleDataSet}
            />
        )
    } else {
        return (
            <div>
                <Results
                    title={title}
                    independent={independent}
                    dependent={dependent}
                    precision={precision}
                    dataSet={dataSet}
                    linearConstants={linearConstants}
                    linearPoints={linearPoints}
                    linearCorrelation={linearCorrelation}
                    quadraticConstants={quadraticConstants}
                    quadraticPoints={quadraticPoints}
                    quadraticCorrelation={quadraticCorrelation}
                    cubicConstants={cubicConstants}
                    cubicPoints={cubicPoints}
                    cubicCorrelation={cubicCorrelation}
                    hyperbolicConstants={hyperbolicConstants}
                    hyperbolicPoints={hyperbolicPoints}
                    hyperbolicCorrelation={hyperbolicCorrelation}
                    exponentialConstants={exponentialConstants}
                    exponentialPoints={exponentialPoints}
                    exponentialCorrelation={exponentialCorrelation}
                    logarithmicConstants={logarithmicConstants}
                    logarithmicPoints={logarithmicPoints}
                    logarithmicCorrelation={logarithmicCorrelation}
                    logisticConstants={logisticConstants}
                    logisticPoints={logisticPoints}
                    logisticCorrelation={logisticCorrelation}
                    sinusoidalConstants={sinusoidalConstants}
                    sinusoidalPoints={sinusoidalPoints}
                    sinusoidalCorrelation={sinusoidalCorrelation}
                    bestFit={bestFit}
                />
                {/* <Save 
                    user={props.user.id}
                    source={source}
                /> */}
            </div>
        )
    }
}

// Export function
export default Profile