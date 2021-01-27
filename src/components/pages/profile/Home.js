// Import external dependencies
import { useState } from 'react'
import axios from 'axios'
import alert from 'alert'

// Import internal components
import Add from '../../elements/profile/Add'
import View from '../../elements/profile/View'

// Create shortcut for environmental variable
const appServer = process.env.REACT_APP_SERVER_URL

// Create function
function Profile() {
    // Set initial state values
    const [title, setTitle] = useState()
    const [independent, setIndependent] = useState()
    const [dependent, setDependent] = useState()
    const [dataSet, setDataSet] = useState()
    const [linears, setLinears] = useState()
    const [linearError, setLinearError] = useState()
    const [quadratics, setQuadratics] = useState()
    const [quadraticError, setQuadraticError] = useState()
    const [cubics, setCubics] = useState()
    const [cubicError, setCubicError] = useState()
    const [hyperbolics, setHyperbolics] = useState()
    const [hyperbolicError, setHyperbolicError] = useState()
    const [exponentials, setExponentials] = useState()
    const [exponentialError, setExponentialError] = useState()
    const [logarithmics, setLogarithmics] = useState()
    const [logarithmicError, setLogarithmicError] = useState()
    const [bestFit, setBestFit] = useState()
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
            dataSet: dataSet
        }
        try {
            const sentData = await axios.post(
                appServer + '/api',
                submission
            )
            const results = sentData.data.regressions
            setLinears(results.linear_coefficients)
            setLinearError(results.linear_error)
            setQuadratics(results.quadratic_coefficients)
            setQuadraticError(results.quadratic_error)
            setCubics(results.cubic_coefficients)
            setCubicError(results.cubic_error)
            setHyperbolics(results.hyperbolic_coefficients)
            setHyperbolicError(results.hyperbolic_error)
            setExponentials(results.exponential_coefficients)
            setExponentialError(results.exponential_error)
            setLogarithmics(results.logarithmic_coefficients)
            setLogarithmicError(results.logarithmic_error)
            setBestFit(results.best_fit)
            setClicked(true)
        } catch (error) {
            alert(error)
        }
    }

    if (!clicked) {
        return (
            <Add
                handleSubmit={handleSubmit}
                title={title}
                handleTitle={handleTitle}
                independent={independent}
                handleIndependent={handleIndependent}
                dependent={dependent}
                handleDependent={handleDependent}
                dataSet={dataSet}
                handleDataSet={handleDataSet}
            />
        )
    } else {
        return (
            <View
                linears={linears}
                linearError={linearError}
                quadratics={quadratics}
                quadraticError={quadraticError}
                cubics={cubics}
                cubicError={cubicError}
                hyperbolics={hyperbolics}
                hyperbolicError={hyperbolicError}
                exponentials={exponentials}
                exponentialError={exponentialError}
                logarithmics={logarithmics}
                logarithmicError={logarithmicError}
                bestFit={bestFit}
            />
        )
    }
}

// Export function
export default Profile