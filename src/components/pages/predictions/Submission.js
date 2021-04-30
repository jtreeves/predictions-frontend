import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import CreateSet from '../../elements/predictions/CreateSet'
import SpreadsheetInput from '../../middleware/SpreadsheetInput'
import CleanCollection from '../../middleware/CleanCollection'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Submission(props) {
    const [title, setTitle] = useState('')
    const [independent, setIndependent] = useState('')
    const [dependent, setDependent] = useState('')
    const [precision, setPrecision] = useState('')
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
        const cleanedDataSet = CleanCollection(dataSet)
        const submission = {
            title: title,
            independent: independent,
            dependent: dependent,
            precision: precision,
            dataSet: cleanedDataSet
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

    if (!manual && !upload && !submitted) {
        return (
            <div>
                <p>Did you want to manually type in your data set, or would you rather upload a CSV file of it?</p>
                <button onClick={handleManual}>Manual</button>
                <button onClick={handleUpload}>Upload</button>
            </div>
        )
    }

    if (manual) {
        return (
            <div>
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
            </div>
        )
    }
    
    if (upload) {
        return (
            <div>
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
                    handleDataSet={handleDataSet}
                />
            </div>
        )
    }
    
    if (submitted) {
        return (
            <Redirect 
                to={{
                    pathname: "/analysis",
                    state: {
                        models: models, 
                        opinions: null,
                        user: props.user,
                        stored: false
                    }
                }}
            />
        )
    }
}

export default Submission