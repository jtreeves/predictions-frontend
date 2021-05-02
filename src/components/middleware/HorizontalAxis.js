function HorizontalAxis(points) {
    let independents = []
    for (const point of points) {
        independents.push(point.x)
    }
    const maximum = Math.max(...independents)
    const minimum = Math.min(...independents)
    const range = maximum - minimum
    const axis = {
        maximum: maximum,
        minimum: minimum,
        range: range
    }
    return axis
}

export default HorizontalAxis