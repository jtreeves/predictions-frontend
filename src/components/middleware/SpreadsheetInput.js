function SpreadsheetInput() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const input = document.querySelector("#file-input")
        const output = document.querySelector("#file-output")
        const file = input.files[0]
		const reader = new FileReader()
        reader.onload = (e) => {
            const data = e.target.result
            output.textContent = data
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