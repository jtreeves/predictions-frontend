import GraphOutput from "../../middleware/GraphOutput";

// Create function
function Welcome() {
    let linearPoints = []
    for (let x = 1; x < 100; x++) {
        const y = 0.9 * x + 10
        linearPoints.push({x: x, y: y})
    }
    
    let quadraticPoints = []
    for (let x = 1; x < 100; x++) {
        const y = -0.03 * x**2 + 3 * x + 5
        quadraticPoints.push({x: x, y: y})
    }
    
    let cubicPoints = []
    for (let x = 1; x < 100; x++) {
        const y = -0.0004008 * x**3 + 0.05829 * x**2 - 1.721 * x + 20
        cubicPoints.push({x: x, y: y})
    }
    
    let hyperbolicPoints = []
    for (let x = 1; x < 100; x++) {
        const y = 80.8081 / x + 9.1919
        hyperbolicPoints.push({x: x, y: y})
    }
    
    let exponentialPoints = []
    for (let x = 1; x < 100; x++) {
        const y = 5 * 1.0304**x
        exponentialPoints.push({x: x, y: y})
    }
    
    let logarithmicPoints = []
    for (let x = 1; x < 100; x++) {
        const y = 10 * Math.log(x) + 5
        logarithmicPoints.push({x: x, y: y})
    }
    
    let logisticPoints = []
    for (let x = 1; x < 100; x++) {
        const y = 100 / (1 + Math.exp(-0.1 * (x - 50)))
        logisticPoints.push({x: x, y: y})
    }
    
    let sinusoidalPoints = []
    for (let x = 1; x < 100; x++) {
        const y = 40 * Math.sin(0.5 * (x - 7)) + 50
        sinusoidalPoints.push({x: x, y: y})
    }
    
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