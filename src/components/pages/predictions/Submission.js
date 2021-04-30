import { useState } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import axios from 'axios'
import CreateSet from '../../elements/predictions/CreateSet'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Submission(props) {
    const location = useLocation()
    const user = location.state.user
    const [title, setTitle] = useState('')
    const [independent, setIndependent] = useState('')
    const [dependent, setDependent] = useState('')
    const [precision, setPrecision] = useState('')
    const [dataSet, setDataSet] = useState('')
    const [models, setModels] = useState({})
    const [submitted, setSubmitted] = useState(false)
    // const [linearConstants, setLinearConstants] = useState()
    // const [linearPoints, setLinearPoints] = useState()
    // const [linearCorrelation, setLinearCorrelation] = useState()
    // const [quadraticConstants, setQuadraticConstants] = useState()
    // const [quadraticPoints, setQuadraticPoints] = useState()
    // const [quadraticCorrelation, setQuadraticCorrelation] = useState()
    // const [cubicConstants, setCubicConstants] = useState()
    // const [cubicPoints, setCubicPoints] = useState()
    // const [cubicCorrelation, setCubicCorrelation] = useState()
    // const [hyperbolicConstants, setHyperbolicConstants] = useState()
    // const [hyperbolicPoints, setHyperbolicPoints] = useState()
    // const [hyperbolicCorrelation, setHyperbolicCorrelation] = useState()
    // const [exponentialConstants, setExponentialConstants] = useState()
    // const [exponentialPoints, setExponentialPoints] = useState()
    // const [exponentialCorrelation, setExponentialCorrelation] = useState()
    // const [logarithmicConstants, setLogarithmicConstants] = useState()
    // const [logarithmicPoints, setLogarithmicPoints] = useState()
    // const [logarithmicCorrelation, setLogarithmicCorrelation] = useState()
    // const [logisticConstants, setLogisticConstants] = useState()
    // const [logisticPoints, setLogisticPoints] = useState()
    // const [logisticCorrelation, setLogisticCorrelation] = useState()
    // const [sinusoidalConstants, setSinusoidalConstants] = useState()
    // const [sinusoidalPoints, setSinusoidalPoints] = useState()
    // const [sinusoidalCorrelation, setSinusoidalCorrelation] = useState()
    // const [bestFit, setBestFit] = useState()
    // const [source, setSource] = useState()

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
            const predictions = await axios.post(REACT_APP_SERVER_URL + 'api',
                submission
            )
            setModels(predictions.data.regressions)
            setSubmitted(true)
            // const results = sentData.data.regressions
            // setLinearConstants(results.linear_coefficients)
            // setLinearPoints(results.linear_points)
            // setLinearCorrelation(results.linear_correlation)
            // setQuadraticConstants(results.quadratic_coefficients)
            // setQuadraticPoints(results.quadratic_points)
            // setQuadraticCorrelation(results.quadratic_correlation)
            // setCubicConstants(results.cubic_coefficients)
            // setCubicPoints(results.cubic_points)
            // setCubicCorrelation(results.cubic_correlation)
            // setHyperbolicConstants(results.hyperbolic_coefficients)
            // setHyperbolicPoints(results.hyperbolic_points)
            // setHyperbolicCorrelation(results.hyperbolic_correlation)
            // setExponentialConstants(results.exponential_coefficients)
            // setExponentialPoints(results.exponential_points)
            // setExponentialCorrelation(results.exponential_correlation)
            // setLogarithmicConstants(results.logarithmic_coefficients)
            // setLogarithmicPoints(results.logarithmic_points)
            // setLogarithmicCorrelation(results.logarithmic_correlation)
            // setLogisticConstants(results.logistic_coefficients)
            // setLogisticPoints(results.logistic_points)
            // setLogisticCorrelation(results.logistic_correlation)
            // setSinusoidalConstants(results.sinusoidal_coefficients)
            // setSinusoidalPoints(results.sinusoidal_points)
            // setSinusoidalCorrelation(results.sinusoidal_correlation)
            // setBestFit(results.best_fit)
            // setSource(results.source)
            // setClicked(true)
        } catch (error) {
            alert(error)
        }
    }

    if (!submitted) {
        return (
            <CreateSet
                heading="Create a New Data Set"
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
            <Redirect 
                to={{
                    pathname: "/analysis",
                    state: {
                        models: models, 
                        user: user,
                        stored: false
                    }
                }}
            />
        )
    }
}

export default Submission