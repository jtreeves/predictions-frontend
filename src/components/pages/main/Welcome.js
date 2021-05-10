import '../../../style/welcome.css'
import { useRef, useState } from 'react'
import CreateSet from '../../elements/predictions/CreateSet'

// Create function
function Welcome() {
    const [title, setTitle] = useState('')
    const [independent, setIndependent] = useState('')
    const [dependent, setDependent] = useState('')
    const [precision, setPrecision] = useState(4)
    const [dataSet, setDataSet] = useState('')
    const inputFile = useRef(null)
    const handleClick = (e) => {
        console.log('INSIDE HANDLE CLICK')
        // e.preventDefault()
        inputFile.current.click()

    }
    const handleFile = (e) => {
        console.log('INSIDE HANDLE FILE')
        // e.preventDefault()
        const file = e.target.files[0]
        console.log('FILE: ', file)
        const reader = new FileReader()
        reader.onload = (e) => {
            const data = e.target.result
            // const results = document.querySelector('#results')
            // results.innerText = data
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
            // props.setDataSet(encapsulatedPoints)
            setDataSet(encapsulatedPoints)
        }
        reader.readAsText(file)
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
        // e.preventDefault()
        console.log('INSIDE HANDLE UPLOAD')
        // e.preventDefault()
        inputFile.current.click()
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    // const formSection = document.querySelector('#raw-form-data')
    // const submitButton = document.querySelector('#submit-button')
    // const uploadButton = document.createElement('button')
    // uploadButton.innerText = 'Upload CSV'
    // formSection.insertBefore(uploadButton, submitButton)

    return (
        <main>
            <h1>Welcome</h1>
            <p>Use our site to get regression models for any data set you enter.</p>
            <input type="file" style={{display: 'none'}} 
            ref={inputFile}
            onChange={handleFile}
            />
            <button onClick={handleClick}
            >Upload</button>
            {/* <p id="results"></p> */}
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
                // handleUpload={handleUpload}
                initiated={false}
                submitText='Create Set'
                // inputFile={inputFile}
                // handleFile={handleFile}
            />
        </main>
    )
}

// Export function
export default Welcome