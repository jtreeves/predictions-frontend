function SpreadsheetInput() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const input = document.querySelector("#file-input")
        const output = document.querySelector("#file-output")
        const file = input.files[0]
		const reader = new FileReader()
        reader.onload = (e) => {
            const data = e.target.result
            let collection = data
            const returns = [...collection.matchAll('\r\n')]
            const indices = [0]
            for (const array of returns) {
                indices.push(array.index)
                indices.push(array.index + 2)
            }
            indices.push(collection.length)
            let slices = []
            for (let i = 0; i < indices.length - 1; i++) {
                slices.push(collection.slice(indices[i], indices[i + 1]))
            }
            let trimmedSlices = []
            for (let i = 0; i < slices.length; i++) {
                if (i%2 === 0) {
                    trimmedSlices.push(slices[i])
                }
            }
            let stringedList = ''
            for (const slice of trimmedSlices) {
                stringedList += '[' + slice + '],'
            }
            const trimmedString = stringedList.slice(0, -1)
            const final = '[' + trimmedString + ']'
            output.textContent = final
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