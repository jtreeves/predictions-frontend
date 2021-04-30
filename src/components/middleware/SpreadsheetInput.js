function SpreadsheetInput() {
    const handleSubmit = (e) => {
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
        }
        reader.readAsText(file)
    }
    
    return (
        <div>
            <input type="file" id="file-input" />
            <button id="read-button" onClick={handleSubmit}>Read File</button>
            <pre id="file-output"></pre>
        </div>
    )
}

export default SpreadsheetInput