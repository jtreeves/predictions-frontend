import GeneratePoints from '../../utilities/predictions/GeneratePoints'

function Legend(props) {
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
        displayButtons.push(<li><button className="box pink" onClick={handleDisplayLinear} title="Hide linear graph" /><p>linear</p></li>)
    } else {
        displayButtons.push(<li><button className="box blank" onClick={handleDisplayLinear} title="Show linear graph" /><p>linear</p></li>)
    }

    if (props.displayQuadratic) {
        displayButtons.push(<li><button className="box green" onClick={handleDisplayQuadratic} title="Hide quadratic graph" /><p>quadratic</p></li>)
    } else {
        displayButtons.push(<li><button className="box blank" onClick={handleDisplayQuadratic} title="Show quadratic graph" /><p>quadratic</p></li>)
    }

    if (props.displayCubic) {
        displayButtons.push(<li><button className="box blue" onClick={handleDisplayCubic} title="Hide cubic graph" /><p>cubic</p></li>)
    } else {
        displayButtons.push(<li><button className="box blank" onClick={handleDisplayCubic} title="Show cubic graph" /><p>cubic</p></li>)
    }

    if (props.displayHyperbolic) {
        displayButtons.push(<li><button className="box brown" onClick={handleDisplayHyperbolic} title="Hide hyperbolic graph" /><p>hyperbolic</p></li>)
    } else {
        displayButtons.push(<li><button className="box blank" onClick={handleDisplayHyperbolic} title="Show hyperbolic graph" /><p>hyperbolic</p></li>)
    }

    if (props.displayExponential) {
        displayButtons.push(<li><button className="box orange" onClick={handleDisplayExponential} title="Hide exponential graph" /><p>exponential</p></li>)
    } else {
        displayButtons.push(<li><button className="box blank" onClick={handleDisplayExponential} title="Show exponential graph" /><p>exponential</p></li>)
    }

    if (props.displayLogarithmic) {
        displayButtons.push(<li><button className="box yellow" onClick={handleDisplayLogarithmic} title="Hide logarithmic graph" /><p>logarithmic</p></li>)
    } else {
        displayButtons.push(<li><button className="box blank" onClick={handleDisplayLogarithmic} title="Show logarithmic graph" /><p>logarithmic</p></li>)
    }

    if (props.displayLogistic) {
        displayButtons.push(<li><button className="box purple" onClick={handleDisplayLogistic} title="Hide logistic graph" /><p>logisticic</p></li>)
    } else {
        displayButtons.push(<li><button className="box blank" onClick={handleDisplayLogistic} title="Show logistic graph" /><p>logisticic</p></li>)
    }

    if (props.displaySinusoidal) {
        displayButtons.push(<li><button className="box red" onClick={handleDisplaySinusoidal} title="Hide sinusoidal graph" /><p>sinusoidal</p></li>)
    } else {
        displayButtons.push(<li><button className="box blank" onClick={handleDisplaySinusoidal} title="Show sinusoidal graph" /><p>sinusoidal</p></li>)
    }

    if (props.displayOriginal) {
        displayButtons.push(<li><button className="box black" onClick={handleDisplayOriginal} title="Hide original points" /><p>originals</p></li>)
    } else {
        displayButtons.push(<li><button className="box blank" onClick={handleDisplayOriginal} title="Show original points" /><p>originals</p></li>)
    }

    return (
        <ul id="legend">
            <h3>Legend</h3>
            {displayButtons}
        </ul>
    )
}

export default Legend