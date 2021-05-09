function DeleteButton() {
    const handleDelete = (e) => {
        e.preventDefault()
        const rawDataForm = document.getElementById('raw-data-form')
        const submitButton = document.getElementById('submit-button')
        const deleteButton = document.getElementById('delete-button')
        const undoButton = document.createElement('button')
        const warning = document.createElement('p')
        deleteButton.innerText = 'Yes, Delete Set'
        undoButton.innerText = 'No, I Want to Keep the Data Set'
        warning.innerText = 'Are you sure you want to delete this set?'
        rawDataForm.insertBefore(warning, deleteButton)
        rawDataForm.insertBefore(undoButton, deleteButton)
        submitButton.style.display = 'none'
        deleteButton.scrollIntoView()
        undoButton.onclick = (e) => {
            e.preventDefault()
            window.scrollTo(0, 0)
            submitButton.style.display = 'block'
            deleteButton.innerText = 'Delete Set'
            undoButton.remove()
            warning.remove()
        }
    }

    return (
        <button onClick={handleDelete}>
            Delete Set
        </button>
    )
}

export default DeleteButton