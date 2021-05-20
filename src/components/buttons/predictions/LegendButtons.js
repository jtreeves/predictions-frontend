import GeneratePoints from '../../../utilities/predictions/GeneratePoints'

function LegendButtons(props) {
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
        displayButtons.push(
            <li key="linear">
                <button 
                    className="box pink" 
                    title="Hide linear graph" 
                    onClick={handleDisplayLinear} 
                />
                <p>linear</p>
            </li>
        )
    } else {
        displayButtons.push(
            <li key="linear">
                <button 
                    className="box blank" 
                    title="Show linear graph" 
                    onClick={handleDisplayLinear} 
                />
                <p>linear</p>
            </li>
        )
    }

    if (props.displayQuadratic) {
        displayButtons.push(
            <li key="quadratic">
                <button 
                    className="box green" 
                    title="Hide quadratic graph" 
                    onClick={handleDisplayQuadratic} 
                />
                <p>quadratic</p>
            </li>
        )
    } else {
        displayButtons.push(
            <li key="quadratic">
                <button 
                    className="box blank" 
                    title="Show quadratic graph" 
                    onClick={handleDisplayQuadratic} 
                />
                <p>quadratic</p>
            </li>
        )
    }

    if (props.displayCubic) {
        displayButtons.push(
            <li key="cubic">
                <button 
                    className="box blue" 
                    title="Hide cubic graph" 
                    onClick={handleDisplayCubic} 
                />
                <p>cubic</p>
            </li>
        )
    } else {
        displayButtons.push(
            <li key="cubic">
                <button 
                    className="box blank" 
                    title="Show cubic graph" 
                    onClick={handleDisplayCubic} 
                />
                <p>cubic</p>
            </li>
        )
    }

    if (props.displayHyperbolic) {
        displayButtons.push(
            <li key="hyperbolic">
                <button 
                    className="box brown" 
                    title="Hide hyperbolic graph" 
                    onClick={handleDisplayHyperbolic} 
                />
                <p>hyperbolic</p>
            </li>
        )
    } else {
        displayButtons.push(
            <li key="hyperbolic">
                <button 
                    className="box blank" 
                    title="Show hyperbolic graph" 
                    onClick={handleDisplayHyperbolic} 
                />
                <p>hyperbolic</p>
            </li>
        )
    }

    if (props.displayExponential) {
        displayButtons.push(
            <li key="exponential">
                <button 
                    className="box orange" 
                    title="Hide exponential graph" 
                    onClick={handleDisplayExponential} 
                />
                <p>exponential</p>
            </li>
        )
    } else {
        displayButtons.push(
            <li key="exponential">
                <button 
                    className="box blank" 
                    title="Show exponential graph" 
                    onClick={handleDisplayExponential} 
                />
                <p>exponential</p>
            </li>
        )
    }

    if (props.displayLogarithmic) {
        displayButtons.push(
            <li key="logarithmic">
                <button 
                    className="box yellow" 
                    title="Hide logarithmic graph" 
                    onClick={handleDisplayLogarithmic} 
                />
                <p>logarithmic</p>
            </li>
        )
    } else {
        displayButtons.push(
            <li key="logarithmic">
                <button 
                    className="box blank" 
                    title="Show logarithmic graph" 
                    onClick={handleDisplayLogarithmic} 
                />
                <p>logarithmic</p>
            </li>
        )
    }

    if (props.displayLogistic) {
        displayButtons.push(
            <li key="logistic">
                <button 
                    className="box purple" 
                    title="Hide logistic graph" 
                    onClick={handleDisplayLogistic} 
                />
                <p>logisticic</p>
            </li>
        )
    } else {
        displayButtons.push(
            <li key="logistic">
                <button 
                    className="box blank" 
                    title="Show logistic graph" 
                    onClick={handleDisplayLogistic} 
                />
                <p>logisticic</p>
            </li>
        )
    }

    if (props.displaySinusoidal) {
        displayButtons.push(
            <li key="sinusoidal">
                <button 
                    className="box red" 
                    title="Hide sinusoidal graph" 
                    onClick={handleDisplaySinusoidal} 
                />
                <p>sinusoidal</p>
            </li>
        )
    } else {
        displayButtons.push(
            <li key="sinusoidal">
                <button 
                    className="box blank" 
                    title="Show sinusoidal graph" 
                    onClick={handleDisplaySinusoidal} 
                />
                <p>sinusoidal</p>
            </li>
        )
    }

    if (props.displayOriginal) {
        displayButtons.push(
            <li key="original">
                <button 
                    className="box black" 
                    title="Hide original points" 
                    onClick={handleDisplayOriginal} 
                />
                <p>originals</p>
            </li>
        )
    } else {
        displayButtons.push(
            <li key="original">
                <button 
                    className="box blank" 
                    title="Show original points" 
                    onClick={handleDisplayOriginal} 
                />
                <p>originals</p>
            </li>
        )
    }

    return (
        <ul id="legend">
            <h3>Legend</h3>
            {displayButtons}
        </ul>
    )
}

export default LegendButtons