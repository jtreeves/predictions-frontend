import GeneratePoints from '../../utilities/predictions/GeneratePoints'

function DisplayGraphs(props) {
    const handleDisplayLinear = (e) => {
        e.preventDefault()
        if (props.displayLinear) {
            props.setDisplayLinear(false)
            props.setLinearCoordinates('')
        } else {
            props.setDisplayLinear(true)
            props.setLinearCoordinates(GeneratePoints('linear', props.linearConstants, props.xMinimum, props.xMaximum, props.increment, props.precision))
        }
    }
    
    const handleDisplayQuadratic = (e) => {
        e.preventDefault()
        if (props.displayQuadratic) {
            props.setDisplayQuadratic(false)
            props.setQuadraticCoordinates('')
        } else {
            props.setDisplayQuadratic(true)
            props.setQuadraticCoordinates(GeneratePoints('quadratic', props.quadraticConstants, props.xMinimum, props.xMaximum, props.increment, props.precision))
        }
    }
    
    const handleDisplayCubic = (e) => {
        e.preventDefault()
        if (props.displayCubic) {
            props.setDisplayCubic(false)
            props.setCubicCoordinates('')
        } else {
            props.setDisplayCubic(true)
            props.setCubicCoordinates(GeneratePoints('cubic', props.cubicConstants, props.xMinimum, props.xMaximum, props.increment, props.precision))
        }
    }
    
    const handleDisplayHyperbolic = (e) => {
        e.preventDefault()
        if (props.displayHyperbolic) {
            props.setDisplayHyperbolic(false)
            props.setHyperbolicCoordinates('')
        } else {
            props.setDisplayHyperbolic(true)
            props.setHyperbolicCoordinates(GeneratePoints('hyperbolic', props.hyperbolicConstants, props.xMinimum, props.xMaximum, props.increment, props.precision))
        }
    }
    
    const handleDisplayExponential = (e) => {
        e.preventDefault()
        if (props.displayExponential) {
            props.setDisplayExponential(false)
            props.setExponentialCoordinates('')
        } else {
            props.setDisplayExponential(true)
            props.setExponentialCoordinates(GeneratePoints('exponential', props.exponentialConstants, props.xMinimum, props.xMaximum, props.increment, props.precision))
        }
    }
    
    const handleDisplayLogarithmic = (e) => {
        e.preventDefault()
        if (props.displayLogarithmic) {
            props.setDisplayLogarithmic(false)
            props.setLogarithmicCoordinates('')
        } else {
            props.setDisplayLogarithmic(true)
            props.setLogarithmicCoordinates(GeneratePoints('logarithmic', props.logarithmicConstants, props.xMinimum, props.xMaximum, props.increment, props.precision))
        }
    }
    
    const handleDisplayLogistic = (e) => {
        e.preventDefault()
        if (props.displayLogistic) {
            props.setDisplayLogistic(false)
            props.setLogisticCoordinates('')
        } else {
            props.setDisplayLogistic(true)
            props.setLogisticCoordinates(GeneratePoints('logistic', props.logisticConstants, props.xMinimum, props.xMaximum, props.increment, props.precision))
        }
    }
    
    const handleDisplaySinusoidal = (e) => {
        e.preventDefault()
        if (props.displaySinusoidal) {
            props.setDisplaySinusoidal(false)
            props.setSinusoidalCoordinates('')
        } else {
            props.setDisplaySinusoidal(true)
            props.setSinusoidalCoordinates(GeneratePoints('sinusoidal', props.sinusoidalConstants, props.xMinimum, props.xMaximum, props.increment, props.precision))
        }
    }
    
    const handleDisplayOriginal = (e) => {
        e.preventDefault()
        if (props.displayOriginal) {
            props.setDisplayOriginal(false)
            props.setOriginalCoordinates('')
        } else {
            props.setDisplayOriginal(true)
            props.setOriginalCoordinates(props.originalPoints)
        }
    }

    const displayButtons = []

    if (props.displayLinear) {
        displayButtons.push(<article><button className="box pink" onClick={handleDisplayLinear} /><p>linear</p></article>)
    } else {
        displayButtons.push(<article><button className="box blank" onClick={handleDisplayLinear} /><p>linear</p></article>)
    }

    if (props.displayQuadratic) {
        displayButtons.push(<article><button className="box green" onClick={handleDisplayQuadratic} /><p>quadratic</p></article>)
    } else {
        displayButtons.push(<article><button className="box blank" onClick={handleDisplayQuadratic} /><p>quadratic</p></article>)
    }

    if (props.displayCubic) {
        displayButtons.push(<article><button className="box blue" onClick={handleDisplayCubic} /><p>cubic</p></article>)
    } else {
        displayButtons.push(<article><button className="box blank" onClick={handleDisplayCubic} /><p>cubic</p></article>)
    }

    if (props.displayHyperbolic) {
        displayButtons.push(<article><button className="box brown" onClick={handleDisplayHyperbolic} /><p>hyperbolic</p></article>)
    } else {
        displayButtons.push(<article><button className="box blank" onClick={handleDisplayHyperbolic} /><p>hyperbolic</p></article>)
    }

    if (props.displayExponential) {
        displayButtons.push(<article><button className="box orange" onClick={handleDisplayExponential} /><p>exponential</p></article>)
    } else {
        displayButtons.push(<article><button className="box blank" onClick={handleDisplayExponential} /><p>exponential</p></article>)
    }

    if (props.displayLogarithmic) {
        displayButtons.push(<article><button className="box yellow" onClick={handleDisplayLogarithmic} /><p>logarithmic</p></article>)
    } else {
        displayButtons.push(<article><button className="box blank" onClick={handleDisplayLogarithmic} /><p>logarithmic</p></article>)
    }

    if (props.displayLogistic) {
        displayButtons.push(<article><button className="box purple" onClick={handleDisplayLogistic} /><p>logisticic</p></article>)
    } else {
        displayButtons.push(<article><button className="box blank" onClick={handleDisplayLogistic} /><p>logisticic</p></article>)
    }

    if (props.displaySinusoidal) {
        displayButtons.push(<article><button className="box red" onClick={handleDisplaySinusoidal} /><p>sinusoidal</p></article>)
    } else {
        displayButtons.push(<article><button className="box blank" onClick={handleDisplaySinusoidal} /><p>sinusoidal</p></article>)
    }

    if (props.displayOriginal) {
        displayButtons.push(<article><button className="box black" onClick={handleDisplayOriginal} /><p>originals</p></article>)
    } else {
        displayButtons.push(<article><button className="box blank" onClick={handleDisplayOriginal} /><p>originals</p></article>)
    }

    return (
        <section className="display-graphs">
            <h3>Legend</h3>
            {displayButtons}
        </section>
    )
}

export default DisplayGraphs