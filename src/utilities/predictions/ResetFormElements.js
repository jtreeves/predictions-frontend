import AllFormElements from './AllFormElements'

function ResetFormElements() {
    const allElements = AllFormElements()
    allElements.submitButton.style.display = 'block'
    allElements.deleteButton.style.display = 'block'
    allElements.undoSubmitButton.style.display = 'none'
    allElements.undoDeleteButton.style.display = 'none'
    allElements.submitWarning.style.display = 'none'
    allElements.deleteWarning.style.display = 'none'
    allElements.submitButton.innerText = 'Update Set'
    allElements.deleteButton.innerText = 'Delete Set'
}

export default ResetFormElements