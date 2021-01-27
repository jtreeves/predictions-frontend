import { useState } from 'react'
import axios from 'axios'

import FormGroup from '../../elements/main/FormGroup'

const key = process.env.REGRESSIONZ_API_KEY
const regressionz = 'https://regressionz.herokuapp.com/api'

// Create function
function Profile(props) {
    // Set initial state values
    const [source, setSource] = useState('')
    const [title, setTitle] = useState('')
    const [independent, setIndependent] = useState('')
    const [dependent, setDependent] = useState('')
    const [dataSet, setDataSet] = useState([])
    
    // Set source for form
    const handleSource = (e) => {
        setSource(e.target.value)
    }

    // Set title for form
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    // Set independent for form
    const handleIndependent = (e) => {
        setIndependent(e.target.value)
    }

    // Set dependent for form
    const handleDependent = (e) => {
        setDependent(e.target.value)
    }

    // Set dataSet for form
    const handleDataSet = (e) => {
        setDataSet(e.target.value)
    }

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(
                regressionz + '?key=' + key + '&source=' + source, 
                {
                    'title': title,
                    'independent': independent,
                    'dependent': dependent,
                    'data_set': dataSet
                }
            )
        } catch (error) {
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
                    type="hidden" 
                    label="source" 
                    value={source}
                    onChange={handleSource} 
                />
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
        </div>
    )
}

// Export function
export default Profile