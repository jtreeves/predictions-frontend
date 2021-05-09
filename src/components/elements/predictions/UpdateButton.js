function UpdateButton() {
    const handleSubmit = (e) => {
        e.preventDefault()
        document.getElementById('submit-button').scrollIntoView()
    }

    return (
        <button onClick={handleSubmit}>
            Update Set
        </button>
    )
}

export default UpdateButton