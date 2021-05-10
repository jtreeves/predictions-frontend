function AllFormElements() {
    const submitButton = document.getElementById('submit-button')
    const deleteButton = document.getElementById('delete-button')
    const undoSubmitButton = document.getElementById('undo-submit-button')
    const undoDeleteButton = document.getElementById('undo-delete-button')
    const submitWarning = document.getElementById('submit-warning')
    const deleteWarning = document.getElementById('delete-warning')
    const allElements = {
        submitButton: submitButton,
        deleteButton: deleteButton,
        undoSubmitButton: undoSubmitButton,
        undoDeleteButton: undoDeleteButton,
        submitWarning: submitWarning,
        deleteWarning: deleteWarning
    }
    return allElements
}

export default AllFormElements