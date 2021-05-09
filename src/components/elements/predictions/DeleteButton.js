function DeleteButton() {
    const handleDelete = (e) => {
        e.preventDefault()
        document.getElementById('delete-button').scrollIntoView()
    }

    return (
        <button onClick={handleDelete}>
            Delete Set
        </button>
    )
}

export default DeleteButton