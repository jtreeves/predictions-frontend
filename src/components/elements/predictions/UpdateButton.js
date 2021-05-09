function UpdateButton() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const submitButton = document.getElementById('submit-button')
        const undoButton = document.getElementById('undo-submit-button')
        const warning = document.getElementById('submit-warning')
        const deleteButton = document.getElementById('delete-button')
        undoButton.style.display = 'block'
        warning.style.display = 'block'
        deleteButton.style.display = 'none'
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