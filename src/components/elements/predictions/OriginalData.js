import { useState, useEffect } from 'react'
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
    const [submitted, setSubmitted] = useState(false)    
    const [deleted, setDeleted] = useState(false)

    useEffect(() => {
        if (submitted) {
            setSubmitted(false)
        }
    }, [submitted])

    let source = props.source
    const user = props.user
    const stored = props.stored
    const opinions = {
        favorite: props.favorite,
        note: props.note
    }

    let buttonText = ''
    if (!stored) {
        buttonText = 'Create Set'
    } else {
        buttonText = 'Update Set'
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

    const handleUndoSubmit = (e) => {
        e.preventDefault()
        const submitButton = document.getElementById('submit-button')
        const undoButton = document.getElementById('undo-submit-button')
        const warning = document.getElementById('submit-warning')
        const deleteButton = document.getElementById('delete-button')
        submitButton.innerText = 'Update Set'
        undoButton.style.display = 'none'
        warning.style.display = 'none'
        deleteButton.style.display = 'block'
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
        const undoButton = document.getElementById('undo-delete-button')
        const warning = document.getElementById('delete-warning')
        const submitButton = document.getElementById('submit-button')
        deleteButton.innerText = 'Delete Set'
        undoButton.style.display = 'none'
        warning.style.display = 'none'
        submitButton.style.display = 'block'
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
                            deleteButton.style.display = 'block'
                            undoButton.style.display = 'none'
                            warning.style.display = 'none'
                            setModels(predictions.data.regressions)
                            setSubmitted(true)
                        } catch (error) {
                            alert(error)
                        }
                    } else {
                        try {
                            await axios.delete(REACT_APP_SERVER_URL + 'predictions/' + source)
                            const predictions = await axios.post(REACT_APP_SERVER_URL + 'api', submission)
                            source = predictions.data.regressions.source
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

    if (!submitted && !deleted) {
        return (
            <CreateSet 
                handleSubmit={handleSubmit}
                handleDelete={handleDelete}
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
                stored={props.stored}
                button={buttonText}
                handleUndoSubmit={handleUndoSubmit}
                handleUndoDelete={handleUndoDelete}
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