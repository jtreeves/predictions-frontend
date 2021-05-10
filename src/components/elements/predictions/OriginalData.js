import { useState, useEffect, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import CreateSet from './CreateSet'
import CleanCollection from '../../utilities/predictions/CleanCollection'
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
            const data = e.target.result
            const newLines = [...data.matchAll('\r\n')]
            const indices = [0]
            for (const newLine of newLines) {
                indices.push(newLine.index)
                indices.push(newLine.index + 2)
            }
            indices.push(data.length)
            let dataSections = []
            for (let i = 0; i < indices.length - 1; i++) {
                dataSections.push(data.slice(indices[i], indices[i + 1]))
            }
            let points = []
            for (let i = 0; i < dataSections.length; i++) {
                if (i%2 === 0) {
                    points.push(dataSections[i])
                }
            }
            let lineOfPoints = ''
            for (const point of points) {
                lineOfPoints += '[' + point + '],'
            }
            const trimmedLine = lineOfPoints.slice(0, -1)
            const encapsulatedPoints = '[' + trimmedLine + ']'
            setDataSet(encapsulatedPoints)
        }
        reader.readAsText(file)
    }

    const handleUndoSubmit = (e) => {
        e.preventDefault()
        const submitButton = document.getElementById('submit-button')
        const deleteButton = document.getElementById('delete-button')
        const undoButton = document.getElementById('undo-submit-button')
        const warning = document.getElementById('submit-warning')
        submitButton.innerText = 'Update Set'
        deleteButton.innerText = 'Delete Set'
        deleteButton.style.display = 'block'
        undoButton.style.display = 'none'
        warning.style.display = 'none'
        setTitle(props.title)
        setIndependent(props.independent)
        setDependent(props.dependent)
        setPrecision(props.precision)
        setDataSet(props.dataSet)
        window.scrollTo(0, 0)
    }
    
    const handleUndoDelete = (e) => {
        e.preventDefault()
        const deleteButton = document.getElementById('delete-button')
        const submitButton = document.getElementById('submit-button')
        const undoButton = document.getElementById('undo-delete-button')
        const warning = document.getElementById('delete-warning')
        deleteButton.innerText = 'Delete Set'
        submitButton.innerText = 'Update Set'
        submitButton.style.display = 'block'
        undoButton.style.display = 'none'
        warning.style.display = 'none'
        window.scrollTo(0, 0)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const submitButton = document.getElementById('submit-button')
        const undoButton = document.getElementById('undo-submit-button')
        const warning = document.getElementById('submit-warning')
        const deleteButton = document.getElementById('delete-button')

        if (submitButton.innerText === 'Update Set') {
            submitButton.innerText = 'Update Set with New Data'
            undoButton.style.display = 'block'
            warning.style.display = 'block'
            deleteButton.style.display = 'none'
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
                            submitButton.innerText = 'Update Set'
                            deleteButton.style.display = 'none'
                            undoButton.style.display = 'none'
                            warning.style.display = 'none'
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
                            submitButton.innerText = 'Update Set'
                            deleteButton.style.display = 'block'
                            undoButton.style.display = 'none'
                            warning.style.display = 'none'
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
        const deleteButton = document.getElementById('delete-button')
        const undoButton = document.getElementById('undo-delete-button')
        const warning = document.getElementById('delete-warning')
        const submitButton = document.getElementById('submit-button')

        if (deleteButton.innerText === 'Delete Set') {
            deleteButton.innerText = 'Yes, Delete Set'
            undoButton.style.display = 'block'
            warning.style.display = 'block'
            submitButton.style.display = 'none'
        } else {
            try {
                await axios.delete(REACT_APP_SERVER_URL + 'predictions/' + source)
                deleteButton.innerText = 'Delete Set'
                undoButton.style.display = 'none'
                warning.style.display = 'none'
                submitButton.style.display = 'block'
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