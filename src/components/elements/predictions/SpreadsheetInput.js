import CreateSet from './CreateSet'
import { useRef } from 'react'

function SpreadsheetInput(props) {
    const fileToUpload = useRef(null)
    const handleSpreadsheet = (e) => {
        e.preventDefault()
        const file = document.querySelector("#csv").files[0]
        console.log('FILE IN HANDLE: ', file)
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
            props.setDataSet(encapsulatedPoints)
        }
        reader.readAsText(file)
    }

    if (props.dataSet === '') {
        return (
            <form>
                <input type="file" id="csv" 
                // ref={fileToUpload}
                // style={{display: 'none'}} 
                />
                {/* <button
                    onClick={() => fileToUpload.current.click()}
                >Browse</button> */}
                <button 
                    id="upload" 
                    onClick={handleSpreadsheet}
                    className="submission"
                >
                    Upload Data
                </button>
            </form>
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
                dataSet={props.dataSet}
                handleDataSet={props.handleDataSet}
                stored={false}
                button="Create Set"
            />
        )
    }
    
}

export default SpreadsheetInput