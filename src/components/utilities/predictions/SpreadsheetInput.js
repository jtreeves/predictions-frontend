function SpreadsheetInput(data) {
    const newLines = [...data.matchAll('\r\n')]
    const indices = [0]
    for (const newLine of newLines) {
        indices.push(newLine.index)
        indices.push(newLine.index + 2)
    }
    indices.push(data.length)
    let dataSections = []
    for (let i = 0; i < indices.length - 1; i++) {
        dataSections.push(data.slice(indices[i], indices[i + 1]))
    }
    let points = []
    for (let i = 0; i < dataSections.length; i++) {
        if (i%2 === 0) {
            points.push(dataSections[i])
        }
    }
    let lineOfPoints = ''
    for (const point of points) {
        lineOfPoints += '[' + point + '],'
    }
    const trimmedLine = lineOfPoints.slice(0, -1)
    const encapsulatedPoints = '[' + trimmedLine + ']'
    return encapsulatedPoints
}

export default SpreadsheetInput