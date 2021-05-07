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
        displayButtons.push(<div><button className="box pink" onClick={handleDisplayLinear} />linear</div>)
    } else {
        displayButtons.push(<div><button className="box blank" onClick={handleDisplayLinear} />linear</div>)
    }

    if (props.displayQuadratic) {
        displayButtons.push(<div><button className="box green" onClick={handleDisplayQuadratic} />quadratic</div>)
    } else {
        displayButtons.push(<div><button className="box blank" onClick={handleDisplayQuadratic} />quadratic</div>)
    }

    if (props.displayCubic) {
        displayButtons.push(<div><button className="box blue" onClick={handleDisplayCubic} />cubic</div>)
    } else {
        displayButtons.push(<div><button className="box blank" onClick={handleDisplayCubic} />cubic</div>)
    }

    if (props.displayHyperbolic) {
        displayButtons.push(<div><button className="box brown" onClick={handleDisplayHyperbolic} />hyperbolic</div>)
    } else {
        displayButtons.push(<div><button className="box blank" onClick={handleDisplayHyperbolic} />hyperbolic</div>)
    }

    if (props.displayExponential) {
        displayButtons.push(<div><button className="box orange" onClick={handleDisplayExponential} />exponential</div>)
    } else {
        displayButtons.push(<div><button className="box blank" onClick={handleDisplayExponential} />exponential</div>)
    }

    if (props.displayLogarithmic) {
        displayButtons.push(<div><button className="box yellow" onClick={handleDisplayLogarithmic} />logarithmic</div>)
    } else {
        displayButtons.push(<div><button className="box blank" onClick={handleDisplayLogarithmic} />logarithmic</div>)
    }

    if (props.displayLogistic) {
        displayButtons.push(<div><button className="box purple" onClick={handleDisplayLogistic} />logistic</div>)
    } else {
        displayButtons.push(<div><button className="box blank" onClick={handleDisplayLogistic} />logistic</div>)
    }

    if (props.displaySinusoidal) {
        displayButtons.push(<div><button className="box red" onClick={handleDisplaySinusoidal} />sinusoidal</div>)
    } else {
        displayButtons.push(<div><button className="box blank" onClick={handleDisplaySinusoidal} />sinusoidal</div>)
    }

    if (props.displayOriginal) {
        displayButtons.push(<div><button className="box black" onClick={handleDisplayOriginal} />original</div>)
    } else {
        displayButtons.push(<div><button className="box blank" onClick={handleDisplayOriginal} />original</div>)
    }

    return (
        <section>
            {displayButtons}
        </section>
    )
}

export default DisplayGraphs