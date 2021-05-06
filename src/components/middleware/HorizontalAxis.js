function HorizontalAxis(points, scale = 0) {
    let independents = []
    for (const point of points) {
        independents.push(point.x)
    }
    const maximum = Math.max(...independents)
    const minimum = Math.min(...independents)
    const range = maximum - minimum
    const scaledRange = range * (1 + scale)
    const tail = (scaledRange - range) / 2
    const scaledMinimum = minimum - tail
    const scaledMaximum = maximum + tail
    const increment = scaledRange / 100
    console.log('SCALED MAXIMUM: ', scaledMaximum)
    const axis = {
        minimum: scaledMinimum,
        maximum: scaledMaximum,
        increment: increment
    }
    return axis
}

export default HorizontalAxis