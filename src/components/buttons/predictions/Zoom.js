import HorizontalAxis from '../../utilities/predictions/HorizontalAxis'
import ZoomSeparateGraphs from '../../utilities/predictions/ZoomSeparateGraphs'

function Zoom(props) {
    const handleSeparateGraphs = (xMinimum, xMaximum, increment) => {
        ZoomSeparateGraphs(
            props.displayOriginal, 
            props.setOriginalCoordinates, 
            props.originalPoints, 
            props.displayLinear, 
            props.setLinearCoordinates, 
            props.linearConstants, 
            props.displayQuadratic, 
            props.setQuadraticCoordinates, 
            props.quadraticConstants, 
            props.displayCubic, 
            props.setCubicCoordinates, 
            props.cubicConstants, 
            props.displayHyperbolic, 
            props.setHyperbolicCoordinates, 
            props.hyperbolicConstants, 
            props.displayExponential, 
            props.setExponentialCoordinates, 
            props.exponentialConstants, 
            props.displayLogarithmic, 
            props.setLogarithmicCoordinates, 
            props.logarithmicConstants, 
            props.displayLogistic, 
            props.setLogisticCoordinates, 
            props.logisticConstants, 
            props.displaySinusoidal, 
            props.setSinusoidalCoordinates, 
            props.sinusoidalConstants, 
            xMinimum, 
            xMaximum, 
            increment, 
            props.precision
        )
    }

    const handleZoomOut = (e) => {
        e.preventDefault()
        props.setZoom(props.zoom + 0.1)
        const xAxis = HorizontalAxis(props.originalPoints, props.zoom + 0.1)
        const xMinimum = xAxis.minimum
        const xMaximum = xAxis.maximum
        const increment = xAxis.increment
        handleSeparateGraphs(xMinimum, xMaximum, increment)
    }
    
    const handleZoomIn = (e) => {
        e.preventDefault()
        props.setZoom(props.zoom - 0.1)
        const xAxis = HorizontalAxis(props.originalPoints, props.zoom - 0.1)
        const xMinimum = xAxis.minimum
        const xMaximum = xAxis.maximum
        const increment = xAxis.increment
        handleSeparateGraphs(xMinimum, xMaximum, increment)
    }

    return (
        <article 
            className="analysis"
            id="zoom"
        >
            <h3>Zoom</h3>

            <p>
                <button 
                    onClick={handleZoomIn}
                    title="Zoom in on graph"
                >
                    +
                </button>

                <button 
                    onClick={handleZoomOut}
                    title="Zoom out of graph"
                >
                    -
                </button>
            </p>
        </article>
    )
}

export default Zoom