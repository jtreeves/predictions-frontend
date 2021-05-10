import { useState, useEffect, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import CreateSet from './CreateSet'
import CleanCollection from '../../utilities/predictions/CleanCollection'
import SpreadsheetInput from '../../utilities/predictions/SpreadsheetInput'
import AllFormElements from '../../utilities/predictions/AllFormElements'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function OriginalData(props) {
    const [title, setTitle] = useState(props.title)
    const [independent, setIndependent] = useState(props.independent)
    const [dependent, setDependent] = useState(props.dependent)
    const [precision, setPrecision] = useState(props.precision)
    const [dataSet, setDataSet] = useState(props.dataSet)
    const [models, setModels] = useState({})
    const [source, setSource] = useState(props.source)
    const [initiated, setInitiated] = useState(props.initiated)
    const [submitted, setSubmitted] = useState(false)    
    const [deleted, setDeleted] = useState(false)
    const spreadsheet = useRef(null)

    useEffect(() => {
        if (submitted) {
            setSubmitted(false)
        }
    }, [submitted])

    const user = props.user
    const stored = props.stored
    const opinions = {
        favorite: props.favorite,
        note: props.note
    }

    let submitText = ''
    if (!initiated) {
        submitText = 'Create Set'
    } else {
        submitText = 'Update Set'
    }

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

    const handleUpload = (e) => {
        spreadsheet.current.click()
    }

    const handleSpreadsheet = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = (e) => {
            const fileInput = e.target.result
            const formattedInput = SpreadsheetInput(fileInput)
            setDataSet(formattedInput)
        }
        reader.readAsText(file)
    }

    const handleUndoSubmit = (e) => {
        e.preventDefault()
        const allElements = AllFormElements()
        allElements.submitButton.innerText = 'Update Set'
        allElements.deleteButton.innerText = 'Delete Set'
        allElements.deleteButton.style.display = 'block'
        allElements.undoSubmitButton.style.display = 'none'
        allElements.submitWarning.style.display = 'none'
        setTitle(props.title)
        setIndependent(props.independent)
        setDependent(props.dependent)
        setPrecision(props.precision)
        setDataSet(props.dataSet)
        window.scrollTo(0, 0)
    }
    
    const handleUndoDelete = (e) => {
        e.preventDefault()
        const allElements = AllFormElements()
        allElements.deleteButton.innerText = 'Delete Set'
        allElements.submitButton.innerText = 'Update Set'
        allElements.submitButton.style.display = 'block'
        allElements.undoDeleteButton.style.display = 'none'
        allElements.deleteWarning.style.display = 'none'
        window.scrollTo(0, 0)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const allElements = AllFormElements()

        if (allElements.submitButton.innerText === 'Update Set') {
            allElements.submitButton.innerText = 'Update Set with New Data'
            allElements.undoSubmitButton.style.display = 'block'
            allElements.submitWarning.style.display = 'block'
            allElements.deleteButton.style.display = 'none'
        } else {
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
                    if (!stored) {
                        try {
                            const predictions = await axios.post(REACT_APP_SERVER_URL + 'api',
                                submission
                            )
                            allElements.submitButton.innerText = 'Update Set'
                            allElements.deleteButton.style.display = 'none'
                            allElements.undoSubmitButton.style.display = 'none'
                            allElements.submitWarning.style.display = 'none'
                            setModels(predictions.data.regressions)
                            setInitiated(true)
                            setSubmitted(true)
                        } catch (error) {
                            alert(error)
                        }
                    } else {
                        try {
                            await axios.delete(REACT_APP_SERVER_URL + 'predictions/' + source)
                            const predictions = await axios.post(REACT_APP_SERVER_URL + 'api', submission)
                            setSource(predictions.data.regressions.source)
                            await axios.post(REACT_APP_SERVER_URL + 'predictions/' + user.id, { source })
                            await axios.put(REACT_APP_SERVER_URL + 'predictions/' + source + '/favorite', {favorite: opinions.favorite})
                            await axios.put(REACT_APP_SERVER_URL + 'predictions/' + source + '/note', {note: opinions.note})
                            allElements.submitButton.innerText = 'Update Set'
                            allElements.deleteButton.style.display = 'block'
                            allElements.undoSubmitButton.style.display = 'none'
                            allElements.submitWarning.style.display = 'none'
                            setModels(predictions.data.regressions)
                            setSubmitted(true)
                        } catch(error) {
                            alert(error)
                        }
                    }
                }
            }
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        const allElements = AllFormElements()

        if (allElements.deleteButton.innerText === 'Delete Set') {
            allElements.deleteButton.innerText = 'Yes, Delete Set'
            allElements.undoDeleteButton.style.display = 'block'
            allElements.deleteWarning.style.display = 'block'
            allElements.submitButton.style.display = 'none'
        } else {
            try {
                await axios.delete(REACT_APP_SERVER_URL + 'predictions/' + source)
                allElements.deleteButton.innerText = 'Delete Set'
                allElements.undoDeleteButton.style.display = 'none'
                allElements.deleteWarning.style.display = 'none'
                allElements.submitButton.style.display = 'block'
                setDeleted(true)
            } catch(error) {
                alert(error)
            }
        }
    }

    if (!initiated) {
        return (
            <section>
                <input 
                    type="file" 
                    ref={spreadsheet}
                    onChange={handleSpreadsheet}
                    style={{display: 'none'}} 
                />

                <button 
                    onClick={handleUpload}
                >
                    Upload
                </button>

                <CreateSet 
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
                    handleSubmit={handleSubmit}
                    handleDelete={handleDelete}
                    handleUndoSubmit={handleUndoSubmit}
                    handleUndoDelete={handleUndoDelete}
                    initiated={initiated}
                    stored={stored}
                    submitText={submitText}
                />
            </section>
        )
    } else if (!submitted && !deleted) {
        return (
            <CreateSet 
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
                handleSubmit={handleSubmit}
                handleDelete={handleDelete}
                handleUndoSubmit={handleUndoSubmit}
                handleUndoDelete={handleUndoDelete}
                initiated={initiated}
                stored={stored}
                submitText={submitText}
            />
        )
    } else if (submitted) {
        return (
            <Redirect 
                to={{
                    pathname: "/analysis",
                    state: {
                        models: models, 
                        opinions: opinions,
                        user: user,
                        initiated: initiated,
                        stored: stored
                    }
                }}
            />
        )
    } else if (deleted) {
        return (
            <Redirect to="/datasets" />
        )
    }
}

export default OriginalData