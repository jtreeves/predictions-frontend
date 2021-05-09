function DeleteButton() {
    const handleDelete = (e) => {
        e.preventDefault()
        const deleteButton = document.getElementById('delete-button')
        const undoButton = document.getElementById('undo-delete-button')
        const warning = document.getElementById('delete-warning')
        const submitButton = document.getElementById('submit-button')
        undoButton.style.display = 'block'
        warning.style.display = 'block'
        submitButton.style.display = 'none'
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