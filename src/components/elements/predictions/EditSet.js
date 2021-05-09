import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import CreateSet from './CreateSet'
import CleanCollection from '../../utilities/predictions/CleanCollection'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function EditSet(props) {
    const [updateClicked, setUpdateClicked] = useState(false)
    const [saveClicked, setSaveClicked] = useState(false)
    const [title, setTitle] = useState(props.title)
    const [independent, setIndependent] = useState(props.independent)
    const [dependent, setDependent] = useState(props.dependent)
    const [precision, setPrecision] = useState(props.precision)
    const [dataSet, setDataSet] = useState(props.dataSet)
    const [models, setModels] = useState({})

    const user = props.user

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
                    const predictions = await axios.post(REACT_APP_SERVER_URL + 'api', submission)
                    setModels(predictions.data.regressions)
                    // const results = predictions.data.regressions
                    setSaveClicked(true)
                } catch(error) {
                    alert(error.response.data.msg)
                    console.log(`UPDATED PREDICTION ERROR: ${error}`)
                }
            }
        }
    }

    if (!updateClicked && !saveClicked) {
        return (
            <button onClick={handleUpdate}>Update</button>
        )
    } else if (updateClicked && !saveClicked) {
        return (
            <CreateSet 
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
            <Redirect 
                to={{
                    pathname: "/analysis",
                    state: {
                        models: models, 
                        opinions: { favorite: null },
                        user: user,
                        stored: false
                    }
                }}
            />
        )
    }
}

export default EditSet