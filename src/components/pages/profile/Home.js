// Import external dependencies
import { useState } from 'react'
import axios from 'axios'
import alert from 'alert'

// Import internal component
import FormGroup from '../../elements/main/FormGroup'

// Create shortcut for environmental variable
const appServer = process.env.REACT_APP_SERVER_URL

// Create function
function Profile(props) {
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
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            <h1>Profile</h1>
            <p><strong>Name:</strong> {props.user.name}</p> 
            <p><strong>Email:</strong> {props.user.email}</p> 
            <p><strong>ID:</strong> {props.user.id}</p>
            <form onSubmit={handleSubmit}>
                <FormGroup
                    type="text"
                    label="title"
                    value={title}
                    display="Title"
                    onChange={handleTitle}
                />
                <FormGroup
                    type="text"
                    label="independent"
                    value={independent}
                    display="Independent"
                    onChange={handleIndependent}
                />
                <FormGroup
                    type="text"
                    label="dependent"
                    value={dependent}
                    display="Dependent"
                    onChange={handleDependent}
                />
                <FormGroup
                    type="text"
                    label="dataSet"
                    value={dataSet}
                    display="Data Set"
                    onChange={handleDataSet}
                />
                <button type="submit">Submit</button>
            </form>
            <p>Linear Coefficients: {linears[0][0]}, {linears[1][0]}</p>
            <p>Linear Error: {linearError}</p>
            <p>Quadratic Coefficients: {quadratics[0][0]}, {quadratics[1][0]}, {quadratics[2][0]}</p>
            <p>Quadratic Error: {quadraticError}</p>
            <p>Cubic Coefficients: {cubics[0][0]}, {cubics[1][0]}, {cubics[2][0]}, {cubics[3][0]}</p>
            <p>Cubic Error: {cubicError}</p>
            <p>Hyperbolic Coefficients: {hyperbolics[0][0]}, {hyperbolics[1][0]}</p>
            <p>Hyperbolic Error: {hyperbolicError}</p>
            <p>Exponential Coefficients: {exponentials[0][0]}, {exponentials[1][0]}</p>
            <p>Exponential Error: {exponentialError}</p>
            <p>Logarithmic Coefficients: {logarithmics[0][0]}, {logarithmics[1][0]}</p>
            <p>Logarithmic Error: {logarithmicError}</p>
            <p>Best Fit: {bestFit}</p>
        </div>
    )
}

// Export function
export default Profile