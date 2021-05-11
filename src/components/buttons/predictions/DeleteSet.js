import AllFormElements from '../../utilities/predictions/AllFormElements'

function DeleteSet() {
    const handleDelete = (e) => {
        e.preventDefault()
        const allElements = AllFormElements()
        allElements.deleteButton.style.display = 'block'
        allElements.undoDeleteButton.style.display = 'block'
        allElements.deleteWarning.style.display = 'block'
        allElements.submitButton.style.display = 'none'
        allElements.undoSubmitButton.style.display = 'none'
        allElements.submitWarning.style.display = 'none'
        allElements.deleteButton.innerText = 'Yes, Delete Set'
        allElements.deleteButton.scrollIntoView()
    }

    return (
        <button 
            onClick={handleDelete}
            className="analysis"
        >
            Delete Set
        </button>
    )
}

export default DeleteSet