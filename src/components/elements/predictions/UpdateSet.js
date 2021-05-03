import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import CreateSet from './CreateSet'
import CleanCollection from '../../middleware/CleanCollection'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function UpdateSet(props) {
    const [updateClicked, setUpdateClicked] = useState(false)
    const [saveClicked, setSaveClicked] = useState(false)
    const [title, setTitle] = useState(props.title)
    const [independent, setIndependent] = useState(props.independent)
    const [dependent, setDependent] = useState(props.dependent)
    const [precision, setPrecision] = useState(props.precision)
    const [dataSet, setDataSet] = useState(props.dataSet)

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

    const handleUpdate = (e) => {
        e.preventDefault()
        setUpdateClicked(true)
    }
    
    const handleSave = async (e) => {
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
            const submission = {
                title: title,
                independent: independent,
                dependent: dependent,
                precision: parseInt(precision),
                dataSet: JSON.parse(cleanedDataSet)
            }
            try {
                await axios.delete(REACT_APP_SERVER_URL + 'predictions/' + props.source)
                const predictions = await axios.post(REACT_APP_SERVER_URL + 'api', submission)
                const source = predictions.data.regressions.source
                await axios.post(REACT_APP_SERVER_URL + 'predictions/' + props.user.id, { source })
                await axios.put(REACT_APP_SERVER_URL + 'predictions/' + source + '/favorite', {favorite: props.favorite})
                await axios.put(REACT_APP_SERVER_URL + 'predictions/' + source + '/note', {note: props.note})
                setSaveClicked(true)
            } catch(error) {
                alert(error.response.data.msg)
                console.log(`UPDATED PREDICTION ERROR: ${error}`)
            }
        }
    }

    if (!updateClicked && !saveClicked) {
        return (
            <form onSubmit={handleUpdate}>
                <button type="submit">Update</button>
            </form>
        )
    } else if (updateClicked && !saveClicked) {
        return (
            <CreateSet 
                heading="Update Data Set"
                handleSubmit={handleSave}
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
            <Redirect to="/profile" />
        )
    }
}

export default UpdateSet