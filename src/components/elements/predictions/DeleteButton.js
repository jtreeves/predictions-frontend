function DeleteButton() {
    const handleDelete = (e) => {
        e.preventDefault()
        const deleteButton = document.getElementById('delete-button')
        const undoDeleteButton = document.getElementById('undo-delete-button')
        const deleteWarning = document.getElementById('delete-warning')
        const submitButton = document.getElementById('submit-button')
        const undoSubmitButton = document.getElementById('undo-submit-button')
        const submitWarning = document.getElementById('submit-warning')
        deleteButton.style.display = 'block'
        undoDeleteButton.style.display = 'block'
        deleteWarning.style.display = 'block'
        submitButton.style.display = 'none'
        undoSubmitButton.style.display = 'none'
        submitWarning.style.display = 'none'
        deleteButton.innerText = 'Yes, Delete Set'
        deleteButton.scrollIntoView()
    }

    return (
        <button onClick={handleDelete}>
            Delete Set
        </button>
    )
}

export default DeleteButton