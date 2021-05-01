import GeneratePoints from "../../middleware/GeneratePoints"
import GraphOutput from "../../middleware/GraphOutput"
import VerticalAxis from '../../middleware/VerticalAxis'
import HorizontalAxis from '../../middleware/HorizontalAxis'

// Create function
function Welcome() {
    const originalPoints = [[1, 7], [5, 91], [100, 76], [24, 31]]

    const linearPoints = GeneratePoints('linear', [0.9, 10], originalPoints)
    const quadraticPoints = GeneratePoints('quadratic', [-0.03, 3, 5], originalPoints)
    const cubicPoints = GeneratePoints('cubic', [-0.0004008, 0.05829, -1.721, 20], originalPoints)
    const hyperbolicPoints = GeneratePoints('hyperbolic', [80.8081, 9.1919], originalPoints)
    const exponentialPoints = GeneratePoints('exponential', [5, 1.0304], originalPoints)
    const logarithmicPoints = GeneratePoints('logarithmic', [10, 5], originalPoints)
    const logisticPoints = GeneratePoints('logistic', [100, 0.1, 50], originalPoints)
    const sinusoidalPoints = GeneratePoints('sinusoidal', [40, 0.5, 7, 50], originalPoints)

    const allPoints = [linearPoints, quadraticPoints, cubicPoints, hyperbolicPoints, exponentialPoints, logarithmicPoints, logisticPoints, sinusoidalPoints]
    console.log('ALL POINTS: ', allPoints)
    const xaxis = HorizontalAxis(originalPoints)
    const yaxis = VerticalAxis(allPoints)
    const xscale = xaxis.range
    const yscale = yaxis.range
    const xMinimum = xaxis.minimum
    const xMaximum = xaxis.maximum
    const yMinimum = yaxis.minimum
    const yMaximum = yaxis.maximum
    console.log('X SCALE: ', xscale)
    console.log('Y SCALE: ', yscale)
    
    return (
        <div>
            <h1>Welcome</h1>
            <p>Use our site to get regression models for any data set you enter.</p>
            <GraphOutput 
                points={linearPoints}
                xMinimum={xMinimum}
                xMaximum={xMaximum}
                yMinimum={yMinimum}
                yMaximum={yMaximum}
                color="green"
            />
            <GraphOutput 
                points={quadraticPoints}
                xMinimum={xMinimum}
                xMaximum={xMaximum}
                yMinimum={yMinimum}
                yMaximum={yMaximum}
                color="blue"
            />
            <GraphOutput 
                points={cubicPoints}
                xMinimum={xMinimum}
                xMaximum={xMaximum}
                yMinimum={yMinimum}
                yMaximum={yMaximum}
                color="purple"
            />
            <GraphOutput 
                points={hyperbolicPoints}
                xMinimum={xMinimum}
                xMaximum={xMaximum}
                yMinimum={yMinimum}
                yMaximum={yMaximum}
                color="orange"
            />
            <GraphOutput 
                points={exponentialPoints}
                xMinimum={xMinimum}
                xMaximum={xMaximum}
                yMinimum={yMinimum}
                yMaximum={yMaximum}
                color="brown"
            />
            <GraphOutput 
                points={logarithmicPoints}
                xMinimum={xMinimum}
                xMaximum={xMaximum}
                yMinimum={yMinimum}
                yMaximum={yMaximum}
                color="yellow"
            />
            <GraphOutput 
                points={logisticPoints}
                xMinimum={xMinimum}
                xMaximum={xMaximum}
                yMinimum={yMinimum}
                yMaximum={yMaximum}
                color="pink"
            />
            <GraphOutput 
                points={sinusoidalPoints}
                xMinimum={xMinimum}
                xMaximum={xMaximum}
                yMinimum={yMinimum}
                yMaximum={yMaximum}
                color="red"
            />
        </div>
    )
}

// Export function
export default Welcome