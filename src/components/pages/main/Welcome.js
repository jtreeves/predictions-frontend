import '../../../style/welcome.css'
import { useRef } from 'react'

// Create function
function Welcome() {
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
            const results = document.querySelector('#results')
            results.innerText = data
            // const newLines = [...data.matchAll('\r\n')]
            // const indices = [0]
            // for (const newLine of newLines) {
            //     indices.push(newLine.index)
            //     indices.push(newLine.index + 2)
            // }
            // indices.push(data.length)
            // let dataSections = []
            // for (let i = 0; i < indices.length - 1; i++) {
            //     dataSections.push(data.slice(indices[i], indices[i + 1]))
            // }
            // let points = []
            // for (let i = 0; i < dataSections.length; i++) {
            //     if (i%2 === 0) {
            //         points.push(dataSections[i])
            //     }
            // }
            // let lineOfPoints = ''
            // for (const point of points) {
            //     lineOfPoints += '[' + point + '],'
            // }
            // const trimmedLine = lineOfPoints.slice(0, -1)
            // const encapsulatedPoints = '[' + trimmedLine + ']'
            // props.setDataSet(encapsulatedPoints)
        }
        reader.readAsText(file)
    }
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
            <p id="results"></p>
        </main>
    )
}

// Export function
export default Welcome