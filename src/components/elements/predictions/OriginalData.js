import { useState, useEffect, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import EditSet from './EditSet'
import SpreadsheetInput from '../../utilities/predictions/SpreadsheetInput'
import VettedInputs from '../../utilities/predictions/VettedInputs'
import AllFormElements from '../../utilities/predictions/AllFormElements'
import ResetFormElements from '../../utilities/predictions/ResetFormElements'
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

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleIndependent = (e) => {
        setIndependent(e.target.value)
    }

    const handleDependent = (e) => {
        setDependent(e.target.value)
    }

    const handlePrecision = (e) => {
        setPrecision(e.target.value)
    }
    
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
        ResetFormElements()
        setTitle(props.title)
        setIndependent(props.independent)
        setDependent(props.dependent)
        setPrecision(props.precision)
        setDataSet(props.dataSet)
        window.scrollTo(0, 0)
    }
    
    const handleUndoDelete = (e) => {
        e.preventDefault()
        ResetFormElements()
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
            const submission = VettedInputs(title, independent, dependent, precision, dataSet)
            
            if (submission) {
                if (!stored) {
                    try {
                        const predictions = await axios.post(
                            REACT_APP_SERVER_URL + 'api',
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
                        await axios.delete(
                            REACT_APP_SERVER_URL + 'predictions/' + source
                        )
                        const predictions = await axios.post(
                            REACT_APP_SERVER_URL + 'api', 
                            submission
                        )
                        setSource(predictions.data.regressions.source)
                        await axios.post(
                            REACT_APP_SERVER_URL + 'predictions/' + user.id, 
                            {source}
                        )
                        await axios.put(
                            REACT_APP_SERVER_URL + 'predictions/' + source + '/favorite', 
                            {favorite: opinions.favorite}
                        )
                        await axios.put(
                            REACT_APP_SERVER_URL + 'predictions/' + source + '/note', 
                            {note: opinions.note}
                        )
                        ResetFormElements()
                        setModels(predictions.data.regressions)
                        setSubmitted(true)
                    } catch(error) {
                        alert(error)
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
                await axios.delete(
                    REACT_APP_SERVER_URL + 'predictions/' + source
                )
                ResetFormElements()
                setDeleted(true)
            } catch(error) {
                alert(error)
            }
        }
    }

    const rawDataForm = <EditSet 
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

    if (!initiated) {
        return (
            <article>
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

                {rawDataForm}
            </article>
        )
    } else if (!submitted && !deleted) {
        return (
            <article>
                {rawDataForm}
            </article>
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