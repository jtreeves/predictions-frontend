function VerticalAxis(collections) {
    let maxima = []
    let minima = []
    for (const collection of collections) {
        let dependents = []
        for (const coordinates of collection) {
            dependents.push(coordinates.y)
        }
        maxima.push(Math.max(...dependents))
        minima.push(Math.min(...dependents))
    }
    const maximum = Math.max(...maxima)
    const minimum = Math.min(...minima)
    const range = maximum - minimum
    const axis = {
        maximum: maximum,
        minimum: minimum,
        range: range
    }
    return axis
}

export default VerticalAxis