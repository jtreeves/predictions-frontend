import { useState } from 'react'
import axios from 'axios'
import CreateSet from './CreateSet'
import { Redirect } from 'react-router-dom'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function UpdateSet(props) {
    const [updateClicked, setUpdateClicked] = useState(false)
    const [saveClicked, setSaveClicked] = useState(false)
    const [title, setTitle] = useState(props.title)
    const [independent, setIndependent] = useState(props.independent)
    const [dependent, setDependent] = useState(props.dependent)
    const [precision, setPrecision] = useState(props.precision)
    const [dataSet, setDataSet] = useState(props.dataSet)
    const sections = {
        favorite: {},
        note: {}
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

    const handleUpdate = (e) => {
        e.preventDefault()
        setUpdateClicked(true)
    }
    
    const handleSave = async (e) => {
        e.preventDefault()
        const submission = {
            title: title,
            independent: independent,
            dependent: dependent,
            precision: precision,
            dataSet: dataSet
        }
        try {
            await axios.delete(REACT_APP_SERVER_URL + 'predictions/' + props.source)
            const predictions = await axios.post(REACT_APP_SERVER_URL + 'api', submission)
            await axios.post(REACT_APP_SERVER_URL + 'predictions/' + props.user.id, { source: predictions.data.regressions.source, sections })
            setSaveClicked(true)
        } catch(error) {
            alert(error.response.data.msg)
            console.log(`UPDATED PREDICTION ERROR: ${error}`)
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