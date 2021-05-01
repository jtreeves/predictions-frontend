function VerticalRange(collections) {
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
    return range
}

export default VerticalRange