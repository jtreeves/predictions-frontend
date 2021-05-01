import GeneratePoints from "../../middleware/GeneratePoints";
import GraphOutput from "../../middleware/GraphOutput";

// Create function
function Welcome() {
    const linearPoints = GeneratePoints('linear', [0.9, 10])
    const quadraticPoints = GeneratePoints('quadratic', [-0.03, 3, 5])
    const cubicPoints = GeneratePoints('cubic', [-0.0004008, 0.05829, -1.721, 20])
    const hyperbolicPoints = GeneratePoints('hyperbolic', [80.8081, 9.1919])
    const exponentialPoints = GeneratePoints('exponential', [5, 1.0304])
    const logarithmicPoints = GeneratePoints('logarithmic', [10, 5])
    const logisticPoints = GeneratePoints('logistic', [100, 0.1, 50])
    const sinusoidalPoints = GeneratePoints('sinusoidal', [40, 0.5, 7, 50])
    
    return (
        <div>
            <h1>Welcome</h1>
            <p>Use our site to get regression models for any data set you enter.</p>
            <GraphOutput 
                points={linearPoints}
                color="green"
            />
            <GraphOutput 
                points={quadraticPoints}
                color="blue"
            />
            <GraphOutput 
                points={cubicPoints}
                color="purple"
            />
            <GraphOutput 
                points={hyperbolicPoints}
                color="orange"
            />
            <GraphOutput 
                points={exponentialPoints}
                color="brown"
            />
            <GraphOutput 
                points={logarithmicPoints}
                color="yellow"
            />
            <GraphOutput 
                points={logisticPoints}
                color="pink"
            />
            <GraphOutput 
                points={sinusoidalPoints}
                color="red"
            />
        </div>
    )
}

// Export function
export default Welcome