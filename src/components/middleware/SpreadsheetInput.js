import { useState } from 'react'
import CreateSet from '../elements/predictions/CreateSet'

function SpreadsheetInput(props) {
    const [dataSet, setDataSet] = useState('')

    const handleSpreadsheet = (e) => {
        e.preventDefault()
        const file = document.querySelector("#csv").files[0]
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

    if (dataSet === '') {
        return (
            <div>
                <input type="file" id="csv" />
                <button id="upload" onClick={handleSpreadsheet}>Upload Data</button>
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