function FormatPoints(points, roots = false) {
    let formattedPoints = ''
    if (points[0] !== null) {
        for (const point of points) {
            if (!roots) {
                formattedPoints += `$ (${point[0]}, ${point[1]}),\\: $`
            } else {
                formattedPoints += `$ (${point[0]}, 0.0),\\: $`
            }
        }
        formattedPoints = formattedPoints.slice(0, -5) + '$'
    } else {
        formattedPoints = `$ None $`
    }
    return formattedPoints
}

export default FormatPoints