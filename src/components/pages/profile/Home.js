// Import external dependencies
import { useState } from 'react'
import axios from 'axios'
import alert from 'alert'

// Import internal component
import FormGroup from '../../elements/main/FormGroup'

// Create shortcut for environmental variable
const appServer = process.env.REACT_APP_SERVER_URL

// Create function
function Profile(props) {
    // Set initial state values
    const [title, setTitle] = useState('')
    const [independent, setIndependent] = useState('')
    const [dependent, setDependent] = useState('')
    const [dataSet, setDataSet] = useState([])
    const [results, setResults] = useState()

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

    // Set dataSet from form
    const handleDataSet = (e) => {
        setDataSet(e.target.value)
    }

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault()
        const submission = {
            title: title,
            independent: independent,
            dependent: dependent,
            dataSet: dataSet
        }
        console.log(`SUBMISSION: ${submission}`)
        try {
            const sentData = await axios.post(
                appServer + '/api',
                submission
            )
            console.log(`SENTDATA: ${sentData}`)
            console.log(`SENTDATA KEYS: ${Object.keys(sentData)}`)
            setResults(sentData.response.data.regressions)
        } catch (error) {
            console.log(`ERROR: ${error}`)
            console.log(`ERROR KEYS: ${Object.keys(error)}`)
            alert(error)
        }
    }

    return (
        <div>
            <h1>Profile</h1>
            <p><strong>Name:</strong> {props.user.name}</p> 
            <p><strong>Email:</strong> {props.user.email}</p> 
            <p><strong>ID:</strong> {props.user.id}</p>
            <form onSubmit={handleSubmit}>
                <FormGroup
                    type="text"
                    label="title"
                    value={title}
                    display="Title"
                    onChange={handleTitle}
                />
                <FormGroup
                    type="text"
                    label="independent"
                    value={independent}
                    display="Independent"
                    onChange={handleIndependent}
                />
                <FormGroup
                    type="text"
                    label="dependent"
                    value={dependent}
                    display="Dependent"
                    onChange={handleDependent}
                />
                <FormGroup
                    type="text"
                    label="dataSet"
                    value={dataSet}
                    display="Data Set"
                    onChange={handleDataSet}
                />
                <button type="submit">Submit</button>
            </form>
            <p>{results}</p>
        </div>
    )
}

// Export function
export default Profile