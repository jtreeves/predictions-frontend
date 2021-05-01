import GraphOutput from "../../middleware/GraphOutput";

// Create function
function Welcome() {
    const points = [
        { x: 10, y: 20 },
        { x: 20, y: 80 },
        { x: 30, y: 50 },
        { x: 40, y: 70 },
        { x: 50, y: 30 },
        { x: 60, y: 60 },
        { x: 70, y: 10 }
    ]
    return (
        <div>
            <h1>Welcome</h1>
            <p>Use our site to get regression models for any data set you enter.</p>
            <GraphOutput 
                points={points}
            />
        </div>
    )
}

// Export function
export default Welcome