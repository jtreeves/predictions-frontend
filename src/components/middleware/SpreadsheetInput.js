import { useState } from 'react'
import CreateSet from '../elements/predictions/CreateSet'

function SpreadsheetInput(props) {
    const [dataSet, setDataSet] = useState('')
    const [uploaded, setUploaded] = useState(false)

    const handleSpreadsheet = (e) => {
        e.preventDefault()
        const input = document.querySelector("#file-input")
        const output = document.querySelector("#file-output")
        const file = input.files[0]
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
            output.textContent = encapsulatedPoints
            setDataSet(encapsulatedPoints)
            setUploaded(true)
        }
        reader.readAsText(file)
    }

    if (!uploaded) {
        return (
            <div>
                <input type="file" id="file-input" />
                <button id="upload-button" onClick={handleSpreadsheet}>Upload Data</button>
                <pre id="file-output" />
            </div>
        )
    } else {
        return (
            <CreateSet 
                heading="Create a New Data Set"
                handleSubmit={props.handleSubmit}
                title={props.title}
                handleTitle={props.handleTitle}
                independent={props.independent}
                handleIndependent={props.handleIndependent}
                dependent={props.dependent}
                handleDependent={props.handleDependent}
                precision={props.precision}
                handlePrecision={props.handlePrecision}
                dataSet={dataSet}
                handleDataSet={props.handleDataSet}
            />
        )
    }
    
}

export default SpreadsheetInput