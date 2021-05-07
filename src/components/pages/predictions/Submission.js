import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import CreateSet from '../../elements/predictions/CreateSet'
import SpreadsheetInput from '../../elements/predictions/SpreadsheetInput'
import CheckExpiration from '../../utilities/users/CheckExpiration'
import CleanCollection from '../../utilities/predictions/CleanCollection'
import '../../../style/submission.css'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Submission(props) {
    CheckExpiration(props.user.exp, props.handleLogout)

    const [title, setTitle] = useState('')
    const [independent, setIndependent] = useState('')
    const [dependent, setDependent] = useState('')
    const [precision, setPrecision] = useState(4)
    const [dataSet, setDataSet] = useState('')
    const [models, setModels] = useState({})
    const [manual, setManual] = useState(false)
    const [upload, setUpload] = useState(false)
    const [submitted, setSubmitted] = useState(false)

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

    const handleManual = (e) => {
        e.preventDefault()
        setManual(true)
    }
    
    const handleUpload = (e) => {
        e.preventDefault()
        setUpload(true)
    }

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (title === '') {
            alert('You must give this data set a title')
        } else if (independent === '') {
            alert('You must identify the independent variable of this data set')
        } else if (dependent === '') {
            alert('You must identify the dependent variable of this data set')
        } else if (precision < 1) {
            alert('Precision must be a positive integer')
        } else if (dataSet === '') {
            alert('You must provide a data set')
        } else {
            const cleanedDataSet = CleanCollection(dataSet)
            const parsedDataSet = JSON.parse(cleanedDataSet)
            if (parsedDataSet.length < 10) {
                alert('You must include at least 10 points in your data set')
            } else {
                const submission = {
                    title: title,
                    independent: independent,
                    dependent: dependent,
                    precision: parseInt(precision),
                    dataSet: parsedDataSet
                }
                try {
                    const predictions = await axios.post(REACT_APP_SERVER_URL + 'api',
                        submission
                    )
                    setModels(predictions.data.regressions)
                    setManual(false)
                    setUpload(false)
                    setSubmitted(true)
                } catch (error) {
                    alert(error)
                }
            }
        }
    }

    if (!manual && !upload && !submitted) {
        return (
            <main>
                <h1>Add a New Data Set</h1>
                <p>Did you want to manually type in your data set, or would you rather upload a CSV file of it?</p>
                <section className="submission">
                    <button 
                        onClick={handleManual}
                        className="submission"
                    >
                        Manual
                    </button>
                    <button 
                        onClick={handleUpload}
                        className="submission"
                    >
                        Upload
                    </button>
                </section>
            </main>
        )
    }

    if (manual) {
        return (
            <main>
                <h1>Add a New Data Set</h1>
                <CreateSet
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
            </main>
        )
    }
    
    if (upload) {
        return (
            <main>
                <h1>Add a New Data Set</h1>
                <SpreadsheetInput 
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
                    setDataSet={setDataSet}
                />
            </main>
        )
    }
    
    if (submitted) {
        return (
            <Redirect 
                to={{
                    pathname: "/analysis",
                    state: {
                        models: models, 
                        opinions: { favorite: null },
                        user: props.user,
                        stored: false
                    }
                }}
            />
        )
    }
}

export default Submission