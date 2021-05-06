function DisplayLegend(linear, quadratic, cubic, hyperbolic, exponential, logarithmic, logistic, sinusoidal, original) {
    const legend = []

    if (linear) {
        legend.push({ type: "linear", color: "pink" })
    }

    if (quadratic) {
        legend.push({ type: "quadratic", color: "green" })
    }
    
    if (cubic) {
        legend.push({ type: "cubic", color: "blue" })
    }
    
    if (hyperbolic) {
        legend.push({ type: "hyperbolic", color: "brown" })
    }
    
    if (exponential) {
        legend.push({ type: "exponential", color: "orange" })
    }
    
    if (logarithmic) {
        legend.push({ type: "logarithmic", color: "yellow" })
    }
    
    if (logistic) {
        legend.push({ type: "logistic", color: "purple" })
    }
    
    if (sinusoidal) {
        legend.push({ type: "sinusoidal", color: "red" })
    }
    
    if (original) {
        legend.push({ type: "original", color: "black" })
    }

    return legend
}

export default DisplayLegend