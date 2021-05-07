function FormatPoints(points, precision, roots = false) {
    let formattedPoints = ''
    if (points[0] !== null) {
        for (const point of points) {
            let x = point[0]
            let y = point[1].toFixed(precision)
            if (!isNaN(x)) {
                x = x.toFixed(precision)
            }

            if (!roots) {
                formattedPoints += `$ (${x}, ${y}),\\: $`
            } else {
                formattedPoints += `$ (${x}, 0.0),\\: $`
            }
        }
        formattedPoints = formattedPoints.slice(0, -5) + '$'
    } else {
        formattedPoints = `$ None $`
    }
    return formattedPoints
}

export default FormatPoints