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
    })

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
                if (!stored) {
                    try {
                        const predictions = await axios.post(REACT_APP_SERVER_URL + 'api',
                            submission
                        )
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
        try {
            e.preventDefault()
            await axios.delete(REACT_APP_SERVER_URL + 'predictions/' + source)
            setDeleted(true)
        } catch(error) {
            alert(error)
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