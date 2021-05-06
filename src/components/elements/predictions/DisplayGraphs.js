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
        displayButtons.push(<button key="linear" onClick={handleDisplayLinear}>Hide Linear Graph</button>)
    } else {
        displayButtons.push(<button key="linear" onClick={handleDisplayLinear}>Show Linear Graph</button>)
    }

    if (props.displayQuadratic) {
        displayButtons.push(<button key="quadratic" onClick={handleDisplayQuadratic}>Hide Quadratic Graph</button>)
    } else {
        displayButtons.push(<button key="quadratic" onClick={handleDisplayQuadratic}>Show Quadratic Graph</button>)
    }

    if (props.displayCubic) {
        displayButtons.push(<button key="cubic" onClick={handleDisplayCubic}>Hide Cubic Graph</button>)
    } else {
        displayButtons.push(<button key="cubic" onClick={handleDisplayCubic}>Show Cubic Graph</button>)
    }

    if (props.displayHyperbolic) {
        displayButtons.push(<button key="hyperbolic" onClick={handleDisplayHyperbolic}>Hide Hyperbolic Graph</button>)
    } else {
        displayButtons.push(<button key="hyperbolic" onClick={handleDisplayHyperbolic}>Show Hyperbolic Graph</button>)
    }

    if (props.displayExponential) {
        displayButtons.push(<button key="exponential" onClick={handleDisplayExponential}>Hide Exponential Graph</button>)
    } else {
        displayButtons.push(<button key="exponential" onClick={handleDisplayExponential}>Show Exponential Graph</button>)
    }

    if (props.displayLogarithmic) {
        displayButtons.push(<button key="logarithmic" onClick={handleDisplayLogarithmic}>Hide Logarithmic Graph</button>)
    } else {
        displayButtons.push(<button key="logarithmic" onClick={handleDisplayLogarithmic}>Show Logarithmic Graph</button>)
    }

    if (props.displayLogistic) {
        displayButtons.push(<button key="logistic" onClick={handleDisplayLogistic}>Hide Logistic Graph</button>)
    } else {
        displayButtons.push(<button key="logistic" onClick={handleDisplayLogistic}>Show Logistic Graph</button>)
    }

    if (props.displaySinusoidal) {
        displayButtons.push(<button key="sinusoidal" onClick={handleDisplaySinusoidal}>Hide Sinusoidal Graph</button>)
    } else {
        displayButtons.push(<button key="sinusoidal" onClick={handleDisplaySinusoidal}>Show Sinusoidal Graph</button>)
    }

    if (props.displayOriginal) {
        displayButtons.push(<button key="original" onClick={handleDisplayOriginal}>Hide Original Points</button>)
    } else {
        displayButtons.push(<button key="original" onClick={handleDisplayOriginal}>Show Original Points</button>)
    }

    return (
        <div>
            {displayButtons}
        </div>
    )
}

export default DisplayGraphs