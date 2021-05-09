function UpdateButton() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const submitButton = document.getElementById('submit-button')
        const undoSubmitButton = document.getElementById('undo-submit-button')
        const submitWarning = document.getElementById('submit-warning')
        const deleteButton = document.getElementById('delete-button')
        const undoDeleteButton = document.getElementById('undo-delete-button')
        const deleteWarning = document.getElementById('delete-warning')
        submitButton.style.display = 'block'
        undoSubmitButton.style.display = 'block'
        submitWarning.style.display = 'block'
        deleteButton.style.display = 'none'
        undoDeleteButton.style.display = 'none'
        deleteWarning.style.display = 'none'
        submitButton.innerText = 'Update Set with New Data'
        submitButton.scrollIntoView()
    }

    return (
        <button onClick={handleSubmit}>
            Update Set
        </button>
    )
}

export default UpdateButton