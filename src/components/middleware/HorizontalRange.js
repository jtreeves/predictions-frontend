function HorizontalRange(points) {
    let independents = []
    for (const point of points) {
        independents.push(point[0])
    }
    const maximum = Math.max(...independents)
    const minimum = Math.min(...independents)
    const range = maximum - minimum
    return range
}

export default HorizontalRange