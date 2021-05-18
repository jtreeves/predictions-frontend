function EmptyInputAlert(input, type) {
    if (input === '') {
        alert(`You must provide a value for ${type}`)
        return false
    } else {
        return true
    }
}

export default EmptyInputAlert