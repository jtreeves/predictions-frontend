import AllFormElements from '../../utilities/predictions/AllFormElements'

function UpdateSet() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const allElements = AllFormElements()
        allElements.submitButton.style.display = 'block'
        allElements.undoSubmitButton.style.display = 'block'
        allElements.submitWarning.style.display = 'block'
        allElements.deleteButton.style.display = 'none'
        allElements.undoDeleteButton.style.display = 'none'
        allElements.deleteWarning.style.display = 'none'
        allElements.submitButton.innerText = 'Update Set with New Data'
        allElements.submitButton.scrollIntoView()
    }

    return (
        <button 
            onClick={handleSubmit}
            className="analysis"
        >
            Update Set
        </button>
    )
}

export default UpdateSet