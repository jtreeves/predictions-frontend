function UpdateButton() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const rawDataForm = document.getElementById('raw-data-form')
        const submitButton = document.getElementById('submit-button')
        const deleteButton = document.getElementById('delete-button')
        const undoButton = document.createElement('button')
        const explanation = document.createElement('p')
        submitButton.innerText = 'Update Set with New Data'
        undoButton.innerText = 'Abandon All Changes'
        explanation.innerText = 'Make any changes you want, then click the update button'
        rawDataForm.insertBefore(explanation, submitButton)
        rawDataForm.insertBefore(undoButton, deleteButton)
        deleteButton.style.display = 'none'
        submitButton.scrollIntoView()
        undoButton.onclick = (e) => {
            e.preventDefault()
            window.scrollTo(0, 0)
            deleteButton.style.display = 'block'
            submitButton.innerText = 'Update Set'
            undoButton.remove()
            explanation.remove()
        }
    }

    return (
        <button onClick={handleSubmit}>
            Update Set
        </button>
    )
}

export default UpdateButton