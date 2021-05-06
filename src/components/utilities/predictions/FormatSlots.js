function FormatSlots(number, operation = 'addition') {
    let slot = ''
    if (operation === 'addition') {
        if (number > 0) {
            slot = `+ ${number}`
        } else {
            number *= -1
            slot = `- ${number}`
        }
    } else if (operation === 'subtraction') {
        if (number > 0) {
            slot = `- ${number}`
        } else {
            number *= -1
            slot = `+ ${number}`
        }
    } else {
        if (number > 0) {
            slot = `-${number}`
        } else {
            number *= -1
            slot = `${number}`
        }
    }
    return slot
}

export default FormatSlots